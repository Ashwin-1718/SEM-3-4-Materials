# Data Structure
# 1. Vector # 2. Matrix # 3. Array # 4. Data Frame # 5. List # 6. Factor

# Vector
# 'c' command - Concatenate command
#- construct all item into 1-dim array
x=c(1,8,6,9,4,3,5)
print(x)
y=c(11,42,63,55,12)
print(y)
z=c(x,y)
print(z)
z=c(y,x)
print(z)
print(z[2:5])
vec=vector(length=3)
vec[1]=5
vec[2]=10
vec[3]=20
print(vec)
# Vector Operation (for constant)
x=c(1,2,3,5,8)
print(x)
x+3
x*5
x-4
x/8
x^3

sqrt(x)
x^(1/3)

# Generating sequence through : operator or seq()
p=1:10
print(p)
q=10:1
print(q)
r=-5:4
print(r)
s=4:-5
print(s)
length(p)
length(q)
length(r)
length(s)
# Vector Operation (for vector)
p+r
r-s
r/p
s*p
a1=c(11,22,33)
b1=c(1,2,3)
c1=c(1,3,5,7)
b1+c1
new1=c(a1[1:2],b1[2],c1[1:3])
c2=c(c1[1:2],6,c1[4])
# replace 5 by 6 in c1 and create new vector c2
print(c2)
a1[5]

a1[5]=6
print(a1)
c1[-2] #negative sign represent elimination of particular vector from vector or list
c1=c1[-2]
c1[c(2,4,6)] #choosing vector/list element from vector/list
c1[c1>3]
c1[c1<3]
new1[new1<11]
new1[new1<=11]
c1[c1<3|c1>5] #'|' represent 'OR'
c1[c1<3 & c1>5] #'&' represent 'AND'
c1[c1>3 & c1>5]
x=seq(1:10)
print(x)
y=x+c(1,2,3) # or y=x+1:3
print(y)
x1=c(x,21:30)
print(x1)
x[3]
x[-3]
x[1:3]
x[c(1,5,9)]
x[-c(1,5,9)]
x[x<6]

x<=4
x<4
x==3
x>=6
x>6

x<y
any(x<y)
x>y
any(x>y)
all(x<y)
all(x>y)
z=c(0,5,2,8,7,3,6,4,9,10)
print(z)
x<z
x>z
any(x<z)
any(y>z)
all(x<z)
all(x>z)

#Some 'seq' command:
1:20
a=seq(1:20)
seq(from=1,to=10,by=2) #by=2 (skip place 2)
seq(from=1,to=10,by=3)
seq(from=20,to=1,by=4) #gives error
seq(from=1,to=10,by=1/4)
seq(from=1,to=10,by=-4) #gives error
seq(from=20,to=1,by=-4)

#'rep' command:
rep(3,times=10)
rep('ABC',times=5)
rep(3:9,times=10)
rep(seq(from=4,to=10,by=1/2),times=3)

rep(c('Hello World'),times=6)

#'nchar' command:
a=c("hello","hi","hey","hellow","henlo")
nchar(a)
b=-4:5
nchar(b)
c=c(1,12,123,1234)
nchar(c)

Matrix
A=matrix(c(1,2,3,4,5,6,7,8,9),nrow = 3,ncol = 3,byrow = T)
#Data will stored in 'ROW WISE'
print(A)
B=matrix(1:9,nrow = 3,ncol = 3,byrow = F)
#Data will stored in 'COLUMN WISE'
print(B)
C=matrix(1:20,nrow = 4,ncol = 4)
#If we do not use command 'byrow' then
#it will by default stored in 'column wise'.
print(C)
#Note that only first 16 values used to create 4?4 matrix
D=matrix(seq(1:12),nrow = 5,ncol = 3)
print(D)
#as nrow=5 does not divided by 12
E=matrix(seq(1:20),nrow = 5,ncol = 3)
print(D)
#as nrcol=3 does not divided by 20
F=matrix(seq(1:12),nrow = 4,ncol = 4)
print(F)

