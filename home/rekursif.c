#include <stdio.h>
int Fib(int n){
//nilai awal
if (n==0){
return 0;
} else if (n==1){
return 1;
} else{
return Fib(n-1)+Fib(n-2);
}
}
int main(){
int n;
printf("Masukkan nilai n: ");
scanf("%d", &n);
//Pemanggilan fungsi Fibonacci
printf("\nHasil: %d", Fib(n));
return 0;
}
