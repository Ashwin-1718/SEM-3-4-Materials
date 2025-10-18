# Control Statements ------------------------------------------------------
# 'if' Statement
# 'if-else' Statement
# 'if-elseif-else' Statement
# Nested Statement

# 'if' statement ----------------------------------------------------------
x=100
if(x>10){
  print(x)
  print("is greater than 10")
}

if(x>10){
  print(paste(x,"is greater than 10"))
}

y=2
if(y==1){
  print('hello')
}
if(y==0){
  Print('hellow')
}
# notice- nothing printed.

y=0 # Try y=1
if(y==1){
  
  print('hello')
}
if(y==0){
  Print('hellow')
}

# 'if-else' Statement ----------------------------------------------------
a=4
if(a>5){
  print('bigger')
}else{
  print('smaller')
}

# Try different value for a and condition

x=100
if(x > 20){
  print(paste(x, "is greater than 20"))
}else{
  print(paste(x, "is less than 20"))
}

x=13
if(x>20){
  print(paste(x,"is greater than 20"))
}else{
  print(paste(x,"is less than 20"))
}

a=readline()
a
# Try different value for x and condition

### Problem 1
# Write a program to prompt the user for hours and rate per hour using input to
# compute gross pay. Pay the hourly rate for the hours up to 40 and 1.5 times the hourly
# rate for all hours worked above 40 hours. Use 45 hours and a rate of 10.50 per hour to
# test the program (the pay should be 498.75).
# You should use readline to read a string and
#as.integer()/as.numeric() to convert the string to a number.

x=as.interger(readline())
rate=as.numeric(readline())
if (x>40){
  reg=40*rate
  oth=x-40
  rate1=1.5*rate
  otp=oth*rate1
  payoff=reg+otp
  print(payoff)
}else{
  payoff=x*rate
  print(payoff)
}

# 'if-elseif-else' Statement ----------------------------------------------
x=4
if (x<2){
  print("Small")
  
}else if(x<10){
  print("Medium")
}else{
  print("Large")
}
print("Finish")

# Write a program to prompt for a score between 0.0 and 1.0.
# If the score is out of range, print an error.
# if the score is between 0.0 and 1.0, print a grade using the following table:
# >=0.9 A
# >=0.8 B
# >=0.7 C
# >=0.6 D
# <0.6 F

a=as.integer(readline('Enter score: '))
if (a>1.0){
  print('Error: The score is between 0.0 to 1.0')
}
if (a<0){
  print('Error: The score is between 0.0 to 1.0')
}
if (a>=0.9){
  print('A')
}else if (a>=0.8){
  print('B')
}else if (a>=0.7){
  print('C')
}else if (a>=0.6){
  
  print('D')
}else{
  print('F')
}
# Nested Statement --------------------------------------------------------
x=42
if (x>1){
  print("More than 1")
  if (x<100){
    print("Less than 100")
  }
}
print("Finish")

x=12
if (x%%3==0){
  print("Divisible by 3")
  if (x%%6==0){
    print("Divisible by 6")
  }
}
print("Finish")

# Loops -------------------------------------------------------------------
# 'for' loop
# 'while' loop
# 'repeat' loop
# 'next' & 'break'

# 'for' loop --------------------------------------------------------------
x=letters[1:10]
x
for(i in x){
  print(i)
}

frds=c('abc','def','ghi')
for(frd in frds){
  print(paste("hello",frd))
}

for (no in c(1,2,3,4,5,6)){
  print(no)
}

count=0
for(no in c(1,4,2,6,8)){
  count=count+1
  print(paste(count,no))
}

count=0
x=letters[1:10]
for(i in x){
  count=count+1
  print(paste(count,i))
}

count=0

x=letters[1:10]
for(i in x){
  print(paste(count,i))
  count=count+1
}
count=0
frds=c('abc','def','ghi')
for(frd in frds){
  count=count+1
  print(paste(count,"hello",frd))
}

count=0
x=1:7
for(i in x){
  count=count+1
  print(paste("cube of",i,"is: ",i^3))
}

# 'while' loop ------------------------------------------------------------
x=1
while(x<=10){
  print(x)
  x=x+1
}
x=10
while(x>0){
  print(x)
  x=x-1
}

dice= 1
while (dice <= 6) {
  if (dice < 6) {
    print("No full")
  } else {
    print("Full")
  }
  dice = dice + 1
}

n=5
factorial=1
i=1
while(i<=n){
  factorial = factorial * i
  i = i + 1
}
print(factorial)

# 'repeat' loop & 'next' and 'break' -----------------------------------------------------------
#infinite loop
x=1
repeat{
  print(x)
  x=x+1
}

x=1
repeat{
  print(x)
  
  x = x + 1
  if(x>5){
    break
  }
}

i=0
repeat{
  print("Hello")
  i = i + 1
  if (i == 5){
    break
  }
}

a=c(1,2,3)
count=0
repeat{
  count=count+1
  print(paste(count,a))
  if(count==10){
    break
  }
}

x=1
repeat{
  print(x)
  x=x+1
  if(x>=5){
    
    break
  }
}

#next statement
for (x in 1:5){
  if (x==3){
    next
  }
  print(x)
}

for (x in 1: 5){
  if (x == 3){
    break
  }
  print(x)
}

x=1:10
for(i in x){
  if(i%%2!=0){
    next # jump to next loop
  }
  print(i)
}