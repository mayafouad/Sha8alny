

// let appliedJobs;

// function ApplyJob(placeToInsert, company, Date, title, category, salary) {
//     let AppliedJob = `
//     <div class="appliedjob">
//         <div>
//             <p>Applied Date: ${Date}</p>
//         </div>
//         <hr>
//         <div>
//             <ul>
//                 <li><span>Company: </span>${company}</li>
//                 <li><span>Category: </span>${category}</li>
//                 <li><span>Job Title: </span>${title}</li>
//                 <li><span>Salary Range: </span>${salary}</li>
//             </ul>
//         </div>
//     </div>
//     `;

//     let AppliedjobsDiv = document.getElementById(placeToInsert);
//     AppliedjobsDiv.innerHTML += AppliedJob;

// }

// document.addEventListener('DOMContentLoaded', function () {
//     try {
//         appliedJobs = JSON.parse(localStorage.storedAppliedJobs);
//         console.log(appliedJobs);
//         for (let i = 0; i < appliedJobs.length; i++) {
//             ApplyJob("applied-jobs-div",appliedJobs[i].company,  appliedJobs[i].dateApplied, appliedJobs[i].jobTitle,
//             appliedJobs[i].jobCategory,appliedJobs[i].jobSalary);              
//         }
//     } catch (e) {
//         console.error('Error parsing applied jobs:', e);
//     }
// });