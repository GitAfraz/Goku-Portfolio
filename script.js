document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('video');
    setTimeout(function() {
        video.style.display = 'block'; // Show the video
        video.play();
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }, 500); // 3 seconds delay
});

// Function to handle exiting full screen
function handleFullscreenChange() {
    var video = document.getElementById('video');
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        video.pause();
        video.style.display = 'none';
    }
}

// Add fullscreen change event listeners
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);