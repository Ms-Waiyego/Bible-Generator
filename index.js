
//Adding a like button 
//Adding a function that add number of likes on the page 
const likeCountElement = document.getElementById("like-count");
const likeButton = document.getElementById("like-button");
likeButton.addEventListener("click",(() => {
let currentLikeCount = parseInt(likeCountElement.innerHTML.split(" ")[0]);
currentLikeCount = currentLikeCount + 1;
return likeCountElement.innerHTML = `${currentLikeCount} likes`; 
}))

//Fetching the bible API 
//Creating a button that generates the verse when clicked
//Displaying the bible vesre
document.getElementById('get-verse').addEventListener('click', getverse)
function getverse(verse) {
  fetch(`https://bible-api.com/romans+12:1-2`,{
   method : "GET",})
  .then((response)=> response.json())
  .then((bibleverse)=>{ console.log(bibleverse)
   document.getElementById('verse').innerHTML= JSON.stringify(bibleverse.text) })}

//Comment section
// Add submit event listener to form for adding comments
// Create variable to store new comment and add event listener to input element to update the variable
 const form = document.querySelector('form')
 form.addEventListener('submit', onSubmit);
 function onSubmit(e) {
  e.preventDefault();
  handleComment(e.target["add-comment"].value)}
 function handleComment(comment) { 
  let p = document.createElement('p')
  p.textContent = comment
  console.log(p)
 document.querySelector("#comment").appendChild(p)
}