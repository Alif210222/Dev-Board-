
// document.addEventListener("DOMContentLoaded", function() {

// const buttons = document.querySelectorAll("#complete-btn")

// for ( let button of buttons){
//     button.addEventListener("click" , function(){
//         button.disabled = true;
//         document.getElementById("complete-btn").style.opacity= "0.6"
//     })
// }



   

//   })



document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".myButton");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            button.disabled = true;
            //  document.getElementsByClassName(".myButton").style.opacity= "0.6"
            button.style.opacity= "0.6"
        });
    });
});

