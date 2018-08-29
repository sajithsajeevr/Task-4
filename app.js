
//buttons
document.querySelector('#multiplyBttn').addEventListener('click',multiply);
document.querySelector('#divideBttn').addEventListener('click',divide);


function multiply(e){
    console.log('clicked');
    let c= document.querySelector('#fn').value;
    let d= document.querySelector('#sn').value;
    if(c==''||d==''){ 
        document.querySelector('#response').textContent='Check the Input'; 
        e.preventDefault();
        }else{
        let multi=c*d;
        document.querySelector('#response').textContent=`${multi}`;
        }
    //document.querySelector('#response').innerHTML=`${multi}`;
    e.preventDefault();
    
}

function divide(e){
    console.log('divide clicked');
    var c= document.querySelector('#fn').value;
    var d= document.querySelector('#sn').value;
    if(c==''||d==''){ 
    document.querySelector('#response').textContent='Check the Input'; 
    e.preventDefault();
    }else{
    let div=c/d;
    document.querySelector('#response').textContent=`${div}`;
    }
    e.preventDefault();
}
