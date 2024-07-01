## Setting local db json server api

 - (https://www.npmjs.com/package/json-server) URL and run "npm i json-server" command in project root folder. (npm i json-server)

 - (https://www.npmjs.com/package/concurrently) URL and run "npm i concurrently" command in project root folder. (npm i concurrently)

 - go to "package.json" in project and add below commands under "scripts".

 - "json-server": "json-server --watch db.json --port 3000", 

 - create local DB file (db.json) in project root folder. create object {"user": [ add value https://jsonplaceholder.typicode.com/users ]}

 - then run "json-server": "json-server --watch db.json --port 3000", this script.

 - localhost for local db (http://localhost:3000/user)