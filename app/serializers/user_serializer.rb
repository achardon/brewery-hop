class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :encrypted_password
end
