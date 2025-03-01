
const taskNumber = document.getElementById("task-number").innerText
       
const massageNumber =  document.getElementById("click").innerText;
const convertNumber = parseInt(massageNumber)
    console.log(massageNumber)


    // event added

document.getElementById("complete-btn-1").addEventListener("click" ,
     function compleateTask(){
       const newNumber = taskNumber - 1;
        // console.log(newNumber)
        document.getElementById("task-number").innerText = newNumber;

     const newClick =   convertNumber+ 1;
     document.getElementById("click").innerText = newClick;

     



     const massagebox= document.getElementById("massage_notification")
     const title = document.getElementById("box-1-title").innerText;

     const div= document.createElement("div");
     div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-1","mb-2","mt-3")
      div.innerHTML = `
         <p class=" text-[14px]">You have comlete the task ${title} at <span id="clock"> ${ updateClock() } </span> </p>
      `
      massagebox.appendChild(div)



})

