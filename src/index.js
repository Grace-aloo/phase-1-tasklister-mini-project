document.addEventListener("DOMContentLoaded", () => {
  // your code here
 // const name = document.getElementById("new-task-description").innerHTML
 // const tasks =document.getElementById("tasks")
//  function taskslist (){
  //  tasks=name
   // tasks.forEach(task => {
   //   console.log(task);
   // });
  //}
  let form = document.querySelector("form")
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    handleToDo(e.target.new.value)
    form.reset()
  })
  
  function handleToDo(todo){
    let list = document.createElement('li')
    list.textContent = todo
    let btn = document.createElement('button')
    btn.textContent = 'x'
    btn.addEventListener('click',handleDelete)
    document.getElementById("tasks").appendChild(list)
    list.appendChild(btn)

  }
  function handleDelete(e){
    e.target.parentNode.remove()
  }
  //function eventThatDeletesBtnAndParentNode(){
   // let button = document.getElementsByClassName('detete-Btn')
   // button.forEach(btn => {
      
   // })
 // }
});
