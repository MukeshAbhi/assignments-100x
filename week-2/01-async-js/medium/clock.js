
function clock (){
    const newDate = new Date();
    const hour = String(newDate.getHours()).padStart(2,"0");
    const minutes = String(newDate.getMinutes()).padStart(2,"0");
    const seconds = String(newDate.getSeconds()).padStart(2,"0");
    console.clear();
    console.log(hour +':'+ minutes + ':' + seconds)
    
}

setInterval(clock,1000);

