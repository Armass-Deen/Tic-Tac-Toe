const h1=document.getElementById('h1')
let clicked = 1;
function clickeing(id) {
    console.log(id);
    var div = document.getElementById(id);
    if(div.innerHTML== ""){
        console.log(div);
        
        if(clicked%2 == 0){
            div.innerHTML = 'Y' 
        h1.innerHTML="X TURN"
        }
        else{
         div.innerHTML = 'X'
          h1.innerHTML="Y TURN"

        }

       
     clicked++;
    }
    isWin();
}
function isWin (){
const one=document.getElementById("1").innerHTML;
const two=document.getElementById("2").innerHTML;
const three=document.getElementById("3").innerHTML
const four=document.getElementById("4").innerHTML
const five=document.getElementById("5").innerHTMLuu
const six=document.getElementById("6").innerHTML
const seven=document.getElementById("7").innerHTML
const eight=document.getElementById("8").innerHTML
const nine=document.getElementById("9").innerHTML
const win=document.getElementById("win")
const hide=document.getElementById("hide")

if(one!= "" && one==two && two == three){
    win.innerHTML=`WINNER IS  ${one}`
    hide.style.display="block"
} 
else if (three!="" && three==four && four==five) {
   win.innerHTML=`WINNER IS  ${three}`
    hide.style.display="block"
}
else if(seven!="" && seven==eight && eight==nine){
     win.innerHTML=`WINNER IS  ${seven}`
      hide.style.display="block"
}
else if(one!="" && one==four && four==seven){
     win.innerHTML=`WINNER IS  ${one}`
      hide.style.display="block"
}
else if(two!="" && two==five && five==eight){
    win.innerHTML=`WINNER IS  ${two}`
     hide.style.display="block"
}
else if(three!="" && three==six && six==nine){
    win.innerHTML=`WINNER IS  ${three}`
     hide.style.display="block"
}
else if(one!="" && one==five && five==nine){
    win.innerHTML=`WINNER IS  ${one}`
     hide.style.display="block"
}
else if(seven!="" && seven==five && five==three){
    win.innerHTML=`WINNER IS  ${seven}`
     hide.style.display="block"
}
else if (four!=""&& four==five&& five==six){
    win.innerHTML=`WINNER IS  ${four}`
}
else if(one!="" && two!=""&& three!=""&& four!="" && five!="" && six!="" && seven!="" && eight!=""&& nine!=""){
    win.innerHTML="Ohh Itz DREAW !"
     hide.style.display="block"
}
}

function resert()
{
    window.location.reload()
}