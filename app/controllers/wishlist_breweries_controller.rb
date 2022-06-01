class WishlistBreweriesController < ApplicationController

    def index
        user = current_user
        userWishlist = WishlistBrewery.where(user_id: current_user.id)
        render json: userWishlist
    end

    # def show
    #     user = current_user
    #     userWishlist = WishlistBrewery.where(user_id: current_user.id)
    #     render json: userWishlist
    # end

    def create
        brewery = Brewery.find_or_create_by(name: params[:name], street: params[:street], city: params[:city], state: params[:state], longitude: params[:longitude], latitude: params[:latitude], website_url: params[:website_url])
        wish = WishlistBrewery.find_or_create_by(user_id: current_user.id, brewery_id: brewery.id)
        render json: wish
    end

end
