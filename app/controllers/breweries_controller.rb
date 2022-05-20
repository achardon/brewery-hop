class BreweriesController < ApplicationController

    def index
        # render json: Brewery.all
        render json: current_user

    end

end
