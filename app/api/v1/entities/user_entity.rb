module V1
    module Entities
      class UserEntity < Grape::Entity
        #entityのレスポンスに含める属性
        expose :name
        expose :email
        expose :password
      end
    end
end