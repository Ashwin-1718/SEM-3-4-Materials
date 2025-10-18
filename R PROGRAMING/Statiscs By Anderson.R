# Chapter 5 Example 25 PG: 251
#Probablity Distribution

n = 2;n
p = 0.4;p

#f(1) = p(x = 1)
#b. Compute f(1) - Probability of exactly one success
dbinom(1,n,p)

#c. Compute f(0) - Probability of zero successes
dbinom(0,n,p)

#d. Compute f(2) - Probability of two successes
dbinom(2,n,p)

#e. Probability of at least one success
pbinom(0,n,p,lower.tail = FALSE)

#f. Compute expected value, variance, and standard deviation
n <- 2
p <- 0.4

# Expected value (mean)
expected_value <- n * p

# Variance
variance <- n * p * (1 - p)

# Standard deviation
std_deviation <- sqrt(variance)

list(expected_value = expected_value, 
     variance = variance, 
     std_deviation = std_deviation)

#Example 26 

n = 10
p = 0.10

#a. Compute f(0) - Probability of zero successes
dbinom(0,n,p)

#b. Compute f(2) - Probability of exactly two successes
dbinom(2,n,p)

#c. Compute P(x ≤ 2) - Probability of two or fewer successes
pbinom(2, size = 10, prob = 0.10)

#d. Compute P(x ≥ 1) - Probability of at least one success
pbinom(0,n,p, lower.tail = FALSE)

#f. Compute Var(x) and σ (standard deviation)


# Example 28

p = 0.23
n = 10

pbinom(0,10,0.23)

# Example 29

n = 10
p = 30

pbinom(10>=3, 10, .30)


#Example 38 PG: 255

#a. Poisson Probability Function
f(x) = (e^-μ * μ^x) / x!

#b. Compute f(2) - Probability of exactly 2 occurrences
f2 <- dpois(2, lambda = 3)
f2

#Example 40
#a. Probability of 3 calls in 5 minutes
dpois(3, lambda = 4)

#b. Probability of exactly 10 calls in 15 minutes
dpois(10, lambda = 12)

#c. Calls waiting after 5 minutes
dpois(0, lambda = 4)

#d. No calls in 3 minutes
dpois(0, lambda = 2.4)

#Chapter 6 
#Important for Continuous series Whenever we are talking about Condition 
# p(x <= x) = p (x < x)
# p(x >= x) = p(x > x)


# Generate 500 Random sample with mean = 50 Std = 5

x = rnorm(50, 10, 3);x

y = dnorm(x, 10, 3);y

barplot(y, x)
