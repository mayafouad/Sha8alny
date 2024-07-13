// function requiredFieldError(input, errorDiv, errorMsg){
//     input.parentNode.classList.add('required-input');
//     errorDiv.innerHTML = errorMsg;
//     errorDiv.style.color = "rgb(155, 13, 13)";
//     console.log(input.parentNode);
// }
// function removeRequiredFieldError(input, errorDiv){
//     input.parentNode.classList.remove('required-input');
//     errorDiv.innerHTML = "";
// }
// function goto(){
//     if(document.getElementById('r1').checked){
//         document.getElementById("com").style.display="block";
//     }
//     else if(document.getElementById('r2').checked){
//         document.getElementById("com").style.display="none";
//     }
//     else{
//         alert("you must select");
//     }
// }
// function checkMail(mail){
//     const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
//     const isValid = emailPattern.test(mail);
//     if(!isValid){
//         alert('Invalid email format.');
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// function gotopage(){
//     if((document.getElementById('input3').value==document.getElementById('input4').value)){
//         if(document.getElementById('r1').checked && document.getElementById('input1').value != "" && document.getElementById('input2').value != "" && document.getElementById('input3').value != "" && document.getElementById('input4').value != "" && document.getElementById('input5').value != "" && document.getElementById('input6').value != "" && document.getElementById('input7').value != "" &&(document.getElementById('r12').checked || document.getElementById('r22').checked) && checkMail(document.getElementById('input5').value)){
//             // document.getElementById("anchor").href="../HTML/login.html";
//         }
//         else if (document.getElementById('r2').checked && document.getElementById('input1').value != ""&& document.getElementById('input2').value != "" && document.getElementById('input3').value != "" && document.getElementById('input4').value != "" && document.getElementById('input5').value != "" && document.getElementById('input6').value != ""&&(document.getElementById('r12').checked || document.getElementById('r22').checked)&& checkMail(document.getElementById('input5').value)){
//             // document.getElementById("anchor").href="../HTML/login.html";
//         }
//         else{
//         //alert("you must finish data filling");
//             if(document.getElementById('input1').value == ""){
//                 let input1 = document.getElementById("input1");
//                 let i1 = document.getElementById("i1");
//                 requiredFieldError(input1, i1 , "you must fill this field");   
//             }
//             if(document.getElementById('input2').value == ""){
//                 let input2 = document.getElementById("input2");
//                 let i2 = document.getElementById("i2");
//                 requiredFieldError(input2, i2 , "you must fill this field");        
//             }
//             if(document.getElementById('input3').value == ""){
//                 let input3 = document.getElementById("input3");
//                 let i3 = document.getElementById("i3");
//                 requiredFieldError(input3, i3 , "you must fill this field");
                
//             }
//             if(document.getElementById('input4').value == ""){
//                 let input4 = document.getElementById("input4");
//                 let i4 = document.getElementById("i4");
//                 requiredFieldError(input4, i4 , "you must fill this field");
                
//             }
//             if(document.getElementById('input5').value == ""){
//                 let input5 = document.getElementById("input5");
//                 let i5 = document.getElementById("i5");
//                 requiredFieldError(input5, i5 , "you must fill this field");
                
//             }
//             if(document.getElementById('input6').value == ""){
//                 let input6 = document.getElementById("input6");
//                 let i7 = document.getElementById("i7");
//                 requiredFieldError(input6, i7 , "you must fill this field");    
//             }
//             if(document.getElementById('r1').checked){
//                 if(document.getElementById('input7').value == ""){
//                     let input7 = document.getElementById("input7");
//                     let i9 = document.getElementById("i9");
//                     requiredFieldError(input7, i9 , "you must fill this field");
                
//                 }
//             }
//         }       
//     }
//     else{
//         alert("password and confirm password must be same");
//     }
//     if(!(document.getElementById('r22').checked) && !(document.getElementById('r12').checked)){
//             alert("choose your gender");
//         }
//     if(!(document.getElementById('r1').checked) && !(document.getElementById('r2').checked)){
//         alert("choose your registeration");
//     }
//     if(document.getElementById('input5').value != ""){
//         const email = document.getElementById('input5').value;
//         if(!checkMail(email)){
//             let input5 = document.getElementById("input5");
//             let i5 = document.getElementById("i5");
//             requiredFieldError(input5, i5 , "Invalid email format.");
//         }
//     }
// }

// input1.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input1'),document.getElementById('i1'))});
// input2.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input2'),document.getElementById('i2'))});
// input3.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input3'),document.getElementById('i3'))});
// input4.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input4'),document.getElementById('i4'))});
// input5.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input5'),document.getElementById('i5'))});
// input6.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input6'),document.getElementById('i7'))});
// r12.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r12'),document.getElementById('i6'))});
// r22.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r22'),document.getElementById('i6'))});
// r1.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r1'),document.getElementById('i8'))});
// r2.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r2'),document.getElementById('i8'))});
// input7.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input7'),document.getElementById('i9'))});

