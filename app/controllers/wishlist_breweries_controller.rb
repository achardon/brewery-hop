class WishlistBreweriesController < ApplicationController

    def index
        render json: WishlistBrewery.all
    end

    def create
        brewery = Brewery.find_or_create_by(name: params[:name], address: params[:address], gps_coords: params[:gps_coords], website: params[:website])
        wish = WishlistBrewery.create(user_id: params[:user_id], brewery_id: brewery.id)
        render json: wish
    end

end
