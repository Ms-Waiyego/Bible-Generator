
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
let newComment = "";
const addComment = (event) => {
    event.preventDefault();
    newComment = event.target.value;
    if(newComment !=""){
        return newComment;
    }
}

comments.addEventListener('submit',addComment);

// Add submit event listener to form for adding comments
const handleSubmit = (event) => {
    event.preventDefault();
    let newCommentItem = document.createElement("li");
    newCommentItem.innerText = newComment;
    commentList.appendChild(newCommentItem);
    comments.value = "";
}