// window.addEventListener('load', ()=>{
const theInput = document.querySelector(".search-input");
const taskBody = document.querySelector(".task-body");
const taskItem = document.querySelector(".task-item");
const searchBtn = document.querySelector(".search-btn");
// const toDelete = document.querySelector(".delete-btn")

let inputValue = "";

// theInput.addEventListener("keyup",(event)=>{
//     inputValue = theInput.value
//     // console.log(inputValue)
// } )

// searchBtn.addEventListener('click', ()=>{
//     if ( inputValue === ""){
//         alert(" type something ")
//         return;
//     }

//     const newDivItem = document.createElement("div")
//     newDivItem.classList.add('task-item')

//     const newElement = document.createElement('input')
//     newElement.value = inputValue
//     newElement.setAttribute("readonly","readonly")

//     const newEdit = document.createElement('input')
//     newEdit.value = "EDIT"
//     newEdit.type = "submit"

//     const newDelete = document.createElement('input')
//     newDelete.value ="DELETE"
//     newDelete.type ="submit"

//     newElement.classList.add("input-item")
//     newEdit.classList.add("edit-btn")
//     newDelete.classList.add("delete-btn")

//     newDivItem.append(newElement)
//     newDivItem.append(newEdit)
//     newDivItem.append(newDelete)

//     taskBody.append(newDivItem)

//     inputValue=""
//     theInput.value = ""

//     newDelete.addEventListener('click', ()=>{
//         taskBody.removeChild(newDivItem)
//         console.log('deleteclicked')
//      })

//     newEdit.addEventListener('click', ()=>{
//        let el = newEdit.value
//        if ( el.toLowerCase() === "edit"){
//         newElement.removeAttribute("readonly");
//         newElement.focus();
//         newEdit.value = "SAVE"
//        } else{
//         newElement.setAttribute('readonly', 'readonly')
//         newEdit.value = "EDIT"
//        }

//     })
// })

// function updateTask (){
//     editBtn.removeAttribute("readonly")
//     editBtn.innerHTML = "SAVE"
    
// }
function createTask(task) {
  // const taskBody = document.querySelector(".task-body")
  const taskHTML = `
            <div class="task-item">
                <input class="input-item" id="taskInput${task.id}" type="text" value="${task.name}" readonly>
                <input class="edit-btn" type="submit" value="EDIT" data-id="${task.id}"> 
                <input  class="delete-btn" type="submit" value="DELETE" data-id="${task.id}"> 
            </div>`;

  const position = "afterbegin";

  taskBody.insertAdjacentHTML(position, taskHTML);
}

const getData = (() => {
  fetch("http://localhost:8000/tasks/")
    .then((response) => response.json())
    .then((datas) => {
      datas.forEach((data) => {
        createTask(data);
      });
    });
})();

theInput.addEventListener("keyup", (event) => {
  inputValue = event.target.value;
})

searchBtn.addEventListener("click", () => {
  console.log(inputValue);
  if (inputValue === "") {
    alert(" type something ");
    return;
  } else {
    postData(inputValue)
    inputValue = ""
    theInput.value = ""

  }
});

const postData = (arg) => {
    const task = {
        "name": arg
    }
  fetch("http://localhost:8000/tasks", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
      response.json();
      console.log(response);
  });
};


const deleteData = (id) =>{
    fetch("http://localhost:8000/tasks/"+ id, {
        method: "DELETE",
    })
    .then((response) => response.text())
    .then(res=>console.log(res))

}

const updateData = (id, value) =>{
    const task = {
        "name": value
    }
    fetch("http://localhost:8000/tasks/"+ id, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.text())
    .then(res=> console.log(res))
}


taskBody.addEventListener("click", (event)=>{
    let taskId = event.target.getAttribute('data-id')
    let getValue = event.target.value
    // let theTask = event.target.parentElement[0]
    console.log(taskId, getValue)

    if( getValue.toLowerCase() === "delete"){
        console.log(taskId)
        deleteData(taskId)
    } 
    
    if( getValue.toLowerCase() === "edit"){
        const editBtn = document.querySelector(".edit-btn")
        const updateInput = document.getElementById(`taskInput${taskId}`)
        updateInput.removeAttribute("readonly")
      
        editBtn.value = "SAVE"
        console.log(taskId)
        //updateData(getId)        
    }
    if( getValue.toLowerCase() === "save"){
        const updateInput = document.getElementById(`taskInput${taskId}`)
        console.log(taskId)
        updateData(taskId, updateInput.value) ;       
    }
    
})
