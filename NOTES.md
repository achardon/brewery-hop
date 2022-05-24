# Description

This app is designed for brewery enthusiasts who want to easily figure out which breweries are in a town they are visiting. The user will be able to search for breweries in a given town and see a list of breweries as well as a map that shows pins for different breweries. Users will be able to easily read reviews about each brewery and visit the brewery website. When logged in, users can also add reviews to breweries they have been to, as well as create a brewery bucket list.

# MVP

As a user (not signed in) I can:
-search a city - DONE
-see results of all breweries in that city as a list - DONE
-AND as a map - DONE
    -need to use geocoding to get coordinates of the search city
    -need to also get coords of each brewery that gets returned
    -add pin of each brewery to map after search
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
Local search with the geocoding API: https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/
https://docs.mapbox.com/api/search/geocoding/
Add custom markers with popups: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/?q=.addTo&size=n_10_n
react-map-gl: https://visgl.github.io/react-map-gl/docs/get-started/tips-and-tricks
mapbox react examples: https://github.com/mapbox/mapbox-react-examples

Mapbox questions:
-documentation says to import like this: import mapboxgl from '!mapbox-gl'; but when I do that, an error says "Line 6:1:  Unexpected '!' in '!mapbox-gl'. Do not use import syntax to configure webpack loaders  import/no-webpack-loader-syntax"... why  does it not work that way locally? When I push to heroku, it does not work and it says there is a transpiling error (which is what the documentation says will happen if you don't include the banger). When I try to push to heroku with the banger, it says build failed and gives same error about the unexpected '!'
Final Projects Presentation: https://www.youtube.com/watch?v=URpa2-CIsD4 (minute 17 - project with mapbox)

This worked:
took out in package.json:
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
and instead made it:
  "browserslist": {
    "production": [
     "defaults, not ie 11"
    ],

# Outstanding questions:
Upon log in, it doesn't immediately update in the navbar... how do I make sure the navbar re-renders? I tried doing a useSelector within the useEffect to access state but that is not allowed.

In the Home component, I am getting an error when I console.log(breweries), which is the strangest thing... what is happening?? When I do the same console.log inside a function there is no problem. ('Uncaught TypeError: inputArgs[0].match is not a function')

In Heroku, I passed in the access token to config vars but it's still not working and still says "An API key is required..."

Redux - toolkit vs not? 
-recommend not using it (so you can first learn a slightly less abstract way of using it)

Redux - in all the labs we create and delete objects on the front end. With a rails backend, how does that work? Does the object first get created in redux and then sent to the backend or vice versa?
-create first in rails, then update application state with redux
-best use case for this case: keeping signed in user in application state

Models - with regards to breweries, should I be creating a new brewery object on the backend with every search? If I want to enable reviews and brewery bucket lists... what are best practices there? Should I be adding breweries to brewery table every time a fetch occurs when a user searches a city?
-use find or create in rails when creating a new brewery
-accepts nested attributes for (creating brewery and review at the same time)
-fetch breweries normally when there's a search, and then only look it up in the database when a user wants to know more or leave a review

Rails 
-authentication: devise, https://rubygems.org/gems/devise, https://github.com/heartcombo/devise
-authorization tool: cancancan, https://github.com/CanCanCommunity/cancancan
-speeding up rails application (indexing, pre-loading associations)
-different serializer gem: fast json (developed my netflix)
    -https://github.com/jsonapi-serializer/jsonapi-serializer


Devise 
instructions in console upon installing:

Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 } - DONE

     In production, :host should be set to the actual host of your application. - NOT DONE

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"
     
     * Not required for API-only Applications * (therefore I don't need it?)

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
       
     * Not required *

documentation: https://rubydoc.info/github/heartcombo/devise

Route to see all routes on backend server: http://localhost:3000/rails/info/routes


Users
achardon@ucla.edu, yesplease
hagartypatrick@gmail.com, beeroclock
example@ucla.edu, example