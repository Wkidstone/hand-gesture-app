 var prediction_1="";
 var prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png'
});
cam=document.getElementById("cam");
Webcam.attach("#cam");
function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="ci" src="'+data_uri+'"/>';

    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/893L38nK3/model.json', modelLoaded);
function modelLoaded(){
    console.log("model is loaded");

}
function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is" + prediction_1;
 
    var utterThis =new SpeechSynthesisUtterance (speak1+speak2);
    synth.speak(utterThis);
}function check(){
    img=document.getElementById("ci");
    classifier.classify(img,gotResult)
}
function gotResult(error,results){

    if (error){
   console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("r_em_n").innerHTML= results[0].label;
        p1 = results[0].label;
      
        speak();
        if(results[0].label == "amazing"){
            document.getElementById("emoji1").innerHTML = "👌";
           document.getElementById("movq").innerHTML = "Good, better, best. Never let it rest. 'Til your good is better and your better is best";
        }
        if(results[0].label == "best"){
            document.getElementById("emoji1").innerHTML = "👍";
            document.getElementById("movq").innerHTML= "Don't be sad and don't give up on your dreams. Dreams will come true one day. ";
        }
        if(results[0].label== "victory"){
            document.getElementById("emoji1").innerHTML = "✌";
            document.getElementById("movq").innerHTML ="Don't be angry as life should be lived happily";
        

        }
    }
}
