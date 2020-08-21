//1) Select the section with an id of container without using querySelector.

let container = document.getElementById("container")

//2) Select the section with an id of container using querySelector.

let queryContainer = document.querySelector("container")

//3) Select all of the list items with a class of "second".

let secondClass = document.getElementsByClassName("second");

//4) Select a list item with a class of third, but only if the list item inside of the ol tag.

let listThirdClass = document.querySelector("ol.third")

//5) Give the section with an id of container the text "Hello!".
  
container.innerText = "Hello!"

//6) Add the class main to the div with a class of footer.

document.querySelector("div.footer").classList.add("main")

//7) Remove the class main on the div with a class of footer.

document.querySelector("div.footer").classList.remove("main")

//8) Create a new li element.

document.createElement(li)

//9) Give the li the text "four".

newElement.innerText = "four"

//10) Append the li to the ul element.

doucment.querySelector("ul").appendChild(li);

//11) Loop over all of the lis inside the ol tag and give them a background color of "green".

const listItemsOl = doucment.querySelectorAll("ol li")
for(let i = 0; i < listItemsOl.length; i++)
{
  listItemsOl[i].getElementById.backgroundColor = "green"
}

//12) Remove the div with a class of footer.

const footer = document.querySelector(".footer")
footer.remove()
 
