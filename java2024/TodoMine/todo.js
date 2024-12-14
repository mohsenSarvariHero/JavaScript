console.log("array and loops");


let todoList = [];

function todoAdd() {
  let dateinput =   document.querySelector(".datetodo").value;
  let inputvalue = document.querySelector(".inputname");
  let valueinput = inputvalue.value;

  const newItem = {
    id : Date.now(),
    text : valueinput,
    date : dateinput
  }
  todoList = [...todoList, newItem];
  console.log(todoList)
  renderList();
}

function deleteItem(id){
    todoList = todoList.filter(item => item.id !== id);
    renderList();
}

let listShow = document.querySelector(".listTodo");

const renderList = () => {
    listShow.innerHTML = "";
    todoList.forEach((item, index) =>{
        let listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        listItem.innerHTML = `
        <div> ${item.text}</div>
           <div>${item.date}</div> 
            <button class="btnDel js-delete-todo-button" >Delete</button>
        `;
        listShow.appendChild(listItem)
    })
    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        // console.log(index)
        // todoList.splice(index, 1);
        todoList = todoList.filter((_, listIndex) => listIndex !== index);        renderList();
        renderList();
      });
    });
    // console.log(index)
}

// let array1 = ["dsf","ffd","sdf"];
// for (item in array1){
//     console.log(array1[item])
// }
// array1.push("154")
// for (item in array1){
//     console.log(array1[item])
// }
// let listItem = document.createElement("li"); // Create a new list item
// newItem.innerHTML = `
// <div class="listItems">
//   <p>${valueinput}</p> 
//   <p>${date}</p> 
//   <button  onclick="deleteItem(${todoList.length - 1})">Delete</button>
//   <br/>
// </div>
// <br/>

//   `;

// listShow.appendChild(listItem);
// document.querySelector(".datetodo").value

// let todoList = []; // Array to hold todo items as objects

// // Add a new TODO
// const todoAdd = () => {
//     const nameInput = document.querySelector(".inputname").value; // Get the todo name
//     const dateInput = document.querySelector(".datetodo").value; // Get the todo date

//     if (!nameInput || !dateInput) {
//         alert("Please enter both the name and date for the todo.");
//         return; // Exit if inputs are empty
//     }

//     // Create a new todo object
//     const newItem = {
//         id: Date.now(), // Unique identifier
//         name: nameInput, // Todo name
//         date: dateInput, // Todo date
//     };

//     todoList.push(newItem); // Add the new item to the list
//     renderList(); // Render the updated list
// };

// // Render the TODO list
// const renderList = () => {
//     const listShow = document.querySelector(".listTodo"); // Select the list element

//     if (!listShow) {
//         console.error("Element with class 'listTodo' not found");
//         return;
//     }

//     listShow.innerHTML = ""; // Clear the current list

//     // Create and append list items
//     todoList.forEach((item) => {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//             <span>${item.name} - ${item.date}</span>
//             <button onclick="deleteItem(${item.id})">Delete</button>
//         `;
//         listShow.appendChild(listItem);
//     });
// };

// // Delete a TODO
// const deleteItem = (id) => {
//     todoList = todoList.filter(item => item.id !== id); // Remove the item with the given ID
//     renderList(); // Render the updated list
// };
