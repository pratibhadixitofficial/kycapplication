setTimeout(function () {
  console.log(jQuery(".mirrored").length);
  console.log('jQuery(".mirrored").length');
  jQuery(".mirrored").attr("id", "video");
  const video = document.getElementById("video");
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/assets/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/assets/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/assets/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/assets/models"),
  ]).then(startVideo);

  function startVideo() {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (video.srcObject = stream),
      (err) => console.log(err)
    );
  }

  video.addEventListener("play", () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = {
      width: video.width,
      height: video.height,
    };
    faceapi.matchDimensions(canvas, displaySize);
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      console.log(detections);
      if (JSON.stringify(detections.length) > 0) {
        $(".imgData").attr("data-id", 1);
      } else {
        $(".imgData").attr("data-id", 0);
      }
      const resizeDetections = faceapi.resizeResults(detections, displaySize);
    }, 3000);
  });
}, 3000);
