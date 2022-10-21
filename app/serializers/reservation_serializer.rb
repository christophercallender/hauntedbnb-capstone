class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :check_in, :check_out, :guest_id, :bnb_id
  belongs_to :guest
  belongs_to :bnb
  has_one :review
end
