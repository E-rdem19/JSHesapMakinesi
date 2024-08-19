let button1=document.getElementById("button1");
button1.onclick=function(){
    let bilgi=document.getElementById("text1");
    bilgi.value+="1";
}
let button2=document.getElementById("button2");
button2.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="2";
}
let button3=document.getElementById("button3");
button3.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="3";
}
let button4=document.getElementById("button4");
button4.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="4";
}
let button5=document.getElementById("button5");
button5.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="5";
}
let button6=document.getElementById("button6");
button6.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="6";
}
let button7=document.getElementById("button7");
button7.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="7";
} 
let button8=document.getElementById("button8");
button8.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="8";
}
let button9=document.getElementById("button9");
button9.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="9";
}
let button0=document.getElementById("button0");
button0.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value+="0";
}
let buttonAC=document.getElementById("buttonAC");
buttonAC.onclick=function(){
   let bilgi2=document.getElementById("text1");
   bilgi2.value="";
}
let button11 =document.getElementById("buttonC");
button11.onclick=function(){
   let bilgi2=document.getElementById("text1");
   let currentValue=bilgi2.value;
   bilgi2.value=currentValue.slice(0,-1);
}
let button12=document.getElementById("button/");
button12.onclick=function(){
    let bilgi2=document.getElementById("text1");
    if(bilgi2.value!=""){
        bilgi2.value+="/";
    }else{
        bilgi2.value="";
    }
}
let button13=document.getElementById("button*");
button13.onclick=function(){
    let bilgi2=document.getElementById("text1");
    if(bilgi2.value!=""){
        bilgi2.value+="*";
    }else{
        bilgi2.value="";
    }
}
let button14=document.getElementById("button+");
button14.onclick=function(){
    let bilgi2=document.getElementById("text1");
    if(bilgi2.value!=""){
        bilgi2.value+="+";  
    }else{
        bilgi2.value="";
    }
}
let button15=document.getElementById("button-");
button15.onclick=function(){
    let bilgi2=document.getElementById("text1");
    if(bilgi2.value!=""){
        bilgi2.value+="-";  
    }else{
        bilgi2.value="";
    }
}
let button16=document.getElementById("button=");
button16.onclick=function(){
    let bilgi2=document.getElementById("text1");
    let bilgi3=document.getElementById("text1").value;
    try{
        let result=eval(bilgi3);
        bilgi2.value="";
        bilgi2.value=result;
    } 
    catch(eror){
      bilgi.value="0";
    }
}
let button17=document.getElementById("button,");
button17.onclick=function(){
   let bilgi2=document.getElementById("text1");
   if(bilgi2.value!=""){
    bilgi2.value+=".";
   }
}
let button18=document.getElementById("button%");
button18.onclick=function(){
   let bilgi2=document.getElementById("text1");
   let bilgi3=bilgi2.value/100;
   bilgi2.value=bilgi3;

}
function fitTextToTextbox() {
    var textbox = document.getElementById("text1");
    var fontSize = parseInt(window.getComputedStyle(textbox).fontSize); // Başlangıç font boyutunu al
    var textboxWidth = textbox.clientWidth; // Textbox genişliğini al
    var textboxHeight = textbox.clientHeight; // Textbox yüksekliğini al

    // Font boyutunu başlangıçta 30px olarak ayarla
    textbox.style.fontSize = "30px";

    // Metin kutusu taşarsa, font boyutunu küçült
    while ((textbox.scrollWidth > textboxWidth || textbox.scrollHeight > textboxHeight) && fontSize > 2) {
        fontSize--; // Font boyutunu küçült
        textbox.style.fontSize = fontSize + "px"; // Yeni font boyutunu uygula
    }
}