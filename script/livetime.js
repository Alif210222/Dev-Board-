 // live date 
 function updatedate(){
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default" , {month : 'long'});
    const year = date.getFullYear();
    document.getElementById("liveDate").innerText = `${month} ${day} ${year}`
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
