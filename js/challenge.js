const form = document.getElementById("comment-form");
const textArea = document.getElementById("comment-input");
const commentList = document.getElementById("list");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let commentText = textArea.value;
    let p = document.createElement("p");
    p.innerText = commentText;
    commentList.appendChild(li);
});



