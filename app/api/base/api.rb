module Base
    class API < Grape::API
    # APIをここにマウント
        mount V1::Root
    end
end
