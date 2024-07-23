
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
    if(/[0-9]/.test(inp.value)){
  
        numberLength.innerHTML=`<i class="fa-solid fa-circle" style="background-color: lightgreen; margin-right: 3rem;"></i>
            <span>At least 1 number (0...9)</span>`
            numberLength.style.backgroundColor='lightgreen'
            numberLength.style.borderRadius='5px'

    }
    else{
        numberLength.style.backgroundColor='transparent'

    }

    let lowerCaseLength=document.getElementById('lower-Length')
    if(/[a-z]/.test(inp.value)){
           lowerCaseLength.style.backgroundColor='lightgreen'
            lowerCaseLength.style.borderRadius='5px'
    }
    else{
        lowerCaseLength.style.backgroundColor='transparent'

    }
    let upperCaseLength=document.getElementById('upper-Length')
    if(/[A-Z]/.test(inp.value)){
        upperCaseLength.style.backgroundColor='lightgreen'
        upperCaseLength.style.borderRadius='5px'
    }
    else{
        upperCaseLength.style.backgroundColor='transparent'

    }
    let specialCharacterLength=document.getElementById('special-Length')
    if(/[!@#$%^&*(),.?"]/.test(inp.value)){
        specialCharacterLength.style.backgroundColor='lightgreen'
        specialCharacterLength.style.borderRadius='5px'
    }
    else{
        specialCharacterLength.style.backgroundColor='transparent'

    }
 




   
})
