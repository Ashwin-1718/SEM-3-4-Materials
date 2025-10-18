use ("CrudDb")
db.createCollection("Courses")

// Insert a document into the courses collection.

// db.Courses.insertOne({
//     "Name": "Sigma Web Devlopment",
//     "Price": 0,
//     "Instructor": "Harry",
//     "Asignment": 7,
//     "Ratings": [4.9, 4.8, 5],
//     "Reviews": ["Excellent course!", "Great material!", "Highly recommended."]
// })

// db.Courses.insertMany( [
//     {
//         "Name": "Machine Learning Basics",
//         "Price": 10000,
//         "Instructor": "Rahul",
//         "Assignment": 5,
//         "Ratings": [4.5, 4.7, 4.8],
//         "Reviews": ["Very comprehensive!", "Loved the examples.", "Great for beginners."]
//     },
//     {
//         "Name": "Advanced Python Programming",
//         "Price": 8000,
//         "Instructor": "Lisa",
//         "Assignment": 5,
//         "Ratings": [4.7, 4.6, 4.8],
//         "Reviews": ["Very informative!", "Well structured course!", "Learnt a lot."]
//     },
//     {
//         "Name": "Web Development Mastery",
//         "Price": 7000,
//         "Instructor": "Vikram",
//         "Assignment": 6,
//         "Ratings": [4.6, 4.9, 4.8],
//         "Reviews": ["Excellent course!", "Great material!", "Highly recommended."]
//     },
//     {
//         "Name": "Mobile App Development",
//         "Price": 9000,
//         "Instructor": "Arjun",
//         "Assignment": 7,
//         "Ratings": [4.8, 4.5, 4.9],
//         "Reviews": ["In-depth coverage!", "Loved the projects.", "Very practical."]
//     },
//     {
//         "Name": "Data Science with R",
//         "Price": 11000,
//         "Instructor": "Neha",
//         "Assignment": 8,
//         "Ratings": [4.7, 4.4, 4.5],
//         "Reviews": ["Great insights!", "Well explained.", "Perfect for data enthusiasts."]
//     },
//     {
//         "Name": "Blockchain Fundamentals",
//         "Price": 9500,
//         "Instructor": "Karan",
//         "Assignment": 4,
//         "Ratings": [4.5, 4.6, 4.7],
//         "Reviews": ["Very helpful!", "Learnt a lot.", "Excellent resources."]
//     },
//     {
//         "Name": "Cybersecurity Essentials",
//         "Price": 8500,
//         "Instructor": "Rhea",
//         "Assignment": 5,
//         "Ratings": [4.6, 4.5, 4.9],
//         "Reviews": ["Liked the exercises.", "Very comprehensive.", "Practical tips."]
//     },
//     {
//         "Name": "Cloud Computing",
//         "Price": 10500,
//         "Instructor": "Ankit",
//         "Assignment": 6,
//         "Ratings": [4.7, 4.8, 4.6],
//         "Reviews": ["Great course!", "Very informative.", "Learnt practical skills."]
//     },
//     {
//         "Name": "DevOps Practices",
//         "Price": 9500,
//         "Instructor": "Megha",
//         "Assignment": 7,
//         "Ratings": [4.7, 4.9, 4.8],
//         "Reviews": ["Very useful.", "Excellent techniques.", "Well structured."]
//     },
//     {
//         "Name": "Big Data Analytics",
//         "Price": 11500,
//         "Instructor": "Manish",
//         "Assignment": 10,
//         "Ratings": [4.9, 4.8, 5],
//         "Reviews": ["Excellent course!", "Great material!", "Highly recommended."]
//     }
// ]
// )

let a = db.Courses.find()
console.log(a.toArray());