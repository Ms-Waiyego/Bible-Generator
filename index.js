//Creating a submit button
//This button enables one to submit their comment on the verse given

document.addEventListener("DOMContentLoaded", () => {
    
      console.log ("After DOM loaded")
    });
    console.log('Before DOM loads')

//Adding a like button 
//Adding a function that add number of likes on the page 
const likeCountElement = document.getElementById("like-count");
const likeButton = document.getElementById("like-button");
likeButton.addEventListener("click",(() => {
let currentLikeCount = parseInt(likeCountElement.innerHTML.split(" ")[0]);
currentLikeCount = currentLikeCount + 1;
return likeCountElement.innerHTML = `${currentLikeCount} likes`; 
}))


document.getElementById('get-verse').addEventListener('click', getverse)
function getverse(verse) {
  fetch(`https://bible-api.com/romans+12:1-2`,{
   method : "GET",})
  .then((response)=> response.json())
  .then((bibleverse)=>{ console.log(bibleverse)
  const parentDiv = document.getElementById("verse")
  Array.from(bibleverse).forEach((verse) =>{
    bibleverse += `<p>${verse.text}</p>`
   })
   document.getElementById('verse').innerHTML= JSON.stringify(bibleverse.text)
  } )
  }