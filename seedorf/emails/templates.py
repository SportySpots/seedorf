from enum import Enum


class Template(Enum):
    SignupConfirmEmail = "01-SignupConfirmEmail"
    CreateActivityConfirmation = "02-CreateActivityConfirmation"
    ConfirmationAttendance = "03-ConfirmationAttendance"
    DeclineAttendance = "04-DeclineAttendance"
    CancelledGame = "05-CancelledGame"
    GameInvitation = "06-GameInvitation"
    Reminder = "07-Reminder"
    UpdatedGame = "08-UpdatedGame"
    MagicLinkLogin = "09-MagicLinkLogin"
    SignupMagicLink = "10-SignupMagicLink"


templates = {
    Template.SignupConfirmEmail: {"en": 6756321, "nl": 6789245},
    Template.CreateActivityConfirmation: {"en": 6931861, "nl": 6934046},
    Template.ConfirmationAttendance: {"en": 6790381, "nl": 6789246},
    Template.DeclineAttendance: {"en": 6935782, "nl": 6934047},
    Template.CancelledGame: {"en": 6790541, "nl": 6790382},
    Template.GameInvitation: {"en": 6789243, "nl": 6789202},
    Template.Reminder: {"en": 6790385, "nl": 6790903},
    Template.UpdatedGame: {"en": 6790901, "nl": 6790902},
    Template.MagicLinkLogin: {"en": 9746750, "nl": 9746750},  # todo: create in postmark
    Template.SignupMagicLink: {"en": 9746750, "nl": 9746750},  # todo: create in postmark  # todo: create in postmark
}
