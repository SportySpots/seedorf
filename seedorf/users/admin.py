from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.utils.translation import ugettext_lazy as _

from .models import User, UserProfile


class SportySpotsUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User


class SportySpotsUserCreationForm(UserCreationForm):

    error_message = UserCreationForm.error_messages.update(
        {"duplicate_username": _("This username has already been taken.")}
    )

    class Meta(UserCreationForm.Meta):
        model = User

    def clean_username(self):
        username = self.cleaned_data["username"]
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError(self.error_messages["duplicate_username"])


class UserProfileInline(admin.StackedInline):
    model = UserProfile


@admin.register(User)
class SportySpotsUserAdmin(AuthUserAdmin):
    form = SportySpotsUserChangeForm
    add_form = SportySpotsUserCreationForm
    fieldsets = (("User Profile", {"fields": ("name",)}),) + AuthUserAdmin.fieldsets
    list_display = ("username", "name", "is_superuser")
    search_fields = ["name"]
    inlines = [UserProfileInline]
