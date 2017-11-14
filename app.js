const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const db = [
  {
      make: 'ALFA ROMEO',
      model: '4C',
      price: 20000,
      mileage:15000,
      year: 2015,
      image: 'http://blog.caranddriver.com/wp-content/uploads/2014/06/2015-Alfa-Romeo-4C-Launch-Edition-PLACEMENT-626x382.jpg'
  },
  {
      make: 'AUDI',
      model: 'A4',
      price: 29000,
      mileage:15000,
      year: 2015,
      image: 'http://media.caranddriver.com/images/13q4/543506/2015-audi-a4-rendered-detailed-news-car-and-driver-photo-560015-s-450x274.jpg'
  },
  {
      make: 'AUDI',
      model: 'TT QUATTRO',
      price: 45000,
      mileage:15000,
      year: 2015,
      image: 'http://www.dpccars.com/gallery/var/resizes/Silver-2015-Audi-TT-in-snow-photoshoot/Silver%202015%20Audi%20TT%20in%20snow%20photoshoot%20(2).jpg'
  },
  {
      make: 'BENTLEY',
      model: 'CONTINENTAL',
      price: 49000,
      mileage:15000,
      year: 2015,
      image: 'http://ag-spots-2015.o.auroraobjects.eu/2015/01/26/bentley-continental-gt-speed-2015-c663026012015045948_1.jpg'
  },
  {
      make: 'BMW',
      model: '328D',
      price: 35000,
      mileage:15000,
      year: 2015,
      image: 'https://acarisnotarefrigerator.files.wordpress.com/2013/11/2014-bmw-328d-wagon-front.jpg'
  },
  {
      make: 'FORD',
      model: 'C-MAX',
      price: 15000,
      mileage:15000,
      year: 2015,
      image: 'http://images.car.bauercdn.com/upload/33216/images/1752x1168/grand-c-max-01.jpg?mode=max&quality=90&scale=down'
  },
  {
      make: 'HONDA',
      model: 'CIVIC',
      price: 12000,
      mileage:15000,
      year: 2015,
      image: 'http://contentservice.mc.reyrey.net/image_v1.0.0/61806229'
  },
  {
      make: 'JEEP',
      model: 'CHEROKEE',
      price: 10000,
      mileage:15000,
      year: 2015,
      image: 'http://blogs-images.forbes.com/kbrauer/files/2015/05/2015-Jeep-Cherokee-Front.jpg?width=960'
  },
  {make: 'KIA', model: 'SOUL', price: 11000, mileage:15000, year: 2015, image: 'https://i.ytimg.com/vi/O1XUiUSDU6k/hqdefault.jpg'},
  {
      make: 'LAND ROVER',
      model: 'RANGE ROVER',
      price: 50000,
      mileage:75000,
      year: 2015,
      image: 'http://tcledev.com/wp-content/uploads/2015/07/2015-Land-Rover-Range-Rover-Great-CarPhoto.jpg'
  },
  {
      make: 'MASERATI',
      model: 'GRANTURISMO',
      price: 10000,
      mileage:15300,
      year: 2015,
      image: 'http://spidercars.net/wp-content/uploads/images/2015-Maserati-GranTurismo_1040.jpg'
  },
  {
      make: 'MERCEDES-BENZ',
      model: 'SLS AMG',
      price: 10000,
      mileage:15000,
      year: 2015,
      image: 'http://www.cstatic-images.com/stock/900x600/1425674997269.jpg'
  },
  {
      make: 'PORSCHE',
      model: '911',
      price: 20000,
      mileage:200000,
      year: 2015,
      image: 'http://media.caranddriver.com/images/14q4/638371/2015-porsche-911-gts-photos-and-info-news-car-and-driver-photo-640321-s-450x274.jpg'
  },
  {
      make: 'RENAULT',
      model: 'CLIO',
      price: 10000,
      mileage:15000,
      year: 2015,
      image: 'http://www.kearys.ie/imglib/KearysResponsive2014/why-buy-the-2015-renault-clio-exterior.jpg'
  },
  {
      make: 'SMART',
      model: 'FORTWO',
      price: 25000,
      mileage:29000, year: 2015,
      image: 'http://images.car.bauercdn.com/upload/32819/images/001_2fortwo.jpg'
  },
  {
      make: 'TESLA',
      model: 'S',
      price: 40000,
      mileage:40001, year: 2015,
      image: 'http://www.thetechherald.com/wp-content/uploads/2015/12/tesla-model-s.jpg'
  },
  {
      make: 'TOYOTA',
      model: 'PRIUS',
      price: 15000,
      mileage:50000, year: 2015,
      image: 'http://images.hgmsites.net/hug/2015-toyota-prius-5dr-hb-three-natl-angular-front-exterior-view_100485217_h.jpg'
  },
  {
      make: 'TOYOTA',
      model: 'RAV4',
      price: 22000,
      mileage:11000, year: 2015,
      image: 'http://www.iihs.org/frontend/iihs/ratings/images/api-model-year-image.ashx?id=1863&width=730'
  },
  {
      make: 'VOLKSWAGEN',
      model: 'GOLF',
      price: 23000,
      mileage:17000, year: 2016,
      image: 'http://st.motortrend.com/uploads/sites/10/2015/09/2015-volkswagen-golf-gti-front-angle.jpg'
  },
  {
      make: 'VOLVO',
      model: 'XC90',
      price: 49000,
      mileage:39000, year: 2016,
      image: 'http://s3.caradvice.com.au/thumb/960/500/wp-content/uploads/2015/09/volvo-xc90-d5-momentum-2015-58.jpg'
  }
];

