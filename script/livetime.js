 // live date 
 function updatedate(){
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default" , {month : 'long'});
    const year = date.getFullYear();
    document.getElementById("liveDate").innerText = `${day} ${month}  ${year}`
}
updatedate();

// Date name 
function updatedatename (){
    const date = new Date ();
    const name = {weekday : 'long'};
    const datename = date.toLocaleDateString('en-US' , name)

    document.getElementById("datename").innerText = `${datename}`
}
updatedatename();




// time calculation



function updateClock () {
   let time = new Date();
   let  hours = time.getHours();
   let  minutes = time.getMinutes();
   let seconds = time.getSeconds();
   let  ampm = hours >= 12 ? 'pm' : 'am';

   hours = hours % 12 || 12 ;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ?  '0' + seconds : seconds ;

  const realtime = document.getElementById("clock")

     let settime = `${hours}:${minutes}:${seconds} ${ampm}`;
        // console.log (settime)
    return (settime);
  

}

// updateClock();
