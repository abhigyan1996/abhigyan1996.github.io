#include<stdio.h>
int main() {


	int n; 
	int i;
	int a=0;
	int b=0;
	scanf("%d",&n);
	int arr[n],x,y;
	int count=1;

for (int k=0;k<n;k++){
	scanf("%d",&arr[n]);
}
	scanf("%d",&x);
	scanf("%d",&y);

while((arr[a]!=0) && (arr[b]!=0)) {
	a=a+x;
	b=b+y;
	if (a==b){
		count++;
	}
}
printf("%d",count);

	return 0;
}