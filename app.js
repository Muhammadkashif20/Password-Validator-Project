
let PassInp=document.getElementById('Pass-Inp').addEventListener('keyup',()=>{
    let inp=document.getElementById('Pass-Inp')
    let characLength=document.getElementById('cha-length')
    if(inp.value.length>=8){

     characLength.innerHTML=`<i class="fa-solid fa-circle" style="color: lightgreen; "></i>
     <span>At least 8 characters length</span>`
        characLength.style.backgroundColor='lightgreen'
        characLength.style.borderRadius='5px'
    }
    else{
        characLength.style.background='transparent'

    }

    let numberLength=document.getElementById('num-length')
    if(inp.value>0){
        // numberLength.innerHTML=`<i class="fa-solid fa-circle" style="background-color: lightgreen;"></i>`
            numberLength.style.backgroundColor='lightgreen'
            numberLength.style.borderRadius='5px'

    }
    else{
        numberLength.style.backgroundColor='transparent'

    }

    let lowerCaseLength=document.getElementById('lower-Length')
    if(inp.value.toLowerCase().length>0){
           lowerCaseLength.style.backgroundColor='lightgreen'
            lowerCaseLength.style.borderRadius='5px'
    }
    else{
        lowerCaseLength.style.backgroundColor='transparent'

    }
    // let upperCaseLength=document.getElementById('upper-Length')
    // if(inp.value.toUpperCase().length>0){
    //     upperCaseLength.style.backgroundColor='lightgreen'
    //     upperCaseLength.style.borderRadius='5px'
    // }
    // else{
    //     upperCaseLength.style.backgroundColor='transparent'

    // }




   
})
