// window.addEventListener('load', ()=>{
    const theInput = document.querySelector(".search-input")
    const taskBody = document.querySelector(".task-body")
    const taskItem = document.querySelector(".task-item")
    const searchBtn = document.querySelector(".search-btn")
    // const toDelete = document.querySelector(".delete-btn")
    let inputValue=''

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





function createTask(name){
    // const taskBody = document.querySelector(".task-body")
    const task=`
            <div class="task-item">
                <input class="input-item" type="text" value="${name}" readonly>
                <input class="edit-btn" type="submit" value="EDIT">
                <input  class="delete-btn" type="submit" value="DELETE"> 
            </div>`

            const position = "beforeend"

    taskBody.insertAdjacentHTML(position, task)

}



const getData  =( () =>{
     fetch("http://localhost:8000/tasks/")
        .then(response => response.json())
        .then(datas => {
            datas.forEach((data)=>{
                createTask(data.name)
            })
        })
})()



theInput.addEventListener("keyup",(event)=>{
    inputValue = theInput.value
    console.log(inputValue)

    searchBtn.addEventListener('click', ()=>{
        if ( inputValue === ""){
            alert(" type something ")
            return;
        } else{
            createTask(inputValue)
            inputValue = ""
        }
    })

} )



const postData =() =>{
    let task = {
        "name": "go to a restaurant at 12"
    }

    fetch("http://localhost:8000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => response.json());
}

postData()


const deleteData = (id) =>{
    fetch("http://localhost:8000/tasks/"+ id, {
        method: "DELETE",
    })
    .then((response) => response.text())
    .then(res=>console.log(res))

}



taskBody.addEventListener("click", (event)=>{
    let val = +event.target.id
    deleteData(val)
    console.log(val)
})

window.addEventListener("load", ()=>{
    
})



// })