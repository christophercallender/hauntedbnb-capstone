class BnbSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :coordinates, :summary, :image_url, :price
  has_many :reviews
  has_many :reservations
end
