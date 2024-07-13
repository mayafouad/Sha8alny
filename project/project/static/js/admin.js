function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');


const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;


function editInfo(){
    var name = document.getElementById("profile-name").value;
    document.getElementById("edit-name").value = name;

    var company = document.getElementById("profile-company").value;
    document.getElementById("edit-company").value = company;

    var mail = document.getElementById("profile-mail").value;
    document.getElementById("edit-mail").value = mail;

    document.getElementById("EditInfo").style.display = "block";

    
}
function saveInfo(){
    var name = document.getElementById("edit-name").value;
    if (!namePattern.test(name)) {
        alert('Name can only contain letters and spaces.');
        return false;
    }
    else{document.getElementById("profile-name").innerHTML = name;}

    var company = document.getElementById("edit-company").value;
    if (!namePattern.test(company)) {
        alert('Company can only contain letters and spaces.');
        return false;
    }
    else {document.getElementById("profile-company").innerHTML = company;}

    var mail = document.getElementById("edit-mail").value;
    if (!emailPattern.test(mail)) {
        alert('Invalid email format.');
        return false;
    }
    else{document.getElementById("profile-mail").innerHTML = mail;}

    var imageInput = document.getElementById("edit-image");
    var imageProfile = document.getElementById('pimg');

    imageInput.addEventListener('change', function() {
        var file = imageInput.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                imageProfile.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });


    const formData = new FormData();
    formData.append('name', name);
    formData.append('email',mail);
    formData.append('company', company);
    if (imageInput.files.length > 0) {
        formData.append('image', imageInput.files[0]);
    }

    fetch('saveInfo', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for Django
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetch('info',{method: 'GET',})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('profile-name').innerHTML =` ${data.name}`;
            document.getElementById('profile-mail').innerHTML =` ${data.email}`;
            document.getElementById('profile-company').innerHTML =` ${data.company}`;
            document.getElementById('pimg').src = ` ${data.image}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
    
        
    document.getElementById("EditInfo").style.display = "none";
    document.getElementById("edit-name").value = "";
    document.getElementById("edit-company").value = "";
    document.getElementById("edit-mail").value = "";
}

function closeInfo(){
    document.getElementById("EditInfo").style.display = "none";
}


function addJob(event)  {

    event.preventDefault();

    const id = document.getElementById("ID").value;
    const Company = document.getElementById("profile-company").value;
    var job = document.getElementById("JT").value;
    if (!namePattern.test(job)) {
        alert('Job Title can only contain letters and spaces.');
        return false;
    }
    else{ var jobTitle = job; }
    
    var place = document.getElementById("location").value;
    if (!namePattern.test(place)) {
        alert('Location can only contain letters and spaces.');
        return false;
    }
    else {var location = place;}

    var category = document.getElementById("Field").value;
    if (!namePattern.test(category)) {
        alert('Field can only contain letters and spaces.');
        return false;
    }
    else {var field = category;}
    let experience = document.getElementById("experience").value;
    if(experience == "zero"){
        experience =  "Undergraduate";
     }
     if(experience == "no"){
        experience =  "Fresh graduate";
      }
     
      if(experience == "two"){
        experience =  "Tow Years of experience";
      }
     
      if(experience == "five"){
        experience =  "Five Years of experience";
      }
     
      if(experience == "more"){
        experience =  "More than five Years of experience";
      }
    const type = document.querySelector('input[name="type"]:checked').value;
    const description = document.getElementById("description").value;
    const qualifications = document.getElementById("qualifications").value;
    const salary = document.getElementById("salary").value;
    let status = document.querySelector('input[name="status"]:checked').value;

      if(status == "open") status = "Open";
      if(status == "close") status = "Close";

    const newPost = document.createElement("li");
    newPost.innerHTML = `
        <div class="pbox" id=${id}>
            <section>
                <ul>
                    <li><button class="btn"  onclick="editPost(this)"><span class="material-symbols-outlined">edit</span> </button></li>
                    <li><button class="btn"  onclick="deletePost(this)" ><span class="material-symbols-outlined">delete</span> </button></li>
                </ul>
                <h3 name="title">${jobTitle}</h3>
            </section>
            <form action="">
                <label for="Company">Company:</label>
                <output name="Company">${Company}</output><br>
                <label for="location">Location:</label>
                <output name="location">${location}</output><br>
                <label for="Field">Field/Category:</label>
                <output name="Field">${field}</output><br>
                <label for="experience">Years of experience:</label>
                <output name="experience">${experience}</output><br>
                <label for="Type">Type of the job:</label> 
                <output name="type">${type}</output><br>
                <label for="description">Job Description:</label>
                <output name="description">${description}</output><br>
                <label for="qualifications">Qualifications:</label>
                <output name="qualifications">${qualifications}</output><br>
                <label for="salary">Salary:</label>
                <output name="salary">${salary}</output><br>
                <label for="status">Status:</label>
                <output name="status">${status}</output><br>
            </form>
        </div>
    `;


    const postList = document.getElementById("MyPosts");
    postList.appendChild(newPost);


    const formData = new FormData();
    formData.append('JobTitle',jobTitle);
    formData.append('description', description);
    formData.append('salary', salary);
    formData.append('company', Company);
    formData.append('ID', id);
    formData.append('type',type);
    formData.append('qualifications',qualifications);
    formData.append('Field',category);
    formData.append('location',location);
    formData.append('status',status);
    formData.append('experience',experience);


    fetch('addJob', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for Django
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data saved successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem saving the data:', error);
    });
    
    document.getElementById("ID").value = "";
    document.getElementById("JT").value = "";
    document.getElementById("location").value = "";
    document.getElementById("Field").value = "";
    document.getElementById("experience").value = "zero";
    document.getElementById("internship").checked = true;
    document.getElementById("description").value = "";
    document.getElementById("qualifications").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("open").checked = true;
}

function deleteLocal(ID){

    const formData = new FormData();
    formData.append('ID', ID);

    fetch('deleteJob', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for Django
        }
    })
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        return response.json();
    })
    // .then(data => {
    //     console.log('Data saved successfully:', data);
    // })
    // .catch(error => {
    //     console.error('There was a problem saving the data:', error);
    // });
    
}

function deletePost(button) {
    const post = button.closest("div");
    post.closest("li").remove();
    deleteLocal(post.id);
}




let toEdit;
function editPost(button) {

    let postItem = button.closest('div');
    toEdit = postItem.id;

    let jobTitle = postItem.querySelector('h3').textContent;
    let location = postItem.querySelector('output[name="location"]').textContent;
    let field = postItem.querySelector('output[name="Field"]').textContent;
    let experience = postItem.querySelector('output[name="experience"]').textContent;
    let Type = postItem.querySelector('output[name="type"]').textContent;
    let description = postItem.querySelector('output[name="description"]').textContent;
    let qualifications = postItem.querySelector('output[name="qualifications"]').textContent;
    let salary = postItem.querySelector('output[name="salary"]').textContent;
    let status = postItem.querySelector('output[name="status"]').textContent;
  

    document.getElementById('EJT').value = jobTitle;  
    document.getElementById('Elocation').value = location;  
    document.getElementById('EField').value = field;  
    document.getElementById('Eexperience').nodeValue = experience;  
    if(document.getElementById('Einternship').value == Type){
        document.getElementById('Einternship').checked=true;
    }
    if(document.getElementById('Efulltime').value == Type){
        document.getElementById('Efulltime').checked=true;
    }
    if(document.getElementById('Eparttime').value == Type){
        document.getElementById('Eparttime').checked=true;
    } 
    
    if(experience == "Undergraduate"){document.getElementById('Eexperience').value = "zero";}
    if(experience == "Fresh graduate"){document.getElementById('Eexperience').value = "no";}
    if(experience == "Tow Years of experience"){document.getElementById('Eexperience').value = "two";}
    if(experience == "Five Years of experience"){document.getElementById('Eexperience').value = "five";}
    if(experience == "More than five Years of experience"){document.getElementById('Eexperience').value = "more";}

    document.getElementById('Edescription').value = description;  
    document.getElementById('Equalifications').value = qualifications; 
    document.getElementById('Esalary').value = salary;   
       
    if(document.getElementById('Eopen').value == status){
        document.getElementById('Eopen').checked = true;
    }
    if(document.getElementById('Eclose').value == status){
        document.getElementById('Eclose').checked = true;
    }
    document.getElementById('editPost').style.display = 'block';
}


function saveEditedPost(event) {
    event.preventDefault();  
    let viwed = document.getElementById(toEdit);
    let t;
    var loc;
    var cat;
    var ex;
    var des;
    var qua;
    var sa;

    if (!namePattern.test(document.getElementById('EJT').value)) {
        alert('Input can only contain letters and spaces.');
        return false;
    }
    else {t = document.getElementById('EJT').value;
        viwed.querySelector('h3').textContent = document.getElementById('EJT').value;
        }

    if (!namePattern.test(document.getElementById('Elocation').value)) {
        alert('Input can only contain letters and spaces.');
        return false;
    }
    else {loc = document.getElementById('Elocation').value;
        viwed.querySelector('output[name="location"]').value = document.getElementById('Elocation').value;
        }

    
    if (!namePattern.test(document.getElementById('EField').value)) {
        alert('Input can only contain letters and spaces.');
        return false;
    }
    else{
        cat = document.getElementById('EField').value;
    viwed.querySelector('output[name="Field"]').value = document.getElementById('EField').value;
    }
    
    let experience = document.getElementById('Eexperience').value;
    if(experience == "zero"){
      ex =  "Undergraduate";
       viwed.querySelector('output[name="experience"]').innerHTML =  "Undergraduate";
    }
    if(experience == "no"){
        ex =  "Fresh graduate";
        viwed.querySelector('output[name="experience"]').innerHTML = "Fresh graduate";
     }
    
     if(experience == "two"){
        ex =  "Tow Years of experience";
        viwed.querySelector('output[name="experience"]').innerHTML ="Tow Years of experience";
     }
    
     if(experience == "five"){
        ex =  "Five Years of experience";
        viwed.querySelector('output[name="experience"]').innerHTML = "Five Years of experience";
     }
    
     if(experience == "more"){
        ex =  "More than five Years of experience";
        viwed.querySelector('output[name="experience"]').innerHTML = "More than five Years of experience";
     }
     
    let type;
    if(document.getElementById('Einternship').checked==true){
        type = "Internship";
    }
    if(document.getElementById('Efulltime').checked==true){
        type = "Full Time";
    }
    if(document.getElementById('Eparttime').checked==true){
        type = "Part Time";
    }
    viwed.querySelector('output[name="type"]').innerHTML = type;

    des = document.getElementById('Edescription').value;
    qua = document.getElementById('Equalifications').value;
    
    sa = document.getElementById('Esalary').value;

    viwed.querySelector('output[name="description"]').value = document.getElementById('Edescription').value;
    viwed.querySelector('output[name="qualifications"]').value = document.getElementById('Equalifications').value;
    
    viwed.querySelector('output[name="salary"]').value = document.getElementById('Esalary').value;
    
    let status;
    if(document.getElementById('Eopen').checked == true){
        status ="Open";
    }
    if(document.getElementById('Eclose').checked == true){
        status="Close";
    }

    viwed.querySelector('output[name="status"]').innerHTML = status;
    
    document.getElementById('editPost').style.display = 'none';



    const formData = new FormData();
    formData.append('ID', toEdit);
    formData.append('JobTitle',t);
    formData.append('description', des);
    formData.append('salary', sa);
    formData.append('type',type);
    formData.append('qualifications',qua);
    formData.append('Field',cat);
    formData.append('location',loc);
    formData.append('status',status);
    formData.append('experience',ex);


    fetch('editJob', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for Django
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data saved successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem saving the data:', error);
    });
    

}


function closeEdit() {
    document.getElementById('editPost').style.display = 'none';
}

window.addEventListener('load', function() {
 
    fetch('loadPosts',{method: 'GET',})
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        data.forEach(job => {  
            const newPost = document.createElement("li");
            newPost.innerHTML = `
            <div class="pbox" id=${job.job_code}>
                <section>
                    <ul>
                        <li><button class="btn"  onclick="editPost(this)"><span class="material-symbols-outlined">edit</span> </button></li>
                        <li><button class="btn"  onclick="deletePost(this)" ><span class="material-symbols-outlined">delete</span> </button></li>
                    </ul>
                    <h3 class="title">${job.job_title}</h3>
                </section>
                <form action="">
                    <label for="Company">Company:</label>
                    <output name="Company">${job.job_company}</output><br>
                    <label for="location">Location:</label>
                    <output name="location">${job.job_location}</output><br>
                    <label for="Field">Field/Category:</label>
                    <output name="Field">${job.job_category}</output><br>
                    <label for="experience">Years of experience:</label>
                    <output name="experience">${job.job_experience_year}</output><br>
                    <label for="Type">Type of the job:</label> 
                    <output name="type">${job.job_type}</output><br>
                    <label for="description">Job Description:</label>
                    <output name="description">${job.job_description}</output><br>
                    <label for="qualifications">Qualifications:</label>
                    <output name="qualifications">${job.job_qualification}</output><br>
                    <label for="salary">Salary:</label>
                    <output name="salary">${job.job_salary}</output><br>
                    <label for="status">Status:</label>
                    <output name="status">${job.job_status}</output><br>
                </form>
            </div>
        `;
    
        const postList = document.getElementById("MyPosts");
        postList.appendChild(newPost);
    
        });
       

    })
    .catch(error => {
        console.error('Error:', error);
    });
    
    fetch('info',{method: 'GET',})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        document.getElementById('profile-name').innerHTML =` ${data.name}`;
        document.getElementById('profile-mail').innerHTML =` ${data.email}`;
        document.getElementById('profile-company').innerHTML =` ${data.company}`;
        document.getElementById('pimg').src = ` ${data.image}`;

    });


});