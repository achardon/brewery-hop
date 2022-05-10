# Description

This app is designed for brewery enthusiasts who want to easily figure out which breweries are in a town they are visiting. The user will be able to search for breweries in a given town and see a list of breweries as well as a map that shows pins for different breweries. Users will be able to easily read reviews about each brewery and visit the brewery website. When logged in, users can also add reviews to breweries they have been to, as well as create a brewery bucket list.

# MVP

As a user (not signed in) I can:
-search a city - DONE
-see results of all breweries in that city as a list - DONE
-AND as a map (use Mapbox?)
-upon clicking on brewery:
    -see name, address, and website of brewery
    -read reviews about that brewery

As a user (signed in) I can:
-"check in" to a brewery that I have visited
-add review to a brewery
-rate brewery
-see my Brewery Bucket List/Wishlist of breweries I want to visit
-see my Already Been There List of breweries

# Stretch Goals

-user can add certain mile radius of city to search for
-additional model: Beer, where users can rate specific beers from each brewery as well as the brewery itself

# Models

User
-name
-password (secure)
-has many reviews
-has many wishlistBreweries
-has many breweries through reviews AND wishlistBreweries
-Validations: must have name and password

Brewery
-name
-address
-GPS coords
-website URL
-has many reviews
-has many users through reviews AND wishlistBreweries
Validations: must have name

Review
-comment
-stars
-belongs to brewery
-belongs to user
Validations: comment cannot be blank, stars cannot be blank, must belong to brewery and user

WishlistBrewery
-belongs to user
-belongs to brewery
Validations: must belong to brewery and user

# Requirements

The listed requirements below are guidelines that should help you to determine what the complexity of your project should be. They are not hard and fast rules, and final project approval is up to your leads and SECs, who will be acting as project managers.

Backend
Your project must use a non-trivial Rails backend. Consult the following list for examples of things to include. You do not need to include all of these things, and the final decision of what must be included will be up to your project managers.

[ ] Auth
[ ] Tests
[ ] Multiple hasmanythrough relationships
[ ] Seeds from a complex data set
[ ] Custom routes
[ ] Custom controller/model methods
[ ] Basic database query optimizations
[ ] Background jobs for slow actions
[ ] Sockets or email integration
[ ] One significant refactor
[ ] Validation

Frontend
Your product must use a React based frontend. Consult the following list for examples of things to include. You do not need to include all of these things, and the final decision of what must be included will be up to your project manager (your instructor).

[ ] Auth
[ ] Tests
[ ] Interacting with a complex API
[ ] Redux
[ ] Custom CSS
[ ] One significant refactor


Resources:
Mapbox: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/

Mapbox questions:
-documentation says to import like this: import mapboxgl from '!mapbox-gl'; but when I do that, an error says "Line 6:1:  Unexpected '!' in '!mapbox-gl'. Do not use import syntax to configure webpack loaders  import/no-webpack-loader-syntax"... why  does it not work that way locally? When I push to heroku, it does not work and it says there is a transpiling error (which is what the documentation says will happen if you don't include the banger). 