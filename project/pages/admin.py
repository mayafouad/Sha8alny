from django.contrib import admin
from .models import Admins, Users, userSkill, userEducation,userGeneralInfo, userSocialMediaApps, userExperience,UserAppliedJobs, userProfile,Jobs, Companies,Category, userResume
admin.site.register(Admins)
admin.site.register(Users)
admin.site.register(userSkill)
admin.site.register(userEducation)
admin.site.register(userGeneralInfo)
admin.site.register(userSocialMediaApps)
admin.site.register(userExperience)
admin.site.register(userProfile)
admin.site.register(Companies)
admin.site.register(Category)
admin.site.register(Jobs)
admin.site.register(userResume)
admin.site.register(UserAppliedJobs)


# Register your models here.
