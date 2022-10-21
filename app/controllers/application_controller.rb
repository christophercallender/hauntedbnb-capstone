class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :is_authorized
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  wrap_parameters format: []

  def current_guest
    @current_guest ||= Guest.find_by(id: session[:guest_id])
  end

  private

  def is_authorized
    unless current_guest
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  def is_admin
    permitted = current_guest.admin?
    unless permitted
      render json: { errors: ["Admin access required"] }, status: :unauthorized
    end
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages
           },
           status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { errors: NotFound.message }, status: :not_found
  end
end
