class UserSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :email, :password, :encrypted_password
end
