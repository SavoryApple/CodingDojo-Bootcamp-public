console.log("page loaded...");
document.querySelectorAll('.video1').forEach(function(vid) {
    vid.onmouseover = function() {
    this.play();
    }
    vid.onmouseout = function() {
        this.pause();
        this.currentTime = 0;
    }
 })