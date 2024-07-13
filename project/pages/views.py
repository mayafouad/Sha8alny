from django.shortcuts import render, redirect
from django.urls import reverse
from .models import Users, Admins,userSocialMediaApps, userGeneralInfo, userProfile
from django.http import JsonResponse, HttpResponseServerError
import logging
from .models import Jobs, userSkill,Category,Companies,UserAppliedJobs, userEducation, userExperience,userGeneralInfo, userProfile, userResume, userSocialMediaApps, Users
from pages.models import Admins
from django.contrib.auth.models import User
from django.db.models import Q


def signUp(request):
    if request.method == "POST":
        username = request.POST['username']
        birth_date = request.POST['date']
        password = request.POST['password']
        email = request.POST['email']
        gender = request.POST['Gender']
        phone_number = request.POST['phone']
        user_type = request.POST['register']
        if (user_type == 'admin'):
            company = request.POST['Company']
            new_signup = Admins(
                username=username,
                birth_date=birth_date,
                password=password,
                email=email,
                gender=gender,
                phone_number=phone_number,
                company=company
            )
            new_signup.save()   
            return render(request, 'pages/login.html')
        else:
            new_signup = Users(
                username=username,
                birth_date=birth_date,
                password=password,
                email=email,
                gender=gender,
                phone_number=phone_number,

            )         
            new_signup.save()  
            if new_signup: 
                if not userSocialMediaApps.objects.filter(user_id=new_signup).exists():
                    new_social_acc = userSocialMediaApps(user_id=new_signup)
                    new_social_acc.save()
                if not userGeneralInfo.objects.filter(user_id=new_signup).exists():
                    new_general_info = userGeneralInfo(user_id=new_signup)
                    new_general_info.save()
                if not userProfile.objects.filter(user_id=new_signup).exists():
                    new_user_profile = userProfile(user_id=new_signup)
                    new_user_profile.save()

        return render(request, 'pages/login.html')
         
    return render(request, 'pages/signUp.html')



def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        # Check if the user exists in the Users table
        try:
            user = Users.objects.get(username=username, password=password)
            currentUser = Users.objects.filter(username=username, password=password).first()
            request.session['user_id'] = currentUser.id
            request.session["current_user"] = "user"
            # User exists in the Users table, handle the login accordingly
            return render(request, 'pages/homePage.html', {'user_type': 'user'})
        except Users.DoesNotExist:
            pass  # User does not exist in the Users table
        
        # Check if the user exists in the Admins table
        try:
            admin = Admins.objects.get(username=username, password=password)
            currentAdmin = Admins.objects.filter(username=username, password=password).first()
            request.session["admin_user_id"] = currentAdmin.id
            request.session["current_user"] = "admin"
            # User exists in the Admins table, handle the login accordingly
            return redirect(reverse('adminProfile'),request,{'user_type': 'admin'})
        except Admins.DoesNotExist:
            pass  # User does not exist in the Admins table
        
        # Neither user nor admin exists with the provided credentials
        return render(request, 'pages/login.html', {'error_message': 'Invalid username or password', 'user_type': 'none'})
    
    else:
        return render(request, 'pages/login.html')
    
def MainHomePage(request):
    categories = Category.objects.all()
    return render(request, 'pages/MainHomePage.html', {'category': categories})

def company(request):
     return render(request, 'pages/companies.html', {'company': Companies.objects.all()})  

def jobDetails(request):
    jobs = None
    flag = False
    if 'q' in request.GET:
        q = request.GET['q']
        jobs = Jobs.objects.filter(Q(job_title__icontains=q) | Q(job_salary__icontains=q))  
        flag = True
    else:
        jobs = Jobs.objects.all()  # If no query parameter, return all jobs
    context = {
        'JobList': jobs,
        'requestSearch': flag,
    }
    return render(request, 'pages/jobDetails.html', context)


