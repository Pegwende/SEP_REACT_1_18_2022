// window.addEventListener('load', ()=>{
const theInput = document.querySelector(".search-input");
const taskBody = document.querySelector(".task-body");
const taskItem = document.querySelector(".task-item");
const searchBtn = document.querySelector(".search-btn");
// const toDelete = document.querySelector(".delete-btn")
const editBtn = document.querySelector(".edit-btn")
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

function createTask(task) {
  // const taskBody = document.querySelector(".task-body")
  const taskHTML = `
            <div class="task-item">
                <input class="input-item" type="text" value="${task.name}" readonly>
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

const updateData = (id, arg) =>{
    const task = {
        "name": arg
    }
    fetch("http://localhost:8000/tasks/"+ id, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "applicstion/json",
        },
    })
    .then((response) => response.text())
    .then(res=>console.log(res))
}


taskBody.addEventListener("click", (event)=>{
    let getId = event.target.getAttribute('data-id')
    let getValue = event.target.value
    // let theTask = event.target.parentElement[0]
    console.log(getId, getValue)

    if( getValue.toLowerCase() === "delete"){
        console.log(getId)
        deleteData(getId)
    } 
    
    if( getValue.toLowerCase() === "edit"){
        editBtn.removeAttribute("readonly")
        editBtn.innerHTML= "SAVE"
        console.log(getId)
        updateData(theId)
        
    }
    
})
