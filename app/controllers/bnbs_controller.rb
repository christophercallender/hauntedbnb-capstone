class BnbsController < ApplicationController
  skip_before_action :is_authorized

  def index
    bnbs = Bnb.all
    render json: bnbs, status: :ok
  end

  def show
    bnb = Bnb.find(params[:id])
    render json: bnb, status: :ok
  end
end
