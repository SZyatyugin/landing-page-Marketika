document.querySelectorAll('.plan-btn').forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
document.querySelectorAll('.plan').forEach((elem)=>
elem.classList.remove('active'))
document.querySelectorAll('.plan-btn').forEach((elem)=>
elem.classList.remove('active'))
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
        
    }
    
    )
});
document.querySelector('.section-header-form').addEventListener('change',getInputValue,);
    
    function getInputValue(event){
        if(!event)event=window.event;
        const patternName=/[A-Za-z ]+ [^0-9]+/gm;
        const patternEmail=/\b[A-Za-z0-9_.]+@[a-z0-9.-]+\.[a-z]{2,4}\b/;
    
        if(event.target.name=='name'){
            if(event.target.value.search(patternName)==-1){
                event.target.value='';
                event.target.placeholder='please try again';
                return false
            }else{
                window.sessionStorage.setItem('name',event.target.value)
            }
        }
        if(event.target.name=='email'){
            if(event.target.value.search(patternEmail)){
                event.target.value='';
                event.target.placeholder='please try again';
                return false;
            }else{
                window.sessionStorage.setItem('email',event.target.value)
            }
        }
        return true
    }

document.querySelector('.section-header-form-submit').addEventListener('click',(event)=>{

    let array=Array.from(document.querySelectorAll('.section-header-form-input')).find((elem)=>elem.value=='');
 if(array){
    event.preventDefault();
    return false
 }
})
