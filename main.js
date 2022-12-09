//https://teachablemachine.withgoogle.com/models/durZPxkyL/model.json
Webcam.attach('#camera');

camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/durZPxkyL/model.json", modelLoaded);

function snapShot() {


    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });

    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);

}

function modelLoaded() {
    console.log("modelLoaded");
}


function gotResult(error,results) {
    if (error) {
        console.error(error);

    }
    else {
        console.log(results);
        gender = results[0].label;
        if (gender == "boy") {
            document.getElementById("result").innerHTML = '<img src="https://previews.123rf.com/images/valiza/valiza1306/valiza130600031/20112696-portrait-of-boy.jpg"/>';
        }
        else {
            document.getElementById("result").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TjS6OBjTiU87CQmHeg-cp2Bj5CkvArMR20RiAD0VrYwFyVtRw-NrvE3YxGDJ_lEungw&usqp=CAU"/>';

        }
    }
}

