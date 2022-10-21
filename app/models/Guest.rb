class Guest < ActiveRecord::Base
  has_many :reviews, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :bnbs, through: :reviews
  has_many :bnbs, through: :reservations
  has_secure_password
  validates :first_name, :last_name, presence: true
  validates :username, presence: true, uniqueness: true
end
