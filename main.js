//DECLARING VIARIABLES cons, let, var.
//DATA TYPES  object, number, boolen, null.

// const name = "aj";
// const age = 21;

// console.log(`My name is ${name} im ${21} yrs of age`);
// const hello = `My name is ${name} im ${21} yrs of age`;
// console.log(hello);

// const s = "hi, hello, how, you";

// console.log(s.split(", "));

// Arrays - holds multiple values
// const Names = ["Aj", "Nel", "Ed", "Baron"];
// //push values
// Names.push("Jason");
// //push values in first
// Names.unshift("Ian");
// //delete last value
// Names.pop();
// console.log(Array.isArray(Names));
// console.log(Names.indexOf("Ed"));
// console.log(Names);

// Object
// const Person = {
// 	FirstName: "Aj",
// 	LastName: "Sabuero",
// 	Age: 21,
// };
// Person.email = "aaronjayesabuero@gmail.com";

// console.log(Person);

// const todos = [
// 	{
// 		id: 1,
// 		text: "I want you",
// 		isTrue: true,
// 	},
// 	{
// 		id: 2,
// 		text: "I dont like you",
// 		isTrue: false,
// 	},
// 	{
// 		id: 3,
// 		text: "I love you",
// 		isTrue: true,
// 	},
// ];

// console.log(todos);
//THIS HOW TO CONVERT JS DATA INTO JSON
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

//FOR LOOP
// for (let i = 0; i < todos.length; i++) {
// 	console.log(todos[i].isTrue);
// }

//forEach
// todos.forEach(function (todo) {
// 	console.log(todo.text);
// });

//forMap
// const todoText = todos.map(function (todo) {
// 	return todo.text;
// });
// console.log(todoText);

//forFilter+map
// const todoTrue = todos
// 	.filter(function (todo) {
// 		return todo.isTrue === true;
// 	})
// 	.map(function (todo) {
// 		return todo.text;
// 	});
// console.log(todoTrue);

//CONDITIONAL
// const age = 78;
// if (age <= 17) {
// 	console.log("You are under age");
// } else if (age >= 18 && age < 59) {
// 	console.log("Prime Age");
// } else {
// 	console.log("Mag sesenior haha");
// }

// const x = 12;
// const color = x > 10 ? "blue" : "yellow";

// switch (color) {
// 	case "blue":
// 		console.log("the color is blue");
// 		break;
// 	case "yellow":
// 		console.log("the color is yellow");
// 		break;
// 	default:
// 		console.log("color is not blue or yellow");
// 		break;
// }

//FUNCTION
// function addNumber(num1, num2) {
// 	return num1 + num2;
// }
// console.log(addNumber(50, 5));

//Arrow function
// const addNumber = (num1, num2) => {
// 	return num1 + num2;
// };
// console.log(addNumber(50, 5));

//OOP
//Constructor function
// function Person(fName, lName, bDate) {
// 	this.fName = fName;
// 	this.lName = lName;
// 	this.bDate = new Date(bDate);
// }
// Person.prototype.getBirthYear = function () {
// 	return this.bDate.getFullYear();
// };
// Person.prototype.getFullName = function () {
// 	return `${this.fName} ${this.lName}`;
// };
// const person1 = new Person("Aj", "Sabuero", "02-25-04");
// const person2 = new Person("Jazzel", "Claire", "01-29-05");
// console.log(person1);

//class
// class Person {
// 	constructor(fName, lName, bDate) {
// 		this.fName = fName;
// 		this.lName = lName;
// 		this.bDate = new Date(bDate);
// 	}
// 	getBirthYear() {
// 		return this.bDate.getFullYear();
// 	}
// 	getFullName() {
// 		return `${this.fName} ${this.lName}`;
// 	}
// }

// const person1 = new Person("Aj", "Sabuero", "02-25-04");
// const person2 = new Person("Jazzel", "Claire", "01-29-05");
// console.log(person1);

// console.log(window);
// alert("Error");

//Single element
//get id only
// console.log(document.getElementById("my-form"));
// // get id/class
// console.log(document.querySelector("h1"));

//multiple selector
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "First item";
// ul.children[1].innerHTML = "<h2>Hello g</h2>";
// ul.lastElementChild.textContent = "hi boy";

// const button = document.querySelector("button");
// button.style.background = "blue";

// const button = document.querySelector("button");
// button.addEventListener("mouseenter", (a) => {
// 	a.preventDefault();
// 	document.querySelector("button").style.background = "blue";
// 	document.querySelector(".items").lastElementChild.innerHTML =
// 		"<h1>Hello mother father</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const listUser = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

// EVENT DELEGATION (ONCE ONLY)
listUser.addEventListener("click", function (e) {
	if (e.target.classList.contains("delete-btn")) {
		e.target.parentElement.remove();
	}

	if (e.target.classList.contains("edit-btn")) {
		const li = e.target.parentElement;
		const textNode = li.firstChild;
		const currentText = textNode.textContent.trim();

		const newText = prompt("Edit item:", currentText);

		if (newText !== null && newText.trim() !== "") {
			textNode.textContent = newText + " ";
		}
	}
});

function onSubmit(e) {
	e.preventDefault();

	msg.classList.remove("error", "success");
	msg.innerHTML = "";

	if (nameInput.value.trim() === "" && emailInput.value.trim() === "") {
		msg.classList.add("error");
		msg.innerHTML = "<h3>Fill name and email!</h3>";
	} else if (nameInput.value.trim() === "") {
		msg.classList.add("error");
		msg.innerHTML = "<h3>Fill name!</h3>";
	} else if (emailInput.value.trim() === "") {
		msg.classList.add("error");
		msg.innerHTML = "<h3>Fill email!</h3>";
	} else {
		msg.classList.add("success");
		msg.innerHTML = "<h3>Submitted Success</h3>";

		const li = document.createElement("li");
		li.innerHTML = `
			${nameInput.value}, ${emailInput.value}
			<button class="edit-btn">Edit</button>
			<button class="delete-btn">Delete</button>
		`;

		listUser.appendChild(li);

		nameInput.value = "";
		emailInput.value = "";
	}

	setTimeout(() => {
		msg.innerHTML = "";
		msg.classList.remove("error", "success");
	}, 3000);
}
