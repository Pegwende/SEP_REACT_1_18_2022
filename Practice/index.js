window.addEventListener('load', ()=>{
    const theInput = document.querySelector(".search-input")
    const taskBody = document.querySelector(".task-body")
    const taskItem = document.querySelector(".task-item")
    const searchBtn = document.querySelector(".search-btn")
    const toDelete = document.querySelector(".delete-btn")
    let inputValue=''

theInput.addEventListener("keyup",(event)=>{
    inputValue = theInput.value
    // console.log(inputValue)
} )

searchBtn.addEventListener('click', ()=>{
    if ( inputValue === ""){
        alert(" type something ")
        return;
    }

    const newDivItem = document.createElement("div")
    newDivItem.classList.add('task-item')

    const newElement = document.createElement('input')
    newElement.value = inputValue
    newElement.setAttribute("readonly","readonly")

    const newEdit = document.createElement('input')
    newEdit.value = "EDIT"
    newEdit.type = "submit"

    const newDelete = document.createElement('input')
    newDelete.value ="DELETE"
    newDelete.type ="submit"


    newElement.classList.add("input-item")
    newEdit.classList.add("edit-btn")
    newDelete.classList.add("delete-btn")

    newDivItem.append(newElement)
    newDivItem.append(newEdit)
    newDivItem.append(newDelete)
    
    taskBody.append(newDivItem)

    inputValue=""
    theInput.value = ""

    newDelete.addEventListener('click', ()=>{
        taskBody.removeChild(newDivItem)
        console.log('deleteclicked')
     })

    newEdit.addEventListener('click', ()=>{
       let el = newEdit.value
       if ( el.toLowerCase() === "edit"){
        newElement.removeAttribute("readonly");
        newElement.focus();
        newEdit.value = "SAVE"
       } else{
        newElement.setAttribute('readonly', 'readonly')
        newEdit.value = "EDIT"
       }

    })
})



})



fetch("http://localhost:8000/list/")
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => console.log('Success:', JSON.stringify(response)));