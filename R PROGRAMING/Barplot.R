# Read the input weight of the watermelon
w <- as.integer(readline(prompt = "20 "))

# Check if the input is valid
if (is.na(w)) {
  print("Invalid input! Please enter a positive integer.")
} else if (w > 2 && w %% 2 == 0) {
  print("YES")
} else {
  print("NO")
}


# BarPlot

# Import the CSV file using a file chooser
data2 <- read.csv(file.choose())

# Display the data
print(data2)

# Generate frequency table for the first column
feq <- table(data2[[1]])

# Print frequency table
print(feq)

# Create the bar plot with colors
barplot(
  feq,
  col = c("red", "blue", "green", "yellow", "purple"), # Custom colors
  main = "Bar Plot of Soft Drink Data",
  xlab = "Soft Drink Types",
  ylab = "Frequency",
  border = "black",   # Black border around bars
  las = 2             # Rotate x-axis labels for better visibility
)


# Marksheet
# Import the CSV file
marksheet <- read.csv(file.choose())
print(marksheet)

# Display column names
names(marksheet)

# Create a frequency table for the Gender column
gender_table <- table(marksheet$Gender)
print(gender_table)

# Bar plot with customized colors
barplot(
  gender_table,
  col = c("#FF5733", "#4287f5"),  
  main = "Barplot of Gender",
  xlab = "Gender",
  ylab = "Frequency",
  names.arg = c("Female", "Male"),  
  border = "black"  
)

# Pie chart using the gender frequency table
pie(
  gender_table,
  col = rainbow(length(gender_table)),  # Dynamic colors based on categories
  main = "Pie Chart of Gender Distribution"
)

percentages <- round(100 * gender_table / sum(gender_table), 1)
labels <- paste(c("Female", "Male"), percentages, "%")

pie(
  gender_table,
  col = c("orchid", "lightblue"),
  main = "Pie Chart of Gender Distribution",
  labels = labels
)

pie(
  gender_table,                  
  main = "Pie Chart",  
  col = 1:2,           
  edges = 100,         
  radius = 1,         
  clockwise = TRUE,     
  init.angle = 180,     
  density = 100        
)

# Define your data
data <- c(5, 7, 8, 11, 15, 20, 4, 3, 18, 13)

# Display the data
print(data)

# Find the minimum and maximum values
min(data)
max(data)

# Create a histogram
hist(data, 
     main = "Histogram with Multiple Colors", 
     xlab = "Values", 
     ylab = "Frequency", 
     col = c("red", "blue", "green", "yellow"), 
     border = "black", 
     breaks = 5)

plot(data, type = 'o', pch = 1)
plot(data, type = 'p')
plot(data, type = 'l')
