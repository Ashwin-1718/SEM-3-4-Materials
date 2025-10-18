
# Unit 1 ------------------------------------------------------------------

a = 1
a


a = 3L
b = "abc"
class(a)
class(b)
c = 3.2L
c
class(c)
typeof(a)
mode(a)

ls()

# Create some data
x <- 1:10
y <- x^2

# Plot the data
plot(x, y, type = "l", col = "blue", main = "Simple Line Plot", xlab = "X-axis", ylab = "Y-axis")
as.integer(17.25)
class(as.integer(17.25))

as.numeric(21L)
class(as.numeric215L)

a = 17+17 ;a
b = 18+18 ;b

z = a^2 * b^2 ;z

#Exponetion Function

sqrt(64)

abs(-5)

sin(pi/2)
cos(pi/2)
asin(0)
factorial(5)
log(2)
log10(2)
round(1.354,digits = 0)

7%%2
6%%2

#Data Structure
# 1. Vector (1-D array)
# 2. Matrix (2-D array)
# 3. Array (Multi-D array with layers)
# 4. DataFrame (Multi-D)
# 5. Factor
# 1. List 

#Vector
# Numeric vector
numeric_vector <- c(1, 2, 3, 4, 5)
print(numeric_vector) 
length(numeric_vector)

# Character vector
char_vector <- c("apple", "banana", "cherry")
print(char_vector)  

# Logical vector
logical_vector <- c(TRUE, FALSE, TRUE)
print(logical_vector)


#Ploy a Data
# Sample Data
x <- 1:10
y <- c(2, 5, 7, 9, 12, 14, 18, 20, 23, 25)

# Open a plotting window
#par(bg = "lightgray")  # Set background color

# Plot with enhanced style
#    main = "Styled Line Plot", font.main = 2, col.main = "darkblue",
     #xlab = "X-axis", ylab = "Y-axis", 
     #col.lab = "darkred", font.lab = 2, 
     #col.axis = "black", las = 1, 
     #xaxt = "n", yaxt = "n")  # Disable default axes

# Custom Axis
#axis(1, at = x, labels = x, col.axis = "black", col = "black", lwd = 2)
#axis(2, at = seq(0, 25, 5), labels = seq(0, 25, 5), col.axis = "black", col = "black", lwd = 2)

# Add Grid
#grid(nx = NULL, ny = NULL, col = "white", lty = "dotted", lwd = 1.5)

# Add points for better visibility
#points(x, y, col = "red", pch = 16, cex = 1.5)


# Day - 3 -> 6/2/2025

x=c(1,8,6,9,4,3,5)
y=c(11,42,63,55,12)
z=c(x,y) ;z
z1=c(y,x) ;z1

x [c(2,4)]

x <- c(8,9)
x[4] = 2
print(x)

z [6:9]

v = vector(length = 3) ;v
v[1] = 2 ;v
v[2] = 4 ;v
v[3] = 6 ;v

#Vector with Scaler Opretions
a = c(1,2,3,4,5,6) ;a
b = c(2,3,45,4,5) ;b
a + 2 ;a
a * 4 ;a
a / 2 ;a

#Vector with Vector
a + b;
a - b;
a * b;
a / b;

a1 = c(1,2,3);a1
b1 = c(5,6,7,8,9);b1
a1 + b1

#Generating Sequence
p = 1:10 ;p
q = 10:1 ;q 
r = -5:4 ;r
s = 4:-5 ;s

p1 = seq(1:10) ;p1
t = seq(from = 1, to = 51, by = 2) ;t
t1 = seq(1,50,2) ;t1

z = seq(1,50,-4) ;z # Wrong Arugment(Decending Order)
z = seq(50,1,-4) ;z # Correct Arugment

a1 = c(11,22,33) ;a1
b1 = c(1,2,3) ;b1
c1 = c(1,3,5,7) ;c1

new <- c(a1[1], a1[2], b1[2], c1[1], c1[2], c1[3])
print(new)

new = c(a1[1:2], b1[2], c1[1:3]) ;new

c1[-2] # -sign represent remove the specific variable place
new[-3]

