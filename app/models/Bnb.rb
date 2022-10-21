class Bnb < ActiveRecord::Base
  has_many :reviews, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :guests, through: :reviews
  has_many :guests, through: :reservations
end