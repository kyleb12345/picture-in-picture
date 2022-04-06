const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select a media stream, pass to video element and then play

async function selectMediaSteam() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error) {
        console.log('error here', error)
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

// on load
selectMediaSteam()