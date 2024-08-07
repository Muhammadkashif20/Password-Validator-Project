
let PassInp=document.getElementById('Pass-Inp').addEventListener('keyup',()=>{
    let inp=document.getElementById('Pass-Inp')
    let characLength=document.getElementById('cha-length')
    if(inp.value.length>=8){
        characLength.innerHTML=`<i class="fa-solid fa-circle" style="color: #00CC66;  margin-left: -1rem;"></i>
     <span>At least 8 characters length</span>`
        characLength.style.backgroundColor='#D7F5E7'
        characLength.style.borderRadius='5px'
    }
    else{
        characLength.style.background='transparent'
  characLength.innerHTML=`<i class="fa-solid fa-circle" ></i>
     <span>At least 8 characters length</span>`
    }

    let numberLength=document.getElementById('num-length')
    if(/[0-9]/.test(inp.value)){

        numberLength.innerHTML=`<i class="fa-solid fa-circle" style="color: #00CC66;  margin-left: -1rem;"></i>
            <span>At least 1 number (0...9)</span>`
            numberLength.style.backgroundColor='#D7F5E7'
            numberLength.style.borderRadius='5px'

    }
    else{
        numberLength.style.backgroundColor='transparent'
            numberLength.innerHTML=`<i class="fa-solid fa-circle" ></i>
            <span>At least 1 number (0...9)</span>`
    }

    let lowerCaseLength=document.getElementById('lower-Length')
    if(/[a-z]/.test(inp.value)){
         lowerCaseLength.innerHTML=`<i class="fa-solid fa-circle" style="color: #00CC66;  margin-left: -1rem;"></i>
            <span>At least 1 lowercase letter (a...z)</span>`
           lowerCaseLength.style.backgroundColor='#D7F5E7'
            lowerCaseLength.style.borderRadius='5px'
    }
    else{
        lowerCaseLength.style.backgroundColor='transparent'
     lowerCaseLength.innerHTML=`<i class="fa-solid fa-circle" ></i>
            <span>At least 1 lowercase letter (a...z)</span>`
    }
    let upperCaseLength=document.getElementById('upper-Length')
    if(/[A-Z]/.test(inp.value)){
        upperCaseLength.innerHTML=`<i class="fa-solid fa-circle" style="color: #00CC66;  margin-left: -1rem;"></i>
            <span>At least 1 uppercase letter (A...Z)</span>`
        upperCaseLength.style.backgroundColor='#D7F5E7'
        upperCaseLength.style.borderRadius='5px'
    }
    else{
        upperCaseLength.style.backgroundColor='transparent'
upperCaseLength.innerHTML=`<i class="fa-solid fa-circle"></i>
            <span>At least 1 uppercase letter (A...Z)</span>`
    }
    let specialCharacterLength=document.getElementById('special-Length')
    if(/[!@#$%^&*(),.?"]/.test(inp.value)){
        specialCharacterLength.innerHTML=`<i class="fa-solid fa-circle" style="color: #00CC66;  margin-left: -1rem;"></i>
            <span>At least 1 special symbol (!...$)</span>`
        specialCharacterLength.style.backgroundColor='#D7F5E7'
        specialCharacterLength.style.borderRadius='5px'
    }
    else{
        specialCharacterLength.style.backgroundColor='transparent'
        specialCharacterLength.innerHTML=`<i class="fa-solid fa-circle"></i>
            <span>At least 1 special symbol (!...$)</span>`
    }    
    let hide = document.getElementById('fa-Eye');   
    let show = document.getElementById('fa-Slash');   
    hide.addEventListener('click', () => {
        if (inp.type === 'password') {
            inp.type = 'text';
            hide.style.display='none'
            show.style.display='block'
        }
    });
    show.addEventListener('click', () => {
        if (inp.type === 'text') {
            inp.type = 'password';
            hide.style.display='block'
            show.style.display='none'
        }
    });

    })
