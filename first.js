let counterelement=document.getElementById("countervalue");
console.log(counterelement);


function Onincrement(){
let previousvalue=counterelement.textContent;
let updatevalue=parseInt(previousvalue)+1;
counterelement.textContent=updatevalue;
console.log(updatevalue);

if ( updatevalue >0)
 {
    counterelement.style.color="yellow";
 }
 else if(updatevalue <0 ){
    counterelement.style.color="red";

 }
else{
    counterelement.style.color="black";
}
 

}
function OnDecrement(){
    let previousvalue=counterelement.textContent;
let updatevalue=parseInt(previousvalue)-1;
counterelement.textContent=updatevalue;
console.log(updatevalue);
}
function onReset() {    
    
    let updatevalue = 0;
    counterelement.textContent = updatevalue;


}


    

