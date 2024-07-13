from django.db import models

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    gender = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    def _str_(self):
        return self.username

class Admins(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    gender = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', default='OIP.jpg')
    def _str_(self):
        return self.username
    
class Companies(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    noOfEmployees = models.PositiveIntegerField()
    image = models.ImageField(upload_to="photos")
    website=models.URLField()
    overview = models.TextField()      
    
class Category(models.Model):
    title = models.CharField(max_length=50)
    icon = models.ImageField(upload_to='category_icons')
    details = models.TextField()
    positions = models.PositiveIntegerField(default=0)  # Number of available positions



class userExperience(models.Model):
    experience_job_title = models.CharField(max_length=80)
    experience_company = models.CharField(max_length=80)
    experience_start_date = models.IntegerField()
    experience_end_data = models.IntegerField()
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)

    # must add here a foreign key that refrences the user Id or user Name

class userEducation(models.Model):
    education_school = models.CharField(max_length=80)
    education_degree = models.CharField(max_length=80)
    education_start_year = models.IntegerField()
    education_end_year = models.IntegerField()
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)

class userSkill(models.Model):

    skill = models.CharField(max_length=80)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)
  

class userSocialMediaApps(models.Model):
    facbook_url = models.URLField(max_length=100, null = True)
    linkiden_url = models.URLField(max_length=100, null = True)
    twitter_url = models.URLField(max_length=100, null = True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)

class userGeneralInfo(models.Model):
    user_description_info = models.TextField(null = True)
    user_current_position = models.CharField(max_length=80, null = True)
    user_city_of_resideance = models.CharField(max_length=50, null = True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)
    

class userResume(models.Model):
    resume = models.FileField(upload_to='resumes/')
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)


class userProfile(models.Model):
   user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)
   profilePhoto = models.ImageField(null = True, blank=True, upload_to='UPLOADEDIMAGES/', default='user-logo.png')


class Jobs(models.Model):
    job_code = models.CharField(max_length = 30)
    job_title = models.CharField(max_length=100)
    job_description = models.TextField()
    job_company = models.CharField(max_length=55)
    job_salary = models.CharField(max_length=10)
    job_location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=55)
    job_category = models.CharField(max_length=55)
    job_status = models.CharField(max_length=20)
    job_experience_year = models.CharField(max_length=30)
    job_qualification = models.TextField()
    adminID = models.IntegerField(default=2)
    

class UserAppliedJobs(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, null = True)
    job_id = models.ForeignKey(Jobs, on_delete=models.CASCADE, null = True)





    
