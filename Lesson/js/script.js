// function check() {
//   let val = document.getElementsByName("radio");
//   if (val[0].checked) {
//     console.log("Female");
//   } else {
//     console.log("Male");
//   }
// }

// let form = document.querySelector(".form");
// let nameInput = document.querySelector(".inputName");
// let lastNameInput = document.querySelector(".inputLastName");
// let age = document.querySelector("#age");
// let male = document.getElementsByName("radio");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.checked,
//     male: male[0].checked,
//   };
//   localStorage.setItem("info", JSON.stringify(info));
//   const a = localStorage.getItem("info");
//   console.log(JSON.parse(a));
// }

// if (localStorage.getItem("info")) {
//   const ls = JSON.parse(localStorage.getItem("info"));
//   console.log(ls);
//   nameInput.value = ls.name;
//   lastNameInput.value = ls.lastName;
//   age.checked = ls.age;
//   if (ls.male == 1) {
//     male[0].checked = true;
//   } else {
//     male[1].checked = true;
//   }
// }

// let form = document.querySelector("#form");
// let formData = {};

// form.addEventListener("input", function (event) {
//   if (event.target.name) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem("formData", JSON.stringify(formData));
//   }
// });

// if (localStorage.getItem("formData")) {
//   formData = JSON.parse(localStorage.getItem("formData"));

//   for (let key in formData) {
//     form.elements[key].value = formData[key];
//   }
// }
