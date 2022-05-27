class ReviewsController < ApplicationController

    def index
        
        render json: Review.all
    end

    def create

    end

end
