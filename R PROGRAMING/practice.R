#Sample Bar plot (Practice)
# Sample data frame creation
feq <- data.frame(
  Soft_Drink = c("Coke", "Pepsi", "Sprite", "Fanta", "ThumbsUp"),
  Frequency = c(30, 25, 15, 20, 10)
)

# Now run your plot code
ggplot(data = feq, aes(x = reorder(Soft_Drink, -Frequency), y = Frequency, fill = Soft_Drink)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(title = "Bar Plot of Soft Drink Data", x = "Soft Drink Types", y = "Frequency") +
  scale_fill_manual(values = c("red", "blue", "green", "yellow", "purple")) +
  theme_classic() +
  theme(legend.position = "bottom") +
  theme(plot.title = element_text(hjust = 0.5)) +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))


# Parameters
n = 6         # sample size
k = 2         # number of successes
p = 0.23      # probability of sticking with the tour group

# Binomial probability for exactly 2
a <- dbinom(k, n, p) ;a

#Example 26
n = 10
p = 0.10

# A
dbinom(0, n, p) ;a

#b
dbinom(2, n, p) ;b

#c
pbinom(2, n, p) ;c

#d
pbinom(0, n, p, lower.tail = FALSE)


#Example 29
n = 10
p = 0.30

# a. P(X = 3)
a = dbinom(3, n, p) ;a

#🔹 b. Probability that at least 3 workers take public transport:
b = 1 - pbinom(2, n, p) ;b
b * 100
 