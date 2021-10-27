Webcam.set({

    widht: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

function modelLoaded() {
    console.log('model loded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}

function check() {
    img = document.getElementById('captured_image');
}

function gotResult(error, result) {
    if (error) { console.error(error) };
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if (result[0].label == "happy") {
            document.getElementById("updated_emoji").innerHTML = "&#128522;";
        }
        if (result[0].label == "SAD") {
            document.getElementById("updated_emoji").innerHTML = "&#128532;";

        }
        if (result[0].label == "ANGERY") {
            document.getElementById("updated_emoji").innerHTML = "&#128548;";
        }
        if (result[0].label == "hAPPY") {
            document.getElementById("updated_emoji").innerHTML = "&#128532;";
        }
        if (result[0].label == "SADSSSSSSS") {
            document.getElementById("updated_emoji").innerHTML = "&#128548;";
        }