# Brewery Hop

## Description

This app is designed for brewery enthusiasts who want to easily figure out which breweries are in a town they are visiting. The user will be able to search for breweries in a given town and see a list of breweries as well as a map that shows pins for different breweries. Users will be able to easily read reviews about each brewery and visit the brewery website. When logged in, users can also add reviews to breweries they have been to, as well as create a brewery bucket list.

It is currently deployed on [Heroku](https://brewery-hop-app.herokuapp.com/).

## Installation

This app requires:

- Ruby 2.7.4
- NodeJS (v16)
- npm
- Heroku CLI
- Postgresql 14.2

The Rails backend requires the following gems:

- rails
- pg
- puma
- bcrpyt
- bootsnap
- jsonapi-serializer
- devise

The React frontend requires the following dependencies:

- react
- react-bootstrap
- react-dom
- react-router-dom
- react-redux
- mapbox-gl

To set up and run the application, use the following commands:

```bash
bundle install
rails db:create
npm install --prefix client
rails s
npm start --prefix client
```

## Usage

Users can search breweries on the 'Search Breweries' tab. Search results will yield pins on the map which the user can click on to see which brewery is located in what part of town. A list will also be displayed with the address of the brewery, a link to the brewery website, as well as any reviews that have been left. In order to use the 'Bucket List' feature, a user needs to have an account. Once signed in, a user can add a brewery to their Bucketlist by clicking on the heart icon. They can also leave a review for any brewery they want to.

## Contributing

Pull requests are welcome. If you would like to see any major changes, please open an issue first to discuss what you would like to change. 

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Alessandra Chardon   

[LinkedIn](https://www.linkedin.com/in/alessandra-chardon-08024342/) 


