// to run mongoDb in your system open the power shell and run this command
// mongod 

// to connect to the database from the device run this command this will create a interactive shell which can be used to run commands related to mongoDb
// mongo 

// this command is used to make a new database or switch to existing dataase 
// use DATABASE_NAME

// in order to insert data we use  this command 
// db.items.insert({key:value,... and many more like that})

// to insert more than one data in the database we use this command
// db.items.insertMany([{key:value,...and many more such items}, {key:value,...and many more such items},...and many more such objects])

// to show all databases we run "show dbs" command

// to get all the data from the database we run 
// db.items.find()

// every insertion in the database will automatically generate a unique ID for each item which helps to distinguish between 2 items 

// in order to search in databse by some paramters which are pair of key and value we run 
// db.items.find({key:value})

// we can modify the search parameters by making them greater than or less than 
// db.items.find({key: {$gt/lt: value}})

// to search items for more than one parameter we use, this acts like an and operation which means the item should have both the condition satisfied
// db.items.find({key: {$gt/lt: value}}, {key: {$gt/lt: value}},....and many more)

// for an or operation which means either of any of the value may be true we use 
// db.items.find({
//     $or:[{key:{$lt/gt: value}}, {key:{$lt/gt: value}}, ....and many more]
// })

// "show collections" is a command which shows all the collections in a database

// to delete one items with a property we use this command if more than one item is present with the same parameter than the first one is deleted
// db.items.deleteOne({key:value})

// to delete all the items of that property we use this command
// db.items.deleteMany({key:value)

// to update the values of the items we use this, this will update the first matching item with the parameters passes 
// db.items.updateOne({key:value}, {$set: {key: value}})

// to update all the items with the property we use this 
// db.items.updateMany({key:value}, {$set: {key: value,...and many more}})