class Reservation < ActiveRecord::Base
  belongs_to :guest
  belongs_to :bnb
  has_one :review, dependent: :destroy
end
