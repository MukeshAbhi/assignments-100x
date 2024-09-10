const n = 5 ;
let incriment = 1;
function counter(){
    if (incriment <= n){
        console.log(incriment);
        incriment++;
    } else{
        clearInterval(intervalId);
    }
    
}

let intervalId = setInterval(counter,1000)