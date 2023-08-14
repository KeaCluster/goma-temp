const vidPlayer = document.getElementById("videoPlayer");
const vidSource = document.getElementById("videoSource");

const mobileSrc = 'Reel.mp4';
const deskSrc = 'Banner_black.mp4';

const getSource = () => {
    const mobileSize = 768;
    return window.innerWidth <= mobileSize
        ? `public/videos/${mobileSrc}`
        : `public/videos/${deskSrc}`;
};

const setVideoSource = () => {
    const currentSrc = vidSource.getAttribute('src');
    const videoSrc = getSource();

    if (currentSrc !== videoSrc) {
        vidSource.setAttribute("src", videoSrc);
        vidPlayer.load();
        vidPlayer.play();  // Ensure video starts playing after load
    }
};

let debounceTime;  // Declare debounceTime variable
const resizeHandler = () => {
    clearTimeout(debounceTime);
    debounceTime = setTimeout(setVideoSource, 250);
};

// Initial setup
setVideoSource();

// Listen for resize events
window.addEventListener('resize', resizeHandler);
