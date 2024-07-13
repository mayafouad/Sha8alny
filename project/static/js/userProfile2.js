/*
    GENERAL FUNCTIONS
*/

function showForm(formId){
    let experienceForm = document.getElementById(formId);
    experienceForm.style.display = 'block';
    let container = document.getElementsByClassName("container")[0];
    container.classList.add('blur');   
}

function exitForm(formId){
    let experienceForm = document.getElementById(formId);
    experienceForm.style.display = 'none';
    let container = document.getElementsByClassName("container")[0];
    container.classList.remove('blur');
}

function hideForm(formId){
    let experienceForm = document.getElementById(formId);
    experienceForm.style.display = 'none';
    let container = document.getElementsByClassName("container")[0];
    container.classList.remove('blur');

}

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


/*
    ADD NEW EDUCATION
*/ 
let educationSchool = document.getElementById("school");
let degree = document.getElementById("degree");
let startYear = document.getElementById("start-year");
let endYear = document.getElementById("end-year");

let missingSchool = document.getElementsByClassName("required-education-school")[0];
let missingDegree = document.getElementsByClassName('required-education-degree')[0];
let missingStartYear = document.getElementsByClassName('required-education-start-year')[0];
let missingEndYear = document.getElementsByClassName('required-education-end-year')[0];
let submitEducation = document.getElementById("education-form-submit");

let exitEducationForm = document.getElementById("exit-education-form");

exitEducationForm.addEventListener('click', function(){
    removeRequiredFieldError(school, missingSchool);
    removeRequiredFieldError(degree, missingDegree);
    removeRequiredFieldError(startYear, missingStartYear);
    removeRequiredFieldError(endYear, missingEndYear);
});

educationSchool.addEventListener('keyup', function (){
    removeRequiredFieldError(school, missingSchool);
});

degree.addEventListener('keyup', function (){
    removeRequiredFieldError(degree, missingDegree);
});

startYear.addEventListener('keyup', function(){
    removeRequiredFieldError(startYear, missingStartYear); 
});

endYear.addEventListener('keyup', function(){
    removeRequiredFieldError(endYear, missingEndYear);
});

let educationForm = document.getElementById("educationForm");

educationForm.addEventListener('submit', function(event){
     let stYear = Number(startYear.value);
     let eYear = Number(endYear.value);
     let sY = true, eY = true;
     event.preventDefault();

    if(educationSchool.value.trim() === ""){
        requiredFieldError(educationSchool, missingSchool, "School is required");
        event.preventDefault();
    }
    if(degree.value.trim() === ""){
        requiredFieldError(degree, missingDegree, "Degree is Required");
        event.preventDefault();
    }

    if(startYear.value.trim() === ""){
        requiredFieldError(startYear, missingStartYear, "Start Year is required");
        event.preventDefault();
    }
    else{
        if(isNaN(stYear) || (stYear < 1900 || stYear > 2060)) {
            requiredFieldError(startYear, missingStartYear, "Must Enter a year in range 1900 - 2060");
            event.preventDefault();
            sY = false;
        }
    }
    if(endYear.value.trim() === ""){
        requiredFieldError(endYear, missingEndYear, "End Year is Required");
        event.preventDefault();
    }
    else{
        if(isNaN(eYear) || (eYear < 1900 || stYear  > 2060)){
            requiredFieldError(endYear, missingEndYear, "Must Enter a year in range 1900 - 2060");
            event.preventDefault();
            eY = false;
        }

    }

    if(isNaN(stYear) == false && isNaN(eYear) == false && eYear < stYear){
        requiredFieldError(endYear, missingEndYear, "Start Year Must be smaller than end Year");
        event.preventDefault();
        eY = false;
    }
    
    if(sY !== false && eY !== false && educationSchool.value !== "" && degree.value !== "" && startYear.value !== "" && endYear.value !== ""){
        hideForm("add-education-form");
        educationForm.submit();
        educationSchool.value = "";
        degree.value ="";
        startYear.value ="";
        endYear.value="";    
         
    }
});



/*
    ADD NEW EXPERIENCE

*/

let jobTitle = document.getElementById("job-title");
let company = document.getElementById("company");
let startDate = document.getElementById("start-date");
let endDate = document.getElementById("end-date");

let missingJobTitle = document.getElementsByClassName("required-job-title")[0];
let missingCompany = document.getElementsByClassName("required-company-name")[0];
let missingStartDate = document.getElementsByClassName("required-start-date")[0];
let missingEndDate = document.getElementsByClassName("required-end-date")[0];

let exitExperienceForm = document.getElementById('exit-experience-form');

exitExperienceForm.addEventListener('click', function(){
    removeRequiredFieldError(jobTitle, missingJobTitle);
    removeRequiredFieldError(company, missingCompany);
    removeRequiredFieldError(startDate, missingStartDate);
    removeRequiredFieldError(endDate, missingEndDate);
});

let submitExperienceForm = document.getElementById("experience-from-submit");

jobTitle.addEventListener('keyup', function(){
    removeRequiredFieldError(jobTitle, missingJobTitle);
});

company.addEventListener('keyup', function(){
    removeRequiredFieldError(company, missingCompany);
});

startDate.addEventListener('change', function() {
    removeRequiredFieldError(startDate, missingStartDate);
});