#Try to avoid that variable name which is already inbuilt function in R
G=matrix(1:2,nrow=4,ncol=4,byrow=T)
print(G)
H=matrix(1:12,nrow = 2)
print(H)
I=matrix(1:12,nrow = 3)
print(I)
a=matrix(1:9,nr=3,nc=3,b=T) #short command
print(a)
nrow(A) #gives number of rows in A
ncol(A) #gives number of column in A
dim(A) #gives dimension of A

#Assign sub-matrix
J=matrix(nr=3,nc=3)
J
K=matrix(c(1,5,9,6),nr=2,nc=2)
J[2:3,2:3]=K
print(J)
J[1:2,1:2]=K
print(J)

# Some Matrix Operations:
A=matrix(1:9,nr=3,nc=3,b=T)
print(A)
class(A)
str(A)
A[1,2]
A[2,3]
A[3,1]

A[3,3]
A[c(1,2),3]
A[c(1,3),2]
A[3,c(1,2)]
A[2,c(1,3)]
A[1,]
A[2,]
A[3,]
A[,1]
A[,2]
A[,3]
A[,1:2]
A[1:2,]
A[-1,] # '-' sign represent "remove"
A[,-1] # '-' sign represent "remove"
A[,3]>3
A[2,]<5

A+2 #element wise addition
A-3 #element wise subtraction
A*4 #element wise multiplication
A/5 #element wise division
t(A) #transpose of A
B=matrix(c(1,0,0,1,1,0,1,1,1),nr=3,nc=3,b=T)
print(B)
A+B #usual matrix addition
A-B #usual matrix subtraction
A*B #pointwise multiplication
A/B #pointwise division
symofA=(A+t(A))/2 #generates symmetric matrix of A

print(symofA)
skwofA=(A-t(A))/2 #generates skew-symmetric matrix of A
print(skwofA)
A%*%B #usual matrix multiplication
15%%2 # "%%"
A%%B
A%%3
diag(A) #give diagonals of A
C=matrix(1:16,nr=4,nc=4,b=T)
print(C)
diag(C)
diag(2) #generates identity matrix of 2?2
diag(3) #generates identity matrix of 3?3
diag(4) #generates identity matrix of 4?4
D=matrix(1:20,nr=4,nc=5,b=T)
print(D)
diag(D)
D1=matrix(1:20,nr=5,nc=4,b=T)
print(D1)
diag(D1)
D

#Determinant of Matrix
X=matrix(c(1,2,3,4),nr=2)
print(X)
det(X) #gives value of determinant of X
Y=matrix(1:9,nr=3,nc=3,b=T)
print(Y)
det(Y)
det(C)

#inverse of matrix
P=matrix(c(1,1,1,2,5,7,2,1,-1),nr=3,nc=3,b=T)
print(P)
det(P)
Pinverse=solve(P)
print(Pinverse)
P%*%Pinverse

#install "MASS" library
ginv(P)
P%*%ginv(P)

#row/column operations on matrix
print(A)
A[,1]=A[,1]+A[,2]
print(A)
A[,1]=A[,1]-A[,2]
print(A)
A[2,]=A[2,]+2*A[1,]
print(A)

#Solution of System of Linear Equation:
#How to enter equation?
y=expression(x^2-5*x+6) #to create a symbolic expression
eval({x=2;y}) #to evaluate the expression y for x=2
eval({x=3;y})
eval({x=4;y})
eval({x=-1;y})
D(y,"x") #symbolic derivation of y with respect to x

d=D(y,"x") #derivative of y stored in "d" and "d" become expression
eval({x=2;d})
z=expression(x^2+2*x*y+y^2)
eval({x=2;y=1;z})
#Let us solve the following system of linear equation in R
#x+y+z=9
#2x+5y+7z=52
#2x+y-z=0
A=matrix(c(1,1,1,2,5,7,2,1,-1),nr=3,nc=3,b=T)
print(A)
B=matrix(c(9,52,0),nr=3)
print(B)
solve(A,B) #This will give X=A-1B
#i.e. the solution of the given system

#Matrix associated with Vector:
#making a matrix from different vector
p=c(1,1,1)
q=c(2,5,7)
r=c(2,1,-1)
s=c(9,52,0)
X=rbind(p,q,r) #row wise arrangement
print(X)
X1=cbind(p,q,r) #column wise arrangement
print(X1)
Y=cbind(s) #column wise arrangment
print(Y)

# Outer product
p=1:4

print(p)
q=1:3
print(q)
A=outer(p,q) # A=p?q' is length(p) ? length (q) type matrix
print(A)
A1=outer(p,q,'+') # A=p+q' is length(p) ? length (q) type matrix
print(A1)
A2=outer(p,q,'-') # A=p-q' is length(p) ? length (q) type matrix
print(A2)
A3=outer(p,q,'/') # A=p/q' is length(p) ? length (q) type matrix
print(A3)
A4=outer(p,q,'+')%%4 # A=p-q'(mod 4) is length(p) ? length (q) type matrix
print(A4)

#Labeling a matrix rows and columns
A=matrix(1:10,nr=2,b=T)
print(A)
rownames=c('row1','row2')
print(rownames)
A=matrix(1:10,nr=2,b=T,dimnames=list(rownames))
print(A)
colnames=c('C1', 'C2', 'C3', 'C4', 'C5')
A=matrix(1:10,nc=5,b=T,dimnames=list(1:2,colnames))
print(A)
row.names(A)
#remove(row.names(A)) (Error)
letters
LETTERS
letters[1:6]

# Array
# A multi-dimensional arrangement which
#contains one or more elements of the same data type.
#(i.e. numeric, string,.)
# It is created using the 'array' function
# A=array(data,dim=c(m,n,n1,n2,..)

d=c(1,2,3,4,5)
Array1=array(d,dim=c(2,3)) #creates one 2?3 matrix
print(Array1)
Array2=array(d,dim=c(2,3,2)) # creates 2 matrices of 2?3 type
print(Array2)
Array3=array(d,dim=c(2,2,4,3)) # creates 2?3=12 matrices of 2?2 type and labeled from
{1,2,3,4}?{1,2,3}
print(Array3)
Array4=array(d,dim=c(1,1,7)) #creates 7 matrices of 1?1 type
print(Array4)

A1=array(1:6,dim=c(2,3)) #creates one 2?3 matrix
print(A1)
A2=array(1:12,dim=c(2,3,2)) # creates 2 matrices of 2?3 type
print(A2)
A2[,,1]
A2[,1,]
A2[1,,]
A3=array(1:16,dim=c(2,2,2,2)) # creates 2?3=12 matrices of 2?2 type and labeled from
{1,2,3,4}?{1,2,3}
print(A3)
A3[,,,1]
A3[,,1,]

A3[,1,,]
A3[1,,,]
A4=array(d,dim=c(1,1,7)) #creates 7 matrices of 1?1 type
print(A4)
Array3[1,1,,]

# Data Frames

#Data frame is a tabular data object
#(or in simple language a data table)
#in which different columns have different
#types of data but each particular columns
#have same type of data, and all columns
#have the same number of elements.

#A=data.frame(var1,var2,var3,.) ;
#where each variable (var1,var2,var3,.)
#represent column name or data object.

#Creating a data frame using fixed data
Rollno=c(1:5)
Names=c("aa","bb","cc","dd","ee")
Marks=c(76,87,59,90,68)
Gender=c("male","female","male","female","male")
mydata=data.frame(Rollno,Names,Gender,Marks)
mydata
str(mydata)
class(mydata)