function requiredFieldError(input, errorDiv, errorMsg){
    input.parentNode.classList.add('required-input');
    errorDiv.innerHTML = errorMsg;
    errorDiv.style.color = "rgb(155, 13, 13)";
    console.log(input.parentNode);
}
function removeRequiredFieldError(input, errorDiv){
    input.parentNode.classList.remove('required-input');
    errorDiv.innerHTML = "";
}
function goto(){
    if(document.getElementById('r1').checked){
        document.getElementById("com").style.display="block";
    }
    else if(document.getElementById('r2').checked){
        document.getElementById("com").style.display="none";
    }
    else{
        alert("you must select");
    }
}
function checkMail(mail){
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isValid = emailPattern.test(mail);
    if(!isValid){
        alert('Invalid email format.');
        return false;
    }
    else{
        return true;
    }
}

function gotopage(){
    if((document.getElementById('input3').value==document.getElementById('input4').value)){
        if(document.getElementById('r1').checked && document.getElementById('input1').value != "" && document.getElementById('input2').value != "" && document.getElementById('input3').value != "" && document.getElementById('input4').value != "" && document.getElementById('input5').value != "" && document.getElementById('input6').value != "" && document.getElementById('input7').value != "" &&(document.getElementById('r12').checked || document.getElementById('r22').checked) && checkMail(document.getElementById('input5').value)){
            document.getElementById("anchor").href="../HTML/login.html";
        }
        else if (document.getElementById('r2').checked && document.getElementById('input1').value != ""&& document.getElementById('input2').value != "" && document.getElementById('input3').value != "" && document.getElementById('input4').value != "" && document.getElementById('input5').value != "" && document.getElementById('input6').value != ""&&(document.getElementById('r12').checked || document.getElementById('r22').checked)&& checkMail(document.getElementById('input5').value)){
            document.getElementById("anchor").href="../HTML/login.html";
        }
        else{
        //alert("you must finish data filling");
            if(document.getElementById('input1').value == ""){
                let input1 = document.getElementById("input1");
                let i1 = document.getElementById("i1");
                requiredFieldError(input1, i1 , "you must fill this field");   
            }
            if(document.getElementById('input2').value == ""){
                let input2 = document.getElementById("input2");
                let i2 = document.getElementById("i2");
                requiredFieldError(input2, i2 , "you must fill this field");        
            }
            if(document.getElementById('input3').value == ""){
                let input3 = document.getElementById("input3");
                let i3 = document.getElementById("i3");
                requiredFieldError(input3, i3 , "you must fill this field");
                
            }
            if(document.getElementById('input4').value == ""){
                let input4 = document.getElementById("input4");
                let i4 = document.getElementById("i4");
                requiredFieldError(input4, i4 , "you must fill this field");
                
            }
            if(document.getElementById('input5').value == ""){
                let input5 = document.getElementById("input5");
                let i5 = document.getElementById("i5");
                requiredFieldError(input5, i5 , "you must fill this field");
                
            }
            if(document.getElementById('input6').value == ""){
                let input6 = document.getElementById("input6");
                let i7 = document.getElementById("i7");
                requiredFieldError(input6, i7 , "you must fill this field");    
            }
            if(document.getElementById('r1').checked){
                if(document.getElementById('input7').value == ""){
                    let input7 = document.getElementById("input7");
                    let i9 = document.getElementById("i9");
                    requiredFieldError(input7, i9 , "you must fill this field");
                
                }
            }
        }       
    }
    else{
        alert("password and confirm password must be same");
    }
    if(!(document.getElementById('r22').checked) && !(document.getElementById('r12').checked)){
            alert("choose your gender");
        }
    if(!(document.getElementById('r1').checked) && !(document.getElementById('r2').checked)){
        alert("choose your registeration");
    }
    if(document.getElementById('input5').value != ""){
        const email = document.getElementById('input5').value;
        if(!checkMail(email)){
            let input5 = document.getElementById("input5");
            let i5 = document.getElementById("i5");
            requiredFieldError(input5, i5 , "Invalid email format.");
        }
    }
}

input1.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input1'),document.getElementById('i1'))});
input2.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input2'),document.getElementById('i2'))});
input3.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input3'),document.getElementById('i3'))});
input4.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input4'),document.getElementById('i4'))});
input5.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input5'),document.getElementById('i5'))});
input6.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input6'),document.getElementById('i7'))});
r12.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r12'),document.getElementById('i6'))});
r22.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r22'),document.getElementById('i6'))});
r1.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r1'),document.getElementById('i8'))});
r2.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('r2'),document.getElementById('i8'))});
input7.addEventListener('keyup', function(){ removeRequiredFieldError(document.getElementById('input7'),document.getElementById('i9'))});