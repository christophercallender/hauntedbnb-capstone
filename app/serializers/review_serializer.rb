class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating, :created_at, :updated_at
  belongs_to :guest
  belongs_to :bnb
  belongs_to :reservation
end
