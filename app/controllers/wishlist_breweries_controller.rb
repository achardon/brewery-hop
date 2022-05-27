class WishlistBreweriesController < ApplicationController

    def index
        render json: WishlistBrewery.all
    end

    def create
        brewery = Brewery.find_or_create_by(name: params[:name], street: params[:street], city: params[:city], state: params[:state], longitude: params[:longitude], latitude: params[:latitude], website_url: params[:website_url])
        wish = WishlistBrewery.find_or_create_by(user_id: params[:user_id], brewery_id: brewery.id)
        render json: wish
    end

end
