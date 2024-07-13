let jobs;
let userAppliedJobs = new Array();
if (!localStorage.getItem('storedAppliedJobs')) {
    localStorage.setItem("storedAppliedJobs", JSON.stringify(userAppliedJobs));
}

function addNewJob(placeToInsert, jobId, company, jtitle, location, category, yOfExperience, jType, jDescription, jQualification, salary, jStatus){
    let newJob = `
<div class="second" id="a">
    <div class="titlewithimage">
          <div class="job title">
              <h2>${jtitle}</h2>
           </div>
    </div>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p> <strong>Year Of experience:</strong> ${yOfExperience}</p>
    <p> <strong>Category:</strong> ${category}</p>
    <h3> Job Description </h3>
    <p> ${jDescription}</p>
    <h3>Qualifications</h3>s
    <p> ${jQualification} </p>
    

    <h3>Status:</h3>
    <p>${jStatus}</p>
    <h3>Salary:</h3>
    <p>${salary}</p>
    <h3>Type of the job:</h3>
    <p>${jType}</p>

    <h3>How to Apply</h3>
    <p>To apply for this position, please send your resume and cover letter to Sumerge.com.</p>
    <p><em>Sumerge is an equal opportunity employer.</em></p>
    <form class="flex-btn">
        <input type="submit" value="Easy apply" name="apply" class="btn" id = ${jobId}>
    </form>

</div>
    `;

    let jobsDiv = document.getElementById(placeToInsert);
    jobsDiv.innerHTML += newJob;
}


document.addEventListener('DOMContentLoaded', function() {

    try{
        jobs = JSON.parse(localStorage.allJobs);
        for(let i = 0;i < jobs.length ;i++){
            addNewJob("all-jobs-divs", jobs[i].jobId, jobs[i].jobCompany,jobs[i].jobTitle,
                jobs[i].jobLocation, jobs[i].jobCategory, jobs[i].jobExperience, jobs[i].jobType, 
                jobs[i].jobDescription, jobs[i].jobQualification, jobs[i].jobSalary, jobs[i].jobStatus);

        }
        for(let i = 0; i < jobs.length; i++){
            let jobClicked = document.getElementById(jobs[i].jobId);
            console.log(jobClicked);
            jobClicked.addEventListener('click', function(){
              
                userAppliedJobs = JSON.parse(localStorage.storedAppliedJobs);
                let date = new Date();
                jobs[i].dateApplied = date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
                userAppliedJobs.push(jobs[i]);
                localStorage.storedAppliedJobs = JSON.stringify(userAppliedJobs);
                window.location.href = '/userAppliedJobs.html"';
            })
        }

        if(localStorage.getItem("currentlyLogged") == "1"){
            for(let i = 0; i <jobs.length;i++){
                let clickButton = document.getElementById(jobs[i].jobId);
                clickButton.style.display = "none";
            }
        }

    }
    catch(e){

    }
});

let searchmode = 'title';
function getsearchmode(id) {
    let search = document.getElementById('search');
    if (id == 'searchtitle') {
        searchmode = 'title';
        search.placeholder = 'Search by Job title';
    }
    else {
        searchmode = 'salary';
        search.placeholder = 'Search by Salary';

    }
    search.focus()


}


function searchData(value) {
    let results = [];
    
    if (searchmode === 'title') {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].jobTitle.toLowerCase().includes(value.toLowerCase())) {
                results.push(jobs[i]);
            }
        }
    } else if (searchmode === 'salary') {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].jobSalary.includes(value)) {
                results.push(jobs[i]);
            }
        }
    }

    displayResults(results);
}

function displayResults(results) {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach(job => {

        addNewJob("resultsContainer",job.jobId, job.jobCompany,job.jobTitle,
        job.jobLocation, job.jobCategory, job.jobExperience, job.jobType, 
        job.jobDescription, job.jobQualification, job.jobSalary, job.jobStatus);
    });
    console.log(results);
}


