from django.urls import path
from .import views 

urlpatterns=[
    # Website main functions
    path('',views.MainHomePage,name='MainHomePage'),
    path('login', views.login, name='login'),
    path('signUp',views.signUp,name='signUp'),
    path('company',views.company,name='company') , 
    path('aboutUs', views.aboutUs, name = "aboutUs"),
    path('jobDetails', views.jobDetails , name = "jobDetails"),
    path('MainHomePage',views.MainHomePage,name='MainHomePage'),

    # Admin Functions
    path('addJob' , views.addJob, name = 'addJob'),
    path('editJob' , views.editJob),
    path('adminProfile', views.admin, name='adminProfile'),
    path('deleteJob', views.deleteJob),
    path('info', views.loadInfo, name='info'),
    path('loadPosts', views.loadPosts, name = 'loadPosts'),
    path('saveInfo', views.saveInfo, name='saveInfo'),

    # User Functions
    path('userProfile' , views.userMainProfile, name = "userMainProfile"),
    path('addExp', views.addNewUserExperience, name = "addNewUserExperience"),
    path('addEdu', views.addNewUserEducation, name = "addNewUserEducation"),
    path('addSkill', views.addNewUserSkill, name = "addNewUserSkill"),
    path('editGeneralInfo', views.updateGeneralInfo, name = 'updateGeneralInfo'),
    path('editSocialAccounts', views.updateSocialAccount, name = "updateSocialAccount"),
    path('updateAboutInfo', views.updateAboutInfo, name = "updateAboutInfo"),
    path('addResume', views.addResume, name = "addResume"),
    path('addImage', views.uploadUserImage, name = "uploadUserImage"), 
    path('allJobs', views.allJobs, name = 'allJobs'),
    path('applyToJob/<int:job_Id>/', views.applyToJob, name='applyToJob'),
    path('userCurrentlyAppliedJobs', views.userCurrentlyAppliedJobs, name = "userCurrentlyAppliedJobs"),

    path('logout', views.logout, name = "logout"),
 
    path('homePage', views.homePage, name='homePage'), 
    #  path('admin', views.adminProfile, name='admin'),  
    
    path('homePage.html#search', views.adminsearch, name='adminsearch'),
    path('homePage.html#search', views.usersearch, name='usersearch'),
    
    # path('userAppliedJobs', views.userAppliedJobs, name='userAppliedJobs'),
    path('userProfileLast', views.userProfileLast, name='userProfileLast'),

    
]
    
            