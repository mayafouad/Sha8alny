let mainNav = document.createElement("div");

mainNav.innerHTML = `


<div class = "nav-bar">
        <div class = "nav-left-section">
            <p>  Sha8alny </p>
        </div>
        <div class = "nav-right-section">
            <ul>
                <li><a href="MainHomePage.html"> <strong>Home</strong> </a></li>
                <li><a href="signUp.html">sign up</a></li>
                <li><a href="login.html">log in</a></li>
                <li><a href="aboutUs.html">AboutUs</a></li>
                <li><a href="jobDetails.html">Available jobs</a></li>
            </ul>
        </div>
</div>

`;
let userNav = document.createElement("div");
userNav.innerHTML = `
<div class = "nav-bar">
<div class = "nav-left-section">
    <i class="fa fa-search"></i>
    <p>  Sha8alny </p>
</div>
<div class = "nav-right-section">
    <ul>
        <li><a href ="homePage.html"> Home</a> </li>
        <li><a href ="homePage.html"> search</a>  </li>
        <li> <a href = "jobDetails.html">Jobs</a>  </li>
        <li><a href = "companies.html"> Companies</a>  </li>
        <li><a href = "userAppliedJobs.html">Applied Jobs</a>  </li>
        <li><a href = "userProfileLast.html">profile</a>  </li>
        <li> <a href = "MainHomePage.html">Log Out </a>  </li>
    </ul>
</div>
</div>
`;


let adminNav = document.createElement("div");

adminNav.innerHTML = `
 <ul>
    <li>
        <img src="Sha8alny.png" alt="Sha8alny Logo" width="60" height="30">
    </li>
    <li> 
        <button class="btn">
        <span class="material-symbols-outlined">home</span> 
        <a href="AdminHome.html">Home</a>
        </button>
    </li>
    <li>
        <button class="btn">
        <span class="material-symbols-outlined">Search</span> 
        <a href="AdminHome.html#search">Search</a>
        </button>
    </li>
    <li> 
        <button class="btn">
        <span class="material-symbols-outlined">work</span> 
        <a href="job_details2Admin.html">Jobs</a></button>
    </li>
    <li>
        <button class="btn">
        <span class="material-symbols-outlined">account_circle</span> 
        <a href="AdminProfile.html">My Profile</a>
        </button>
    </li>
    <li>
        <button class="btn">
        <span class="material-symbols-outlined">post_add</span> 
        <a href="AdminProfile.html#AddJob">Add Job</a>
        </button>
        </li>
    <li> 
        <button class="btn">
        <span class="material-symbols-outlined">post</span> 
        <a href="AdminProfile.html#MyPosts">My Posts</a>
        </button>
    </li>
    </ul>

`;

let nav = document.getElementsByTagName("nav")[0];

document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.currentlyLogged === "2"){
        nav.innerHTML = userNav;

    }
    else if(localStorage.currentlyLogged === "1"){
       nav.innerHTML = adminNav;
    }
    else{
        nav.innerHTML = mainNav;
    }

});


