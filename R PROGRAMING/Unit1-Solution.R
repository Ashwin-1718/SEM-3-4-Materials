# 1. Write a R program to create a vector of a specified type and length. Create vector of
#numeric, complex, logical and character types of length 6

# Numeric vector
numeric_vec = c(1, 2, 3, 4, 5, 6)

# Complex vector
complex_vec = c(1+2i, 2+3i, 3+4i, 4+5i, 5+6i, 6+7i)

# Logical vector
logical_vec = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE)

# Character vector
char_vec = c("A", "B", "C", "D", "E", "F")

#2 Write a R program to add, multiply, divide and subtract two vectors of integers type and
#length 3. And also use inbuilt function sum, mean and product on that

v1 = c(2, 4, 6)
v2 = c(1, 3, 5)

add = v1 + v2
sub = v1 - v2
mul = v1 * v2
div = v1 / v2

sum_v1 = sum(v1)
mean_v1 = mean(v1)
prod_v1 = prod(v1)

# 3. Write a R program to find the minimum and the maximum of a Vector.
vec = c(10, 2, 5, 8, 1)
print(min(vec))
print(max(vec))

# 4. Write a R program to sort a Vector in ascending and descending order.
vec = c(12, 4, 9, 1, 9)
# Ascending order
print(sort(vec))
# Descending order
print(sort(vec, decreasing = TRUE))

#6. Count specific value:
sum(vec == 12)     # Count how many times 12 appears

#7. Access last value:
vec[length(vec)]

#9. Find nth highest value (e.g., 3rd):
n = 3
sort(vec, TRUE)[n]

#12. Write a R program to create a blank matrix.
# Create a blank matrix with 3 rows and 4 columns
matrix_blank <- matrix(numeric(0), nrow = 3, ncol = 4)

# Print the blank matrix
print(matrix_blank)

#15. Write a R program to access the element at 3rd column and 2nd row, only the 3rd row
#and only the 4th column of a given matrix.

# Create a 3x4 matrix
matrix_example <- matrix(1:12, nrow = 3, ncol = 4)

# Access the element at 3rd column and 2nd row
matrix_example[2, 3]

# Access the entire 3rd row
matrix_example[3, ]

# Access the entire 4th column
matrix_example[, 4]

#16. Write a R program to create two 2x3 matrix and add, subtract, multiply and divide the
#matrixes
# Create two 2x3 matrices
matrix_A <- matrix(1:6, nrow = 2, ncol = 3)
matrix_B <- matrix(7:12, nrow = 2, ncol = 3)

# Addition
matrix_A + matrix_B

# Subtraction
matrix_A - matrix_B

# Multiplication (element-wise)
matrix_A * matrix_B

# Division (element-wise)
matrix_A / matrix_B

#21. Write a R program to create an empty data frame
# Create an empty data frame
empty_df <- data.frame()

# View the empty data frame
empty_df

#22 Write a R program to create a data frame from four different vectors
# Create four vectors
vector1 <- c(1, 2, 3)
vector2 <- c("A", "B", "C")
vector3 <- c(4.5, 6.7, 8.9)
vector4 <- c(TRUE, FALSE, TRUE)

# Create a data frame using the vectors
df <- data.frame(Column1 = vector1, Column2 = vector2, Column3 = vector3, Column4 = vector4)

# View the data frame
df