endDate.addEventListener('change', function(){
    removeRequiredFieldError(endDate, missingEndDate);
});



    
let form = document.getElementById("expForm");
    
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(jobTitle.value.trim() === ""){
        requiredFieldError(jobTitle, missingJobTitle, "Job Title required");
        event.preventDefault()
    }
    if(company.value.trim() === ""){
        requiredFieldError(company, missingCompany, "Company is required");
        event.preventDefault()
    }
    if(startDate.value.trim() === ""){
        requiredFieldError(startDate, missingStartDate, "Start Date is required");
        event.preventDefault()
    }
    if(endDate.value.trim() === ""){
        requiredFieldError(endDate, missingEndDate, "End Date is required");
        event.preventDefault();
    }
    if(jobTitle.value.trim() !== "" && company.value.trim() !== "" && startDate.value.trim() !== "" && endDate.value.trim() !== "" ){
   
        hideForm('add-work-form');
        form.submit();
        jobTitle.value = "";
        company.value = "";
        startDate.value = "";
        endDate.value = "";     
    }

});
    




/*
    ADD NEW SKILL
*/

let skill = document.getElementById("skill-text");

let missingSkill = document.getElementsByClassName("required-skill")[0];

let submitSkill = document.getElementById("skill-form-submit");

let exitSkill = document.getElementById('exit-skill-form');

skill.addEventListener('keyup', function (){
    removeRequiredFieldError(skill, missingSkill);
});

exitSkill.addEventListener('click', function(){
    removeRequiredFieldError(skill, missingSkill);
});


let skillForm = document.getElementById("skillForm");
skillForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(skill.value.trim() === ""){
        requiredFieldError(skill, missingSkill, "Skill is required");
        event.preventDefault();
    }
    else{
        hideForm('add-soft-skill-form');
        skillForm.submit();
        skill.value = "";
       

    }

});



/*
    UPLOAD NEW RESUME

*/

let resumeInput = document.getElementById('uploaded-resume');
let resumeDiv = document.getElementById('resume');
let uploadResumeButton = document.getElementById('add-resume-button');
resumeInput.addEventListener('change', function() {
    hideForm('add-resume-form');
    // let img = resumeInput.files[0];
    // addNewResumeDiv(img);
    // storeNewResume(img);
    let res = document.getElementById("resumeForm");
    res.submit();
});


/*
   USER IMAGE UPLOAD

*/



/*
    Edit Accounts Button

*/

let editSocialAccounts = document.getElementById('sumbit-social-accounts');

let userFb = document.getElementById("user-facebook");
let userLI = document.getElementById("user-linkden");
let userTw = document.getElementById('user-twitter');

editSocialAccounts.addEventListener('click', function(){
    hideForm('social-account-form');

    let faceBookUrl = document.getElementById('facebook-url');
    let linkidenUrl = document.getElementById('linkiden-url');
    let twitterUrl = document.getElementById('twitter-url');

    if(faceBookUrl.value.trim() !== ""){
        userFb.innerHTML = faceBookUrl.value;
    }

    if(linkidenUrl.value.trim() !== ""){
        userLI.innerHTML = linkidenUrl.value;
    }

    if(twitterUrl.value.trim() !== ""){
        userTw.innerHTML = twitterUrl.value;
    }
});

/*
   
     EDIT GENERAL INFO

*/ 


let userName = document.getElementById('general-info-name');
let gmail = document.getElementById('general-info-email');
let phoneNo = document.getElementById('general-info-number');
let cityOfResidence = document.getElementById('general-info-city');
let gender = document.getElementById('general-info-gender');
let currentJobTitle = document.getElementById('general-info-job-title');
let requiredGmail = document.getElementById('required-gmail');


let exitGeneralInfoForm = document.getElementById("exit-general-info-button");

exitGeneralInfoForm.addEventListener('click', function(){
    removeRequiredFieldError(gmail, requiredGmail);
});
let editGeneralInfo = document.getElementById('edit-general-info-button');
let email = document.getElementById('gmail');
email.addEventListener('keyup', function(){
    removeRequiredFieldError(email, requiredGmail);
})

editGeneralInfo.addEventListener('click', function () {
    
    let name = document.getElementById('userName');
    let pNo = document.getElementById('phoneNumber');
    let city = document.getElementById('cityOfResidence');
    let gen = document.getElementById('gender');
    let jTitle = document.getElementById('currentJobTitle');
    let email = document.getElementById('gmail');

    if(name.value.trim()  !== ""){
        userName.innerHTML = name.value;
    }
    if(pNo.value.trim() !== ""){
        phoneNo.innerHTML = pNo.value;
    }
    if(city.value.trim() !== ""){
        cityOfResidence.innerHTML = city.value;
    }
    if(gen.value.trim() !== ""){
        gender.innerHTML = gen.value;
    }
    if(jTitle.value.trim() !== ""){
        currentJobTitle.innerHTML = jTitle.value;
    }

    if(email.value.trim() !== ""){
        if(isValidEmail(email.value.trim())){
            hideForm('general-info-form');
            gmail.innerHTML = email.value;
        }
        else{
            requiredFieldError(email, requiredGmail,"write email in correct format");
        }
    }
});

function isValidEmail(email){
    
    const index = email.indexOf('@');
    if(index == -1){
       return false;
    }
    else {
        if(email.substr(index) == "@gmail.com"){
            return true;
        }
        else{
            return false;
        }
    }
}


/*
    EDIT ABOUT USER

*/

let updateAboutButton = document.getElementById('update-about-button');

let aboutForm = document.getElementById("aboutForm");
aboutForm.addEventListener('submit', function(event){
    let aboutUserText = document.getElementById('about-user-text');
    let aboutParagraph = document.getElementById('about-paragraph');
    hideForm('about-form');
    event.preventDefault();

    if(aboutUserText.value.trim() !==""){
        aboutForm.submit();
        aboutParagraph.innerHTML = aboutUserText.value;
        aboutUserText.value = "";
    }
});




