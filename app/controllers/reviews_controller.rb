class ReviewsController < ApplicationController
  before_action :owns_review, only: %i[show update destroy]
  skip_before_action :is_authorized, only: %i[bnb_reviews]

  def index
    reviews = Review.select { |review| review.guest_id == current_guest.id }
    render json: reviews, status: :ok
  end

  def bnb_reviews
    bnb = Bnb.find(params[:id])
    reviews = bnb.reviews
    render json: reviews, status: :ok
  end

  def show
    render json: @review, status: :ok
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def update
    @review.update!(review_params)
    render json: @review, status: :accepted
  end

  def destroy
    @review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:id, :text, :rating, :guest_id, :bnb_id, :reservation_id)
  end

  def owns_review
    @review = Review.find(params[:id])
    permitted = @review.guest_id == current_guest.id
    unless permitted
      render json: { errors: ["You are not the owner of this review"] }, status: :unauthorized
    end
  end
end