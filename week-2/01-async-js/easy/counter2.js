function count (n){
    let i = 1
    function increment (){
        if(i <= n){
            console.log(i);
            i++;
            setTimeout(increment,1000);
        } 
    }
    increment();
}

count(5);