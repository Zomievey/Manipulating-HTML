//Make a button appear on the page when it's first loaded. 
//The button cannot already be in your html. When the button is clicked, 
//you should display an Alert box with any (nice) message.

window.onload = () => {

    let firstButton = document.createElement("button");
    firstButton.textContent = "Press ME!";


    firstButton.addEventListener("click", () => {
        alert("Have a Wonderful Day!")


    });
    document.body.appendChild(firstButton);
}
//Make a button and text box (you can just put them in your HTML).
//When the button is clicked, display an alert with the message that is typed in the text box.

let twoButton = document.querySelector("#two-btn");
let twoButtonText = document.getElementById("twoButton-text");
twoButton.addEventListener("click", () => {
    alert(twoButtonText.value);

});
//Create a div in HTML. 
//Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
//The div should return to its original color when the mouse exits the div.

let threeDiv = document.getElementById("three-div");
threeDiv.addEventListener("mouseenter", () => {
    threeDiv.style.backgroundColor = "purple";
});

threeDiv.addEventListener("mouseleave", () => {
    threeDiv.style.backgroundColor = "black";
});

//Put some text in a paragraph.
//Make it where when you click on the paragraph, the color of the text switches to red
//Once you get that working, try to rewrite your code to make it switch to a random color each click 

let fourparagraph = document.getElementById("four-para");
fourparagraph.addEventListener("click", () => {
    fourparagraph.style.color = random_rgba();
});

//Add a button and an empty div. 
//When the button is clicked, add a span that contains your name to the empty div.

let fivebutton = document.getElementById("five-btn");
let fivediv = document.getElementById("five-div");
fivebutton.addEventListener("click", () => {
    let createSpan = document.createElement("span");
    createSpan.textContent = "Haylee"
    fivediv.appendChild(createSpan);

});

//Create a button and a ul in your HTML. 
//In JavaScript, create an array containing the names of your friends (at least 10.
//When the button is clicked, add each friend's name as an li to the ul on the page.


let sixButton = document.getElementById("six-button");
let sixDiv = getElementById("six-div");
let friendArray = ["Snoopy", "Garfield", "Felix", "Tom", "Jerry", "Pluto", "Yogi", "Donald", "Daisy"];
let friendCounter = 0

sixbutton.addEventListener("click", () => {
    if (friendCounter < friendArray.length) {
        let
    }




}









