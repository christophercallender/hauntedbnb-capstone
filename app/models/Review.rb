class Review < ActiveRecord::Base
  belongs_to :guest
  belongs_to :bnb
  belongs_to :reservation
  validates :text, presence: true, length: { maximum: 500 }
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
end
