let sum = 0
for(x=1 ; x<=100 ; x++){
    sum += x;
    if (sum>1000){
        console.log(sum)
        break;
    }
}