class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :brewery
  has_one :user
end
