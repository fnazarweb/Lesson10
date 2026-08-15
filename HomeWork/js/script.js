//1
// const name = "Nazar";
// const ls = localStorage;
// ls.setItem("name", name);
// console.log(ls.getItem("name"));

//2
// document.addEventListener("DOMContentLoaded", handleReload);

// function handleReload() {
//   if (Number(ls.getItem("counter"))) {
//     let counter = Number(ls.getItem("counter"));
//     counter += 1;
//     ls.setItem("counter", counter);
//     console.log("Ви відвідали цю сторінку " + ls.getItem("counter") + " разів");
//   } else {
//     let counter = 1;
//     ls.setItem("counter", counter);
//     console.log("Ви відвідали цю сторінку " + ls.getItem("counter") + " разів");
//   }
// }

//3
// const user = {
//   name: "Olya",
//   city: "Lyiv",
//   age: 20,
// };

// ls.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(ls.getItem("user")));

// lsUser = JSON.parse(ls.getItem("user"));
// console.log(`${lsUser.name}, ${lsUser.age} років, ${lsUser.city}`);

//4
// let products = ["Milk", "Bread", "Eggs"];
// ls.setItem("products", JSON.stringify(products));
// products = JSON.parse(ls.getItem("products"));
// products.push("Cheese");
// ls.setItem("products", JSON.stringify(products));
// console.log(products);

//5

// const form = document.querySelector(".form");
// const input = document.getElementById("nameInput");
// const saveBtn = document.getElementById("saveBtn");
// const clearBtn = document.getElementById("clearBtn");

// let user2 = {};

// document.addEventListener("DOMContentLoaded", handleReload2);
// form.addEventListener("click", handleClick);

// function handleClick(event) {
//   let button = event.target.closest("button");
//   if (button && button === saveBtn) {
//     user2.name = input.value;
//     console.log(user2.name);
//     ls.setItem("user2", JSON.stringify(user2));
//     user2 = JSON.parse(ls.getItem("user2"));
//     console.log("Input: " + user2.name);
//   } else if (button === clearBtn) {
//     ls.removeItem("user2");
//     user2.name = "";
//     input.value = "";
//     console.log(user2);
//   }
// }

// function handleReload2() {
//   if (ls.getItem("user2")) {
//     input.value = JSON.parse(ls.getItem("user2")).name;
//   }
// }

//6

// const ls = localStorage;
// let toDo = document.querySelector(".toDo");
// let input = toDo.querySelector("#taskInput");
// let addBtn = toDo.querySelector("#addBtn");
// let tasks = [];
// let uniqId = 0;

// document.addEventListener("DOMContentLoaded", handleReload);
// addBtn.addEventListener("click", handleAddTask);

// toDo.addEventListener("click", handleRemove);

// function handleRemove(event) {
//   const button = event.target.closest(".removeBtn");
//   const task = event.target.closest(".task");
//   if (button) {
//     const removeIndex = tasks.findIndex((el) => el.id === Number(task.id));
//     if (removeIndex !== -1) {
//       tasks.splice(removeIndex, 1);
//       ls.setItem("tasks", JSON.stringify(tasks));
//       button.closest(".task").remove();
//     }
//   }
// }

// function handleAddTask() {
//   if (input.value) {
//     const task = pushTask(tasks);
//     insertTask(task);
//     uniqId++;
//     ls.setItem("tasks", JSON.stringify(tasks));
//   }
// }

// function pushTask(tasks) {
//   const task = {
//     id: uniqId,
//     text: input.value,
//   };
//   tasks.push(task);
//   return task;
// }

// function insertTask(task) {
//   const div = document.createElement("div");
//   const span = document.createElement("span");
//   const button = document.createElement("button");

//   toDo.append(div);
//   div.append(span, button);

//   div.id = task.id;

//   div.classList.add("task");
//   span.textContent = task.text;
//   button.classList.add("removeBtn");
//   button.innerHTML = "Remove";
// }

// function handleReload() {
//   const lsTasks = JSON.parse(ls.getItem("tasks"));
//   if (lsTasks) {
//     lsTasks.forEach((element) => {
//       tasks.push(element);
//       insertTask(element);
//     });
//     uniqId = Math.max(...tasks.map((task) => task.id)) + 1;
//   }
// }
