Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:100
    });
    Webcam.attach('#web')
    
    function take_snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("view").innerHTML='<img id="image" src="'+data_uri+'">';
    });
    }
    console.log('ml5.version',ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dBI-RZ6aF/model.json",model_loaded);
    function model_loaded(){
    console.log("model loaded!!!!")
    }

function identify(){
    img = document.getElementById('image')
    classifier.classify(img,got_result)
    }
    function got_result(error,result){
    if(error){
        console.log(error)
    }
    else{
    console.log(result)
    document.getElementById('thing').innerHTML=result[0].label
    document.getElementById('how').innerHTML=result[0].confidence
    }
    }