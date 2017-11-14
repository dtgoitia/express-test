const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const db = [
  {
    make: 'ALFA ROMEO',
    model: '4C',
    price: 20000,
    mileage: 15000,
    year: 2015,
    image: 'http://blog.caranddriver.com/wp-content/uploads/2014/06/2015-Alfa-Romeo-4C-Launch-Edition-PLACEMENT-626x382.jpg'
  },
  {
    make: 'AUDI',
    model: 'A4',
    price: 29000,
    mileage: 15000,
    year: 2015,
    image: 'http://media.caranddriver.com/images/13q4/543506/2015-audi-a4-rendered-detailed-news-car-and-driver-photo-560015-s-450x274.jpg'
  },
  {
    make: 'AUDI',
    model: 'TT QUATTRO',
    price: 45000,
    mileage: 15000,
    year: 2015,
    image: 'http://www.dpccars.com/gallery/var/resizes/Silver-2015-Audi-TT-in-snow-photoshoot/Silver%202015%20Audi%20TT%20in%20snow%20photoshoot%20(2).jpg'
  },
  {
    make: 'BMW',
    model: 'CONTINENTAL',
    price: 49000,
    mileage: 15000,
    year: 2015,
    image: 'http://ag-spots-2015.o.auroraobjects.eu/2015/01/26/bentley-continental-gt-speed-2015-c663026012015045948_1.jpg'
  }
];
// app.use(bodyParser.urlencoded());

// TODO:
// Convert filterData JSON from frontend to URL request with parameters
// Retrieve data based on filterData JSON from request.query
const GetParam = (obj, key) => obj.hasOwnProperty(key) ? obj[key].split(',') : null;

const GetData = filterData => {
  const makeFilter = GetParam(filterData, 'make');
  const yearFilter = GetParam(filterData, 'year');
  const priceFilter = GetParam(filterData, 'price');
  
  const filteredDb = db
  // ensure that if no make parameter is passed, all makes are sent to the client
    .filter(carEntry => {
      if (makeFilter) {
        if (makeFilter.includes(carEntry.make.toLowerCase()) ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .filter(carEntry => {
      if (yearFilter) {
        if (yearFilter.includes(carEntry.year.toString()) ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      } 
    })
    .filter(carEntry => {
      if (priceFilter) {
        return carEntry.price <= priceFilter[0]
      } else {
        return true
      }
    });
  return filteredDb;
}

app.get('/', function(request, res) {
  // return 404
  console.log('/ GET accessed');
  res.send('Hello world!');
});

app.get('/api/cars', function(request, response) {
  // retrieve all data if not parameters -------------------------------- NEXT STEP
  // console.log('GET @ ', request.url);
  console.log('  request.query:', request.query);
  if (Object.getOwnPropertyNames(request.query).length > 0) {
    // is there any query parameter?
    const filteredDb = GetData(request.query);
    response.setHeader('content-type', 'text/json');
    response.send(JSON.stringify(filteredDb));
  } else {
    // No parameters in the request: send whole database
    response.setHeader('content-type', 'text/json');
    response.send(JSON.stringify(db));
  }
});

app.listen(3000, function() {
  console.log('App listening in port 3000');
});