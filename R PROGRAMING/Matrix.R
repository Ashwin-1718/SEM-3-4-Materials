A = matrix (nrow = 3, ncol = 3, byrow =T) ;A

A <- matrix(c(6, 5,1, 7, 8, 2,9, 10,3),nrow = 3, ncol = 3, byrow = TRUE);A

A [ ,3] = c(1,2,3)

A [1:3 ,2]
A[ ,2]
A[2, c(1,3)]

A[,3] > 3

A+2
B = matrix(1:9,3,3,T) ;B
A + B 
A - B
A * B
A / B
t(A)

Syn = (A + t(A))/2 ;Syn
diag(A)
diag(2)
diag(3)
diag(4)

det(A)

a = matrix(1:4, 2, 2, T) ;a

a[1, ] = a[1, ] + (2 * a[2,1]) ;a
a[1, 1:2] = a [1, 1:2] + (2 * a[2, 1:2]) ;a
