class BreweriesController < ApplicationController
# before_action :authenticate_user!

    def index
        # render json: Brewery.all
        # if user_signed_in?
        #     render json: current_user
        # else
        #     render json: {error: "You must be logged in to view this page."}
        # end
        render json: Brewery.all
    end

    def brewery_exists
        brewery = Brewery.find_by(name: params[:name])
        users = brewery.users
        if users.include?(current_user)
            render json: brewery
        else
            render json: {error: "No brewery found"}
        end
    end

    def create
        brewery = Brewery.find_or_create_by(name: params[:name], street: params[:street], city: params[:city], state: params[:state], longitude: params[:longitude], latitude: params[:latitude], website_url: params[:website_url])
        render json: brewery

        # if params for review exist, then you can add a review here; if not, it can just create the brewery.
    end


end
