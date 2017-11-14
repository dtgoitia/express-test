/api/cars
/api/cars?make=audi,bmw
/api/cars?year=2016
/api/cars?price=15000
/api/cars?make=audi,bmw&year=2015&price=50000

If year or price is not number
http://localhost:3000/api/cars?year=aaaa
http://localhost:3000/api/cars?price=aaaa

If any wrong parameter, return 404
http://localhost:3000/api/cars?kk=3215

If any value missing
http://localhost:3000/api/cars?kk=