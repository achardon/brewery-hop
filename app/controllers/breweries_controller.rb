class BreweriesController < ApplicationController
# before_action :authenticate_user!

    def index
        # render json: Brewery.all
        if user_signed_in?
            render json: current_user
        else
            render json: {error: "You must be logged in to view this page."}
        end
    end

end
