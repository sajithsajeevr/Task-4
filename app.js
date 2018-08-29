
//buttons
document.querySelector('#multiplyBttn').addEventListener('click',multiply);
document.querySelector('#divideBttn').addEventListener('click',divide);


function multiply(e){

    let c= document.querySelector('#fn').value;
    let d= document.querySelector('#sn').value;
    if(c==''||d==''){ 
        document.querySelector('.message').innerHTML='<em>Check the Input<em>'; 
        e.preventDefault();
        }else{
        let multi=c*d;
        document.querySelector('.message').innerHTML=`<h4>${multi}</h4>`;
        }
    //document.querySelector('#response').innerHTML=`${multi}`;
    e.preventDefault();
    
}

function divide(e){
    
    var c= document.querySelector('#fn').value;
    var d= document.querySelector('#sn').value;
    if(c==''||d==''){ 
    document.querySelector('.message').textContentinnerHTML='<em>Check the Input<em>'; 
    e.preventDefault();
    }else{
    let div=c/d;
    document.querySelector('.message').innerHTML=`<h4>${div}</h4>`;
    }
    e.preventDefault();
}