const queryFormat = {
  make: 'string',
  year: 'number',
  price: 'number'
}
// TODO:
// Convert filterData JSON from frontend to URL request with parameters    
// Retrieve data based on filterData JSON from request.query
const isNumber = x => !isNaN(x);

const getParam = (queryObject, key) => queryObject.hasOwnProperty(key) ? queryObject[key].split(',') : null;

const getData = queryObject => {
  const makeFilter = getParam(queryObject, 'make');
  const yearFilter = getParam(queryObject, 'year');
  const priceFilter = getParam(queryObject, 'price');
  const filteredDb = db
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
};

const validateQueryKeys = (queryObject, queryFormat) => {
  const acceptedUrlKeys = Object.getOwnPropertyNames(queryFormat);
  const currentUrlKeys = Object.getOwnPropertyNames(queryObject);
  let queryKeysAreValid = true;
  currentUrlKeys.map(keyName => {
    if (acceptedUrlKeys.includes(keyName) === false) {
      queryKeysAreValid = false;
    }
  });
  return queryKeysAreValid;
}

const validateQueryValues = (queryObject, queryFormat) => {
  let queryValuesAreValid = true;
  const currentUrlKeys = Object.getOwnPropertyNames(queryObject);
  currentUrlKeys.map(keyName => {
    const values = getParam(queryObject, keyName);
    if (values.every(x => x !== '')) { // check there are no values = ''
      const correctType = queryFormat[keyName];
      switch (correctType) {
        case 'string':
        values.map(value => typeof value === 'string' ? null : queryValuesAreValid = false);
        break;
        case 'number':
        values.map(value => isNumber(value) ? null : queryValuesAreValid = false);
        break;
      }
    } else {
      queryValuesAreValid = false;
    }
  });
  return queryValuesAreValid;
}

const validateQueryParameters = (queryObject, queryFormat) => {
  let queryIsValid = true;
  queryIsValid = validateQueryKeys(queryObject, queryFormat);
  queryIsValid
    ? queryIsValid = validateQueryValues(queryObject, queryFormat)
    : null;
  return queryIsValid;
}

app.get('/', function(request, response) {
  response.status(404).send('Error 404\nOops! Nothing here!');
});

app.get('/api/cars', function(request, response) {
  if (Object.getOwnPropertyNames(request.query).length > 0) {
    if (validateQueryParameters(request.query, queryFormat)) {
      const filteredDb = getData(request.query);
      response.setHeader('content-type', 'text/json');
      response.send(JSON.stringify(filteredDb));
    } else {
      response.status(400).send();
    }
  } else {
    // No parameters in the request: send whole database
    response.setHeader('content-type', 'text/json');
    response.send(JSON.stringify(db));
  }
});

app.listen(3000, function() {
  console.log('App listening in port 3000');
});