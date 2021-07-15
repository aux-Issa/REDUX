module V1
    class Users < Grape::API
      resources :users do
        ##########テスト##########
        desc 'returns all authors'
        get '/' do
          @users = User.all 
          present @users, with: V1::Entities::UserEntity
        end
        get '/:id' do
          if @user = User.find_by(id: params[:id])
            present @user, with: V1::Entities::UserEntity
          else  
            error!('ユーザーが存在しません', 401)  
          end  
        end
        ##################

        #　↓↓↓↓↓↓↓↓↓reactのaxiosでこのurlに，フォームに入力された内容とともにPOSTリクエストを送りつける
        desc 'signin'
        params do
          requires :email, type: String
          requires :password, type: String
        end
        post '/signin' do
          if @user = User.find_by(email: params[:email])
            if @user.password == params[:password]
                #presentで, Entityを使用して呼び出し元に返す
                present @user, with: V1::Entities::UserEntity
            else
                error!('パスワードが間違っています', 401)  
            end
          else 
            error!('メールアドレスが無効です', 401) 
          end
        end
  
        # desc 'signup'
        # params do
        #   requires :email, type: String
        #   requires :password, type: String
        #   requires :name, type: String
        # end
        # post '/signup' do
        #   @user = User.new(declared(params))
  
        #   if @user.save
        #     present @user, with: V1::Entities::UserEntity
        #   else
        #     @user.errors.full_messages
        #   end
        # end
      end
    end
end