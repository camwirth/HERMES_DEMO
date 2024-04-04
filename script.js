const videoElement = document.getElementById('camera-preview');

// Check if the browser supports WebRTC
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Display the camera stream in the <video> element
            videoElement.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing the camera:', error);
        });
} else {
    console.error('getUserMedia is not supported in this browser');
}
