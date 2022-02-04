var likeNumb = 0;
function addLike() {
    var likes = document.querySelector(".likes");
    likes.innerText = likeNumb + " Like(s)"; 
    likeNumb += 1;
}