def admin(request):
    ID = request.session.get('admin_user_id')
    user =  Admins.objects.get(id=ID)
    return render(request,'pages/admin.html', {'user': user })

def addJob(request):
    if request.method == "POST":
        ID = request.session.get('admin_user_id')
        jTitle = request.POST['JobTitle']
        jDescription = request.POST['description']
        jSalary = request.POST['salary']
        jCompany = request.POST['company']
        jId = request.POST['ID']
        jType = request.POST['type']
        jQualification = request.POST['qualifications']
        jCategory = request.POST['Field']
        jLocation = request.POST['location']
        jSalary = request.POST['salary']
        jStatus = request.POST['status']
        jExeperice =  request.POST['experience']



        newJob = Jobs(job_title= jTitle, job_description = jDescription, job_salary = jSalary, job_company = jCompany, job_code = jId, 
                      job_status = jStatus, job_qualification = jQualification, job_type = jType, 
                      job_category = jCategory, job_location = jLocation,job_experience_year = jExeperice, adminID = ID)
        newJob.save()
    job_list = {'JobList': Jobs.objects.all()}
    return render(request,'pages/admin.html',job_list)

def editJob(request):
    if request.method == "POST":
        job_id = request.POST['ID']
        job = Jobs.objects.filter(job_code=job_id).first()
        if job:
            job.job_title = request.POST['JobTitle']
            job.job_description = request.POST['description']
            job.job_type = request.POST['type']
            job.job_qualification = request.POST['qualifications']
            job.job_category = request.POST['Field']
            job.job_location = request.POST['location']
            job.job_salary = request.POST['salary']
            job.job_status = request.POST['status']
            job.job_experience_year =  request.POST['experience']
            job.save()
    job_list = {'JobList': Jobs.objects.all()}
    return render(request,'pages/admin.html',job_list)

logger = logging.getLogger(__name__)

def deleteJob(request):
    try:
        job_id = request.POST.get('ID', None)
        if job_id is None:
            logger.error("No Job ID provided in the request.")
            return HttpResponseServerError("No Job ID provided in the request.")

        job = Jobs.objects.filter(job_code=job_id).first()
        if job is None:
            logger.error(f"No Job found with ID: {job_id}")
            return HttpResponseServerError(f"No Job found with ID: {job_id}")

        # Try to delete the job
        job.delete()
        logger.info(f"Job with ID {job_id} deleted successfully.")

        # Try to retrieve all jobs and render the page
        job_list = {'JobList': Jobs.objects.all()}
        return render(request, 'pages/admin.html', job_list)

    except Exception as e:
        # Log the error and send a server error response
        logger.exception("An error occurred when deleting the job:")
        return HttpResponseServerError(f"An error occurred: {str(e)}")

def loadInfo(request):
    if request.method == 'GET':
        ID = request.session.get('admin_user_id')
        if not ID:
            return JsonResponse({'error': 'Admin user ID not found in session'}, status=400)

        if ID:
            try:
                user =  Admins.objects.get(id=ID)
                info = {
                    'name': user.username,
                    'email': user.email,
                    'company': user.company,
                    'image':user.image.url,
                }
                return JsonResponse(info)
            except Admins.DoesNotExist:
                return JsonResponse({'error': f'Admin with ID {ID} not found'}, status=404)

        return JsonResponse({'error': 'Invalid request method'}, status=405)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    

def loadPosts(request):
    if request.method == 'GET':
        ID = request.session.get('admin_user_id')
        jobs = Jobs.objects.filter(adminID=ID).values()
        return JsonResponse(list(jobs), safe=False)
    

def allJobs(request):
    if request.method == 'GET':
        jobs = Jobs.objects.all().values()
        return JsonResponse(list(jobs), safe=False)
    
