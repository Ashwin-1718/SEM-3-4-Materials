use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([
  {
    "Name": "Machine Learning",
    "Price": 10000,
    "Instructor": "Rahul"
},
{
    "Name": "Artificial Intelligence",
    "Price": 12000,
    "Instructor": "Priya"
},
{
    "Name": "Web Development",
    "Price": 7000,
    "Instructor": "Vikram"
},
{
    "Name": "Mobile App Development",
    "Price": 9000,
    "Instructor": "Arjun"
},
{
    "Name": "Data Science",
    "Price": 11000,
    "Instructor": "Sonal"
},
{
    "Name": "Blockchain",
    "Price": 9500,
    "Instructor": "Karan"
},
{
    "Name": "Cybersecurity",
    "Price": 8500,
    "Instructor": "Rhea"
},
{
    "Name": "Cloud Computing",
    "Price": 10500,
    "Instructor": "Ankit"
},
{
    "Name": "DevOps",
    "Price": 9500,
    "Instructor": "Megha"
},
{
    "Name": "Big Data",
    "Price": 11500,
    "Instructor": "Manish"
}
]);

// Print a message to the output window.
console.log(`Done Inserting Data.`);