class BreweriesController < ApplicationController

    def index
        # render json: Brewery.all
        render json: user_signed_in?

    end

end
