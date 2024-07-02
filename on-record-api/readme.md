# API Documentation

## BASIC PROJECT SETUP

Follow these steps and install all the requirements under the 'on-record-api' folder

1. Install Express Generator

   - npx express-generator

2. Create a MongoDB database

   - https://cloud.mongodb.com
   
3. Connect with the MongoDB database via Express js

   - Go the the app.js file, add a reference to the mongoose and then use the below line of code to connect the database.
      
     mongoose.connect('mongodb://localhost//MERN') where '/MERN' is the name of the database that you have created.

4. Install Mongoose library to connect with MongoDB and make modals/schemas

   - npm i mongoose

5. Create a folder for models, and create individual '.js' files for each model

   - Create schemas and export the model.

6. Create individual '.js' files for each model under the route folder

   - Add a reference to the model in its respective file.

7. Create router variables in the 'app.js' file for each model.

   - Example: var indexRouter = require('./routes/index');


## SETUP THE ENDPOINTS FOR THE API

1. Go to the route file of a specific modal and add the end points that you want to have

   - Example: To POST a new registered user.

       router.get('/', function(req, res, next){res.send('respond with a resource');});

2. Create an instance of the modal like below with the same object in which the data is expected (copy that from the schema)

   - Example: 

              let registeredUserObj = new registerModel({   
                    firstName: 'John',
                    lastName:'Smith'
              });

3. Use the save function and write code for the error and successful API case.

   - Example:

              registeredUserObj.save(function (err, registeredUserObj) {
                if (err) {
                    res.send({status: 500,message: "Unable to add the new registered user"});
                } 
                else {
                        res.send({status: 200,message: "New user is registered successfully", registerDetails: registeredUserObj});
                }
              });