View(mydata) # Note capital 'V' in View
edit(mydata)
nrow(mydata)
ncol(mydata)
rownames(mydata)
colnames(mydata)
mydata[1,3]
mydata[3,4]
mydata[3,c(2,4)]
mydata[3,c('Names','Marks')]
summary(mydata)
mydata
mydata$Rollno
mydata$Gender
summary(mydata)
mydata1=edit(mydata)
mydata1
summary(mydata1)
#Using inbuilt datasets or data frames of R
data() # lists all datasets available in R
library(help="datasets") #lists all datasets available in R\
x = iris
x$Species
head(x)
tail(x)
sample(10)
x[15:25,c(2,4)]
x[15:25,c('Sepal.Width','Petal.Width')]
x[c(2,4,6,8,10),]
#Open inbuilt data set of R: ‘airquality’ and stored in data frame namely AIR.
AIR = airquality
AIR
AIR$Ozone
is.na(AIR$Ozone)
sum(is.na(AIR$Ozone))
AIR$Ozone [is.na(AIR$Ozone)] = 50
sum(is.na(AIR$Ozone))

AIR$Solar.R
is.na(AIR$Solar.R)
sum(is.na(AIR$Solar.R))
AIR$Solar.R [is.na(AIR$Solar.R)] = c(5,6,7,8,9)


iris
mydata1=iris
mydata1
edit(mydata1)
View(mydata1) # Note capital 'V' in View
dim(mydata1)
names(mydata1)
head(mydata1)
tail(mydata1)
mydata1[10,]
mydata1[2,c('Sepal.Length','Sepal.Width','Species')]
mydata1[5:10,c('Sepal.Length','Sepal.Width','Species')]

summary(mydata1)

#Creating a data frame using user defined input data
mydata2=data.frame(rollno=c(NA),name=c('NA'),maths=c(NA),stat=c(NA))
mydata2
data.entry(mydata2)
View(mydata2) # open up new window of the dataframe
names(mydata2)
edit(mydata2)
summary(mydata2)
x=airquality
x$Ozone
x$Ozone[is.na(x$Ozone)]=100
y=na.omit(x$Solar.R)
y
z=sum(is.na(x$Ozone))
z
is.na(y)
y = c(1,2,3,NA)
x = c(1,2,NA,3)
mean(x) # returns NA
mean(x, na.rm=TRUE)

# List
rollno=c(seq(from=1,to=50))
mydata1=data.frame(srno=1:6,code=seq(from=1,by=2,length.out=6),name=letters[1:6])
mydata1

#Creating a list using predefined data
a=39

rollno=c(seq(from=1,to=50))
mydata=data.frame(Rollno,Names,Gender,Marks)
list1=list(a,rollno,mydata)
list1
names(list1)
names(list1)=c('a','rollnos','mydata')
list1
names(list1)

l=list(a=5,b=6)
l
list2=list(1,2,3) #note that the three nos are taken as 3 different items
list2
list3=list(c('Sachin','Rahul','Deepika'))
list3 #Note that the whole char vector is taken as 1 item
list4=list(c('Sachin','Rahul','Deepika'),c('Sachin','Rahul','Deepika'))
list4 #Note that the whole char vector is taken as 2 item
list5=list(list1,list2) #list may contain other lists as well
list5
# Working with a list
list1
names(list1)
list1[[3]] #to display the 3rd item in the list1
list1["mydata"] #to display the item named 'mydata' in the list1
list1$mydata #same as above
list1[[3]]$code #to display content of the variable 'code' of 3rd item in list1
list1$mydata$Gender #same as above
list1[[3]]$Name
list1[[3]]$Gender[3] # to display a particular element in list1

#Creating an empty list
emptylist=vector(mode='list', length=4)
emptylist

#Entering data into an empty
emptylist[[3]]=mydata1
emptylist[[3]]
emptylist[[1]]=c('a','b','c','d')
emptylist[[1]]
emptylist[[4]]=2:12
emptylist[[2]]=list3
emptylist

# Factor

gender=factor(c('male','male','female','male','female'))
gender
levels(gender)
as.integer(gender)
nlevels(gender)

Qlevel=factor(c('easy','medium','difficult','medium','easy','easy'))
Qlevel
nlevels(Qlevel)
as.integer(Qlevel)
Qlevel=factor(c('easy','medium','difficult','medium','easy','easy'),levels=c('easy','medium','diffi
cult'))
Qlevel
as.integer(Qlevel)


