class GuestSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username
  has_many :reviews
  has_many :reservations
end
