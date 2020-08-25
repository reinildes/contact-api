### To run tests

````
node test
````

### Test with curl
````
curl -X POST -d "{\"name\": \"Maria Joaquina\", \"gender\": \"F\", \"birthDate\": \"2000-08-25T01:59:30.046Z\"}" -H "Content-Type: application/json" http://localhost:3000/contact -ki

curl -X PUT -d "{\"name\": \"Maria Belarmina\", \"gender\": \"F\", \"birthDate\": \"2000-08-25T01:59:30.046Z\"}" -H "Content-Type: application/json" http://localhost:3000/contact/5f4478fd8d3ec01ec6249267 -ki

curl http://localhost:3000/contact/5f4478fd8d3ec01ec6249267 -ki

curl http://localhost:3000/contact -ki

````
