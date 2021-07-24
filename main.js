var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textarea").innerHTML=Content;
    if (Content=="take my selfie"){
        console.log("taking selfie in 5 seconds........")
        speak();
    }
}
function speak(){
var synth=window.speechSynthesis;
speakdata="taking your selfie in 5 seconds";
var utterThis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
TakeSnapshot();
Save();
},5000);
}
Webcam.set({
    width:360,
    height:250,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function TakeSnapshot(){
    Webcam.snap(function(datauri)
    {
        document.getElementById("result").innerHTML="<img id='selfieimg' src='"+datauri+"'>";
    });
}
function Save(){
    link=document.getElementById("link");
    image=document.getElementById("selfieimg").src;
    link.href=image;
    link.click();
}