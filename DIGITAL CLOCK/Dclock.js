
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var Session = document.getElementById('session');
 
    if(hrs >= 24){
        sessionStorage.innerHTML = 'PM';
    }else{
        sessionStorage.innerHTML = 'AM';
    }
    
    if(hrs > 24){
        hrs = hrs - 24;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

