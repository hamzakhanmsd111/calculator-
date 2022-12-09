let disply=document.getElementById('disply');

let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map( button  => {
    button .addEventListener('click' ,(e) => {
        switch(e.target.innerText){
            case'C':
            disply.innerText="";
            break;
            case'E':
            if (disply.innerText) {
                disply.innerText=disply.innerText.slice(0-1);
                
            }
            break;
            case'=':
            try{
                disply.innerText=eval(disply.innerText)
            }catch{
                disply.innerText="Error"
            }
            break;
            
            default:
                disply.innerText+=e.target.innerText;
        }
    });
});