console.log(document);

const divs = document.getElementsByTagName("div");
console.log(divs);

const inviteButton = document.getElementById("invite-button");
inviteButton.style = "font-size: 20px;";
inviteButton.style.fontFamily = "Courier New";


console.log(inviteButton);

const accountButton = document.getElementsByName("account-button");
console.log(accountButton[0]);

const signoutButton = document.getElementById("signout-button");
console.log(signoutButton);

let inviteButtonRemoved;
const topNavButtons = document.getElementById("top-nav-buttons");
for (const el of topNavButtons.children) {
    if (el.id === "invite-button") {
        topNavButtons.removeChild(el);
        inviteButtonRemoved = el;
    }
}

topNavButtons.appendChild(inviteButtonRemoved);
topNavButtons.insertBefore(inviteButtonRemoved, accountButton[0])


const classmates = document.getElementById("classmates");
console.log(classmates);
const courses = document.getElementById("courses");
console.log(courses);
const trade = document.getElementById("trade");
console.log(trade);
const profile = document.getElementById("profile");
console.log(profile);
classmates.style="color: #000080";
courses.style="color:#00806b";
profile.style="color:#807300";
trade.style="color:#80006d"

const rightArrow = document.getElementById("right-arrow");
const course1 = document.getElementById("course1");
const course2 = document.getElementById("course2");
const course3 = document.getElementById("course3");
if (rightArrow.click){
    
}