def saveInfo(request):
    if request.method == "POST":
        ID = request.session.get('admin_user_id')
        user = Admins.objects.get(id=ID)
        user.username = request.POST['name']
        user.email = request.POST['email']
        user.company = request.POST['company']
        image_file = request.FILES.get('image')
        if image_file:
            user.image = image_file
        user.save()
    return render(request,'pages/admin.html')
   


def getUserData(userId):
    userData = {
        'experience': userExperience.objects.filter(user_id = userId),
        'education': userEducation.objects.filter(user_id = userId),
        'skills': userSkill.objects.filter(user_id = userId),
        'userDetails': Users.objects.get(id=userId),
        'generalInfo': userGeneralInfo.objects.get(user_id = userId),
        'socailApps': userSocialMediaApps.objects.get(user_id = userId),
        'userResume': userResume.objects.filter(user_id = userId),
        'userImage': userProfile.objects.get(user_id = userId),
    }
    return userData


def userMainProfile(request): 
    userId = request.session.get('user_id')
   
    return render(request, 'pages/userProfileLast.html', getUserData(userId))


def addNewUserExperience(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
        
        currentUser = Users.objects.get(id=userId)

        jTitle = request.POST['jobTitle']
        jEndDate = request.POST['jobEndDate']
        jStartDte = request.POST['jobStartDate']
        jCompany = request.POST['jobCompany']
        newUserExperience = userExperience( experience_company= jCompany, experience_job_title = jTitle, user_id = currentUser,
        experience_start_date = jStartDte, experience_end_data = jEndDate)
        newUserExperience.save()
    
    return render(request, 'pages/userProfileLast.html', getUserData(userId))
   

def addNewUserEducation(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
       
        currentUser = Users.objects.get(id=userId)

        school = request.POST['eduSchool']
        degree = request.POST["eduDegree"]
        sYear = request.POST["eduStartYear"]
        eYear = request.POST["eduEndYear"]

        newUserEducation = userEducation(education_school  = school, education_degree = degree, 
        education_start_year = sYear,  education_end_year = eYear, user_id = currentUser)
        newUserEducation.save()
    
    return render(request, 'pages/userProfileLast.html', getUserData(userId))


def addNewUserSkill(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
        currentUser = Users.objects.get(id=userId)
        uSkill = request.POST["newSkill"]
        newUserSkill = userSkill(skill = uSkill, user_id = currentUser)
        newUserSkill.save()
    return render(request, 'pages/userProfileLast.html', getUserData(userId))



def updateGeneralInfo(request):
    userId = request.session.get('user_id')
    currentUser = Users.objects.get(id=userId)
    # maybe results in  an error because i am sending an object
    generalInfo = userGeneralInfo.objects.get(user_id = userId)
    if request.method == "POST":
        if(request.POST["userName"] != ""):
            currentUser.username = request.POST["userName"]
        if(request.POST["userPhoneNumber"] != ""):
            currentUser.phone_number = request.POST["userPhoneNumber"]
        if(request.POST["userGender"] != ""):
            currentUser.gender = request.POST["userGender"]
        if(request.POST["userGmail"] != ""):
            currentUser.email = request.POST["userGmail"]
        
        if(request.POST["userCurrentJobTitle"] != ""):
            generalInfo.user_current_position = request.POST["userCurrentJobTitle"]
        if(request.POST["userCurrentCity"] != ""):
            generalInfo.user_city_of_resideance = request.POST["userCurrentCity"]
        
        currentUser.save()
        generalInfo.save()
    return render(request, 'pages/userProfileLast.html', getUserData(userId))


def updateSocialAccount(request):
    userId = request.session.get('user_id')
    # if the user is found before update his info , otherwise add him to the table
    if request.method == "POST":
        
        # currentUser = Users.objects.get(id=userId)
        currentUserSocialAccounts = userSocialMediaApps.objects.get(id=userId)
        if request.POST["facebook"] != "":
            currentUserSocialAccounts.facbook_url = request.POST["facebook"]
        
        if request.POST["linkden"] != "":
            currentUserSocialAccounts.linkiden_url = request.POST["linkden"]

        if request.POST["twitter"] != "":
            currentUserSocialAccounts.twitter_url = request.POST["twitter"]
        currentUserSocialAccounts.save()
    return render(request, 'pages/userProfileLast.html', getUserData(userId))



def updateAboutInfo(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
       
        # currentUser = Users.objects.get(id=userId)
        generalInfo = userGeneralInfo.objects.get(user_id=userId)

        if request.POST["aboutInfo"] != "":
            generalInfo.user_description_info = request.POST["aboutInfo"]
            generalInfo.save()

    return render(request, 'pages/userProfileLast.html', getUserData(userId))
        


        
def addResume(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
        file = request.FILES.get('uploadResume')
        if file: 
            currentUser = Users.objects.get(id=userId)
            newUserResume = userResume(resume = file, user_id = currentUser)
            newUserResume.save()

    return render(request, 'pages/userProfileLast.html', getUserData(userId))


def uploadUserImage(request):
    userId = request.session.get('user_id')
    if request.method == "POST":
        file = request.FILES.get('userProfile')
        currentUser = userProfile.objects.get(id=userId)
        currentUser.profilePhoto = file
        currentUser.save()
    return render(request, 'pages/userProfileLast.html', getUserData(userId))




def userCurrentlyAppliedJobs(request):
    userId = request.session.get('user_id')
    user = Users.objects.get(id=userId)
    user_applied_jobs = UserAppliedJobs.objects.filter(user_id=user)
    job_details = [applied_job.job_id for applied_job in user_applied_jobs]
    context = {
        'user': user,
        'job_details': job_details,
    }
    return render(request, 'pages/userAppliedJobs.html', context)

def applyToJob(request, job_Id):
    userId = request.session.get('user_id')
    if userId is not None and request.method == "GET" and job_Id != 0:
        findUser = Users.objects.get(id = userId)
        findJob = Jobs.objects.get(id = job_Id)
        hasUserAppliedBefore = UserAppliedJobs.objects.filter(user_id = findUser, job_id = findJob).exists()

        if findUser and findJob and not hasUserAppliedBefore:
            newAppliedJob = UserAppliedJobs(user_id = findUser, job_id = findJob)
            newAppliedJob.save()
    context = {
        'JobList': Jobs.objects.all(),
    }
    return render(request, 'pages/jobDetails.html', context)



###########################################################################################################################

def MainHomePage(request):
    categories = Category.objects.all()
    
    return render(request, 'pages/MainHomePage.html', {'category': categories})


def aboutUs(request):
    return render(request, 'pages/aboutUs.html')  

# def jobDetails(request):
#     return render(request, 'pages/jobDetails.html')  


def homePage(request):
    userId = request.session.get('user_id')
    adminId = request.session.get('admin_user_id')

    user = None
    if userId:
        try:
            user = User.objects.get(id=userId)
        except User.DoesNotExist:
            pass

    if user is None and adminId:
        try:
            user = Admins.objects.get(id=adminId)
        except Admins.DoesNotExist:
            pass

    context = {
        'user': user,
    }

    return render(request, 'pages/homePage.html', context)


def adminProfile(request):

    return render(request, 'pages/admin.html')  


def adminAddJob(request):
    return render(request, 'pages/admin.html')
    

def adminposts(request):
    return render(request, 'pages/admin.html')  
    

def adminsearch(request):
    return render(request, 'pages/homePage.html')  
    

def usersearch(request):
    return render(request, 'pages/homePage.html')  
    

# def userAppliedJobs(request):
#     return render(request, 'pages/userAppliedJobs.html')  

def userProfileLast(request):
    userId = request.session.get("user_id")
    return render(request, 'pages/userProfileLast.html' , getUserData(userId))


# logout function

def logout(request):
    request.session["current_user"] = "none"
    return render(request, 'pages/MainHomePage.html')
