#a
pnorm(50, mean = 77, sd = 20)

#b
(1 - pnorm(100, mean = 77, sd = 20)) * 100

#c
pnorm(90, mean = 77, sd = 20) - pnorm(40, mean = 77, sd = 20)

#d
set.seed(123)  
sample_5000 <- rnorm(5000, mean = 77, sd = 20)
sample_500  <- rnorm(500, mean = 77, sd = 20)

hist(sample_5000, col = "red", main = "The American worker spent an average hour on the internet (n = 5000)", xlab = "Hours")

hist(sample_500, col = "green", main = "The American worker spent an average hour on the internet (n = 500)", xlab = "Hours")
