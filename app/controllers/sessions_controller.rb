class SessionsController < ApplicationController
  skip_before_action :is_authorized, only: %i[index create]

  def index
    render json: current_guest, status: :ok
  end

  def create
    guest = Guest.find_by(username: params[:username])
    if guest&.authenticate(params[:password])
      session[:guest_id] = guest.id
      render json: guest, status: :created
    else
      render json: { errors: ["Invalid username or password"] },
             status: :unauthorized
    end
  end

  def destroy
    session.delete(:guest_id)
    head :no_content
  end
end
