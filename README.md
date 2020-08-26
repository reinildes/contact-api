### To run tests

````
node test
````

### To run the app

#### Run it easily with docker with. This way you don't need to have a pre-installed mongo

````
docker-compose build
docker-compose up
````

#### Or inform your mongo url as a environement variable
````
MONGO_URL='mongodb://localhost/test?retryWrites=true&w=majority' npm start
````

### Test with curl
````
curl -X POST -d "{\"name\": \"Maria Joaquina\", \"gender\": \"F\", \"birthDate\": \"2000-08-25T01:59:30.046Z\"}" -H "Content-Type: application/json" http://localhost:3000/contact -ki ;

curl -X PUT -d "{\"name\": \"Maria Belarmina\", \"gender\": \"F\", \"birthDate\": \"2000-08-25T01:59:30.046Z\"}" -H "Content-Type: application/json" http://localhost:3000/contact/5f4478fd8d3ec01ec6249267 -ki

curl http://localhost:3000/contact/5f4478fd8d3ec01ec6249267 -ki

curl http://localhost:3000/contact -ki

````
