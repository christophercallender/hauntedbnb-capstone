class ReservationsController < ApplicationController
  before_action :owns_reservation, only: %i[show update destroy]
  
  def index
  reservations = Reservation.select { |reservation| reservation.guest_id == current_guest.id }
  render json: reservations, status: :ok
  end
  
  def show
    render json: @reservation, status: :ok
  end

  def create
    reservation = Reservation.create!(reservation_params)
    render json: reservation, status: :created
  end

  def update
    @reservation.update!(reservation_params)
    render json: @reservation, status: :accepted
  end

  def destroy
    @reservation.destroy
    head :no_content
  end

  private
  
  def reservation_params
    params.permit(:check_in, :check_out, :guest_id, :bnb_id)
  end

  def owns_reservation
    @reservation = Reservation.find(params[:id])
    permitted = @reservation.guest_id == current_guest.id
    unless permitted
      render json: { errors: ["You are not the owner of this reservation"] }, status: :unauthorized
    end
  end
end