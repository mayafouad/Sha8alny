// if(!localStorage.getItem("currentlyLogged")){
//     localStorage.setItem("currentlyLogged", "0");
// }
// let mainNav = document.createElement("div");
// mainNav.innerHTML = `

// <div class = "nav-bar">
//         <div class = "nav-left-section">
//             <p>  <span>S</span>ha8alny </p>
//         </div>
//         <div class = "nav-right-section">
//             <ul>
//             <li><a href="{%url 'MainHomePage'%}">Home</a></li>
//             <li><a href="{%url 'signUp'%}">sign up</a></li>
//             <li><a href="{%url 'login'%}">log in</a></li>
//             <li><a href="{%url 'aboutUs'%}">AboutUs</a></li>
//             <li><a href="{%url 'jobDetails'%}">Available jobs</a></li>
//             </ul>
//         </div>
// </div>

// `;


// let userNav = document.createElement("div");
// userNav.innerHTML = `
// <div class = "nav-bar">
// <div class = "nav-left-section">
//     <p>   <span>S</span>ha8alny </p>
// </div>
// <div class = "nav-right-section">
// <ul>
//     <li> <a href ="{%url 'homePage'%}"> Home</a> </li>
//     <li> <a href ="{%url 'homePage.html#search'%}"> search</a>  </li>
//     <li> <a href ="{%url 'jobDetails'%}">Jobs</a>  </li>
//     <li> <a href ="{%url 'companies'%}"> Companies</a>  </li>
//     <li> <a href ="{%url 'userAppliedJobs'%}">Applied Jobs</a>  </li>
//     <li> <a href ="{%url 'userProfileLast'%}">profile</a>  </li>
//     <li> <a href ="{%url 'MainHomePage'%}" id = "userLogOut">Log Out </a>  </li>   //right?
// </ul>
// </div>
// </div>
// `;


// let adminNav = document.createElement("div");

// adminNav.innerHTML = `

// <div class = "nav-bar">
// <div class = "nav-left-section">
//     <p>  <span>S</span>ha8alny </p>
// </div>
// <div class = "nav-right-section">
// <ul>
//     <li> <a href ="{%url 'homePage'%}"> Home</a> </li>
//     <li> <a href ="{%url 'homePage.html#search'%}"> search</a>  </li>
//     <li> <a href ="{%url 'jobDetails'%}">Jobs</a></li>
//     <li> <a href ="{%url 'admin' %}">My Profile</a></li>
//     <li> <a href ="{%url 'admin.html#AddJob' %}">Add Job</a></li>
//     <li> <a href ="{%url 'admin.html#MyPosts' %}">My Posts</a></li>
// <li> <a href = "{% url 'MainHomePage'%}" id = "adminLogOut"> Log Out</a> </li>
// </ul>
// </div>
// </div>

// `;
    


// document.addEventListener('DOMContentLoaded', function() {
//     let nav = document.getElementsByTagName("nav")[0];
    
//     if(localStorage.currentlyLogged === "2"){
//         nav.append(userNav);
//         attachLogoutHandler();
//     }
//     else if(localStorage.currentlyLogged === "1"){
//         nav.append(adminNav);
//         attachLogoutHandler();
//     }
//     else{
//         nav.append(mainNav);
//     }
// });

// function attachLogoutHandler() {
//     let logoutButton = document.getElementById("adminLogOut") || document.getElementById("userLogOut");
//     logoutButton.addEventListener("click", function(){
//         localStorage.currentlyLogged = "0";
//     });
// }
