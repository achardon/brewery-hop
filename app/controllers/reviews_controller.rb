class ReviewsController < ApplicationController

    def index
        
        render json: Review.all
    end

    def create
        review = Review.create(comment: params[:comment], user_id: params[:user_id], brewery_id: params[:brewery_id])
        render json: review
    end

end
