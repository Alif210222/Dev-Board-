// In this js file task number count 

//  box -1

document.getElementById("complete-btn-1").addEventListener("click" , function(){
    alert("Board Update Successfully");
     
    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)
const massagebox= document.getElementById("massage_notification")
     const title = document.getElementById("box-1-title").innerText;

     const div= document.createElement("div");
     div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
      div.innerHTML = `
         <p class=" text-[14px] ">You have comlete the task <span class="font-semibold">${title}</span>  at <span id="clock" class= "font-bold "> ${ updateClock() } </span> </p>
      `
      massagebox.appendChild(div)
})



// box-2

document.getElementById("complete-btn-2").addEventListener("click" , function(){
    alert("Board Update Successfully");

    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)

const massagebox= document.getElementById("massage_notification")
const title = document.getElementById("box-2-title").innerText;

const div= document.createElement("div");
div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
 div.innerHTML = `
    <p class=" text-[14px]">You have comlete the task <span class="font-semibold">${title}</span> at <span id="clock" class= "font-bold"> ${ updateClock() } </span> </p>
 `
 massagebox.appendChild(div)

})


// box 3

document.getElementById("complete-btn-3").addEventListener("click" , function(){
    alert("Board Update Successfully");

    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)
const massagebox= document.getElementById("massage_notification")
     const title = document.getElementById("box-3-title").innerText;

     const div= document.createElement("div");
     div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
      div.innerHTML = `
         <p class=" text-[14px]">You have comlete the task <span class="font-semibold">${title}</span> at <span id="clock" class= "font-bold "> ${ updateClock() } </span> </p>
      `
      massagebox.appendChild(div)
})



// box-4
document.getElementById("complete-btn-4").addEventListener("click" , function(){

    alert("Board Update Successfully");

    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)

const massagebox= document.getElementById("massage_notification")
const title = document.getElementById("box-4-title").innerText;

const div= document.createElement("div");
div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
 div.innerHTML = `
    <p class=" text-[14px]">You have comlete the task <span class="font-semibold">${title}</span> at <span id="clock" class= "font-bold "> ${ updateClock() } </span> </p>
 `
 massagebox.appendChild(div)
})



// box-5
document.getElementById("complete-btn-5").addEventListener("click" , function(){
    alert("Board Update Successfully");

    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)
const massagebox= document.getElementById("massage_notification")
const title = document.getElementById("box-5-title").innerText;

const div= document.createElement("div");
div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
 div.innerHTML = `
    <p class=" text-[14px]">You have comlete the task <span class="font-semibold">${title}</span> at <span id="clock" class= "font-bold "> ${ updateClock() } </span> </p>
 `
 massagebox.appendChild(div)
})



// box-6
document.getElementById("complete-btn-6").addEventListener("click" , function(){
    alert("Board Update Successfully");

    alert("congrates !!! You have compleated all the current task !");

    const taskNumber  = getInnerTextById("task-number") ;
    const clickNumber = getInnerTextById("click");

    const updatetaskNumber = taskNumber - 1;
    document.getElementById("task-number").innerText = updatetaskNumber; 

    const updateClick = clickNumber + 1;
    document.getElementById("click").innerText = updateClick;

//   console.log(updatetaskNumber , updateClick)

const massagebox= document.getElementById("massage_notification")
const title = document.getElementById("box-6-title").innerText;

const div= document.createElement("div");
div.classList.add("bg-[#d1d1e2]","border", "rounded-lg","p-2","mb-2","mt-3")
 div.innerHTML = `
    <p class=" text-[14px]">You have comlete the task <span class="font-semibold">${title}</span> at <span id="clock" class= "font-bold "> ${ updateClock() } </span> </p>
 `
 massagebox.appendChild(div)

})