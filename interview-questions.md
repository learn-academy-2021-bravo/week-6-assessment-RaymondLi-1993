# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: I would generate a new migration file using ruby to add a column to the existing table. I believe there is a keyword called ADD_TO_Column that can let you target a sppecific table to add a column to it. The foreign key would belong to the sightings model because the there can be many sightings belonging to a single animal. There is a has many relationship. 

  Researched answer: run a rails db migrate file and use the keyword add to column passing in the table you want to update and columns/data types those updated columns are going to contain.



2. Which RESTful routes must always be passed params? Why?

  Your answer:The restful routes that always needs a param is a post, patch, delete, and put. They all need specific id's passed into the query so that we know exactly which column  inside the table is being acted upon. 

  Researched answer: Some of the restful routes that require id params are show, edit, patch, and delete.



3. Name three rails generator commands. What is created by each?

  Your answer: The three generator commands are, generate controller, generate model, and generate migration. 
  The generate controller model creates the controller for the ruby on rails app, the model is the file that will create the schema for the postgreSQL database, and the migrations is used to update the the databse without updating the table directly. 

  Researched answer: The controller generator is expecting parameters in the form of generate controller ControllerName action1 action2. Creates the model instances and is expecting paramaters for the type of data the schemas are going to hold. Generate migration creates the file that can be written into directly and than migrated/make changes to the database.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         the name of the method would be #index and the action would be to fetch all the information from the database.  

method="GET"    /students/2       the name of the method would be #show and the action would be to fetch that specific column from the database.

method="GET"    /students/new     the name of the method would be #new and the action would be to create a new model instance, but does not save it until the save method is called.

method="GET"    /students/edit/2  the name of the method would be #edit and the action is responsible for re-rendering, upon submitting runs the update action.  

method="POST"   /students/        the name of the method would be #create and the action is responsible for directly updating the table in the database. 

method="PATCH"  /students/2       the name of the method would be #update and the action is responsible for targeting a specific column in the table and updating it.   

method="DELETE" /students/2       the name of the method would be #delete and the action is repsonsible for targeting a specific column in the table and deleting it.



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

1. As a user I can see my todo's being displayed when I visit the website
2. As a user I have an input form
3. As a user I can input something into the form and add it to my todo's list
4. On submit of the input form my new item should appear on my todo's list
5. As a user I can click on any of my items in my todo's list to remove it if finished.
6. As a user I can update/edit any of my items in my todo's list
7. As a user I can delete any of my items on my todo's list
8. As a user I can add multiple todo's list for specific days
9. As a user I can delete the entire todo's list all together.
10. As a user I can re-add a accidently deleted item on my todo's list.
