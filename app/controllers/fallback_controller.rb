class FallbackController < ApplicationController::Base64
    def index
        render file: 'public/index.html'
    end
end
