const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/grey-cat.png") {
        myImage.setAttribute("src", "images/ginger-cat-5.png");
      }  else {
            myImage.setAttribute("src", "images/grey-cat.png");
        }
    
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUsername() {
    const myName = prompt("What is your name?");
    if (!myName) {
        setUsername();
    }   else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cats are cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUsername();
}   else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cats are cool, ${storedName}`;
}
myButton.onclick = () => {
    setUsername();
}