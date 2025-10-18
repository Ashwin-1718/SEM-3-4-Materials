#Write a R Program to add, multiply, divide and subtract two vector of integers type and length 5.
#and also use inbuilt fuctions sum,mean .Find MIN and MAX of a Vector 

# Create two vectors
v1 = c(2, 4, 6, 8, 10)
v2 = c(1, 3, 5, 7, 9)

# Basic operations
add = v1 + v2
sub = v1 - v2
mul = v1 * v2
div = v1 / v2

# Inbuilt functions
sum_v1 = sum(v1)
mean_v1 = mean(v1)
prod_v1 = prod(v1)

# Min and Max
min_v1 = min(v1)
max_v1 = max(v1)

# Output
list(add = add, sub = sub, mul = mul, div = div,
     sum = sum_v1, mean = mean_v1, product = prod_v1,
     min = min_v1, max = max_v1)



#Question 2:
# Solve this linear equation:
# 2x + 2y + 2z = 5
# 5x + 7y + 9z = 10
# 3x + y + 4z = 4

# Coefficient matrix A and result vector B
A = matrix(c(2,2,2, 5,7,9, 3,1,4), nrow = 3, byrow = TRUE)
B = c(5, 10, 4)

# Solve equations
solution = solve(A, B)
solution


# Question 3
# Write a R program to create an array of two 3x3 matrices each with 3 rows and 3 columns. 
#Print the second row of the second matrix of the array and the element in the 3rd row and 3rd column of the 1st matrix.

# Create array of two 3x3 matrices
arr = array(1:18, dim = c(3, 3, 2))

# Second row of second matrix
second_row_matrix2 = arr[2, , 2]

# Element at 3rd row, 3rd column of 1st matrix
element_3_3_matrix1 = arr[3, 3, 1]

# Output
list(second_row_matrix2 = second_row_matrix2,
     element_3_3_matrix1 = element_3_3_matrix1)

#Question 4:
#Write a R program to create a data frame from four different vectors of 5 length

# Vectors
v1 = c(1, 2, 3, 4, 5)
v2 = c("A", "B", "C", "D", "E")
v3 = c(TRUE, FALSE, TRUE, FALSE, TRUE)
v4 = c(2.3, 4.5, 1.2, 6.7, 5.1)

# Data frame
df = data.frame(ID = v1, Name = v2, Status = v3, Score = v4)
df

#Question 5:
#Write a R program to convert a given pH levels of soil to an ordered factor in 3,7 and 10.
#pH levels of soil: 1,3,10,7,4,6,1,10,3,1,4,6,7,1,4,7,10,1,4,7,10.

# Given pH levels
ph_levels = c(1,3,10,7,4,6,1,10,3,1,4,6,7,1,4,7,10,1,4,7,10)

# Convert to ordered factor with levels 3 < 7 < 10
ordered_ph = factor(ph_levels, levels = c(3, 7, 10), ordered = TRUE)

# Print the result
ordered_ph
