class ReviewsController < ApplicationController
before_action :authenticate_user!, only: [:create]

    def index
        render json: Review.all
    end

    def create
        review = Review.create(comment: params[:comment], user_id: current_user.id, brewery_id: params[:brewery_id])
        render json: review

        # the below does not work because the route to post a review has to have the brewery id in the URL and if the brewery does not exist yet then we cannot add the brewery id
        # brewery = Brewery.find_or_create_by(name: params[:name], street: params[:street], city: params[:city], state: params[:state], longitude: params[:longitude], latitude: params[:latitude], website_url: params[:website_url])

        # review = Review.create(comment: params[:comment], user_id: current_user.id, brewery_id: brewery.id)
       
        # render json: review
    end

end
