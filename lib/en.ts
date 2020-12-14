const translations = {
  welcome: "Welcome to OnMail",
  defaultTitle: "OnMail",
  // Button
  "button.edit": "Edit",
  "button.save": "Save",
  "button.next": "Next",
  "button.okay": "Okay",
  "button.copy": "Copy",
  "button.more": "More",
  "button.color": "Color",
  "button.block": "Block",
  "button.apply": "Apply",
  "button.cancel": "Cancel",
  "button.create": "Create",
  "button.submit": "Submit",
  "button.remove": "Remove",
  "button.resend": "Resend",
  "button.delete": "Delete",
  "button.accept": "Accept",
  "button.copied": "Copied",
  "button.review": "Review",
  "button.ignore": "Ignore",
  "button.manage": "Manage",
  "button.upgrade": "Upgrade",
  "button.verify": "Verify",
  "button.convert": "Convert",
  "button.confirm": "Confirm",
  "button.dismiss": "Dismiss",
  "button.continue": "Continue",
  "button.previous": "Previous",
  "button.download": "Download",
  "button.deleteNow": "Delete Now",
  "button.acceptContact": "Accept Contact",
  "button.getMoreStorage": "Get More Storage",
  "button.yes": "Yes",
  "button.no": "No",
  "button.tryAgain": "Try Again",
  "button.restoreMessage": "Restore Message",
  "button.viewMessage": "View Message",
  "button.viewMessages": "View Messages",
  "button.deleteForever": "Delete Forever",
  "button.downloadAll": "Download All",
  "button.change": "Change",
  "button.retry": "Retry",
  "button.retryAll": "Retry All",
  "button.reply": "Reply",
  "button.replyAll": "Reply All",
  "button.followup": "Follow Up",
  "button.upload": "Upload",
  "button.insert": "Insert",
  "button.undo": "Undo",
  "button.gotIt": "Okay, got it!",
  "button.showAll": "Show All",
  "button.proceed": "Proceed",
  "button.deleteMyAccount": "Delete My Account",
  "button.exportMyData": "Export My Data",
  "button.homepage": "Back to Homepage",
  "button.done": "Done",
  "button.viewAll": "View All",
  "button.newMessage": "New Message",
  "button.unblock": "Unblock",
  "button.blockSender": "Block Sender",
  "button.backToInbox": "Back to Inbox",
  "button.noThanks": "No Thanks",

  "button.newer": "Newer",
  "button.older": "Older",
  "button.forward": "Forward",
  "button.labels": "Labels",
  "button.send": "Send",
  "button.addCcBccRecipients": "Add Cc Bcc Recipients",

  "button.formattingOptions": "Formatting Options",
  "button.attachFiles": "Attach Files",
  "button.insertLink": "Insert Link",
  "button.insertImage": "Insert Image",

  "button.formattingOptions.size": "Size",
  "button.formattingOptions.italic": "Italic",
  "button.formattingOptions.bold": "Bold",
  "button.formattingOptions.underline": "Underline",
  "button.formattingOptions.textColor": "Text Color",
  "button.formattingOptions.strikethrough": "Strikethrough",
  "button.formattingOptions.highlight": "Highlight",
  "button.formattingOptions.numberedList": "Numbered List",
  "button.formattingOptions.bulletedList": "Bulleted List",
  "button.formattingOptions.indentLess": "Indent Less",
  "button.formattingOptions.indentMore": "Indent More",
  "button.formattingOptions.removeFormatting": "Remove Formatting",

  "button.discardDraft": "Discard Draft",

  // Default error toast
  "toast.default.error": "Network error",

  // Dialog
  "dialog.error.title": "Error",
  "dialog.confirm.title": "Warning",

  "status.verified": "Verified",
  "status.unverified": "Unverified",

  // Checkbox
  "checkbox.doNotShowAgain": "Don't show this again",

  // Global Error
  required: "Required.",
  serverError:
    "Oops, something went wrong on our end. Hold on tight while we patch things up. Please send us a note via support.onmail.com if this persists.",
  notAuthenticated: "Not authenticated.",
  wrongCredentials: "Invalid email or password.",
  incorrectPassword: "Incorrect password.",
  invalidEmail: "Invalid email address.",
  lockout: `Sorry, you have exceeded the maximum number of login attempts. Please try again in 30 minutes.`,

  "auth.expired": "Authorization expired, please login again",
  "auth.logout": "You have logged out successfully.",
  "auth.verifyEmailSuccess":
    "Your recovery email has been verified successfully.",
  "auth.verifyEmailFailure": "Email verification failed, invalid token.",
  "auth.verifyInvitationFailure": "Invalid invitation code.",
  "auth.signup.failure":
    "Oops, something went wrong on our end. Hold on tight while we patch things up. Please send us a note via support.onmail.com if this persists.",
  "auth.recoveryEmailUnverified":
    "Please verify your recovery email address, we sent a verification email to <0>{{ email }}</0>. <1>Resend activation.</1>",

  "menu.settings": "Settings",
  "menu.help": "Need Help?",
  "menu.logout": "Logout",

  // Login
  "login.title": "Today is going to be a good day",
  "login.subtitle": "We missed your face...",
  "login.header": "Welcome Back",
  "login.submit": "Login",
  "login.email": "Email Address",
  "login.email.placeholder": "Email",
  "login.password": "Password",
  "login.password.placeholder": "Password",
  "login.forgotPassword": "Forgot password?",
  "login.signup.1": "Don't have an account?",
  "login.signup.2": "Sign Up",

  // Signup
  "signup.step1": "Create an address",
  "signup.step2": "Account information",
  "signup.step3": "See your new inbox",
  "signup.form.email.header": "Create your new email address",
  "signup.form.email.suffix": `@{{ domain }}`,
  "signup.form.email.length":
    "Sorry, your username must be between {{ minChars }} and 64 characters.",
  "signup.form.password.length":
    "Sorry, your password must be between 6 and 128 characters.",
  "signup.form.email.invalid":
    "Sorry, your username contains invalid characters.",
  "signup.form.email.lowercase": "Sorry, your username has to be in lowercase.",
  "signup.form.email.beginEndAlpha": `Sorry, the first or last character of your username can't be a symbol.`,
  "signup.form.email.upgrade": `Upgrade to Professional`,
  "signup.form.password.header": "Create a password",
  "signup.form.password.placeholder": "Choose a password",
  "signup.form.confirmPassword.placeholder":
    "Please enter your password again.",
  "signup.form.confirmPassword.match": "Passwords must match.",
  "signup.form.password.invalidCharacters":
    "Your password contains invalid characters.",
  "signup.form.recoveryEmail.header": "Add an account recovery email.",
  "signup.form.recoveryEmail.description1":
    "Your recovery method is used to reach you in case you accidentally get locked out.",
  "signup.form.recoveryEmail.description2":
    "Please enter a recovery email address.",
  "signup.form.recoveryEmail.label": "Email",
  "signup.form.recoveryEmail.placeholder": "Recovery",
  "signup.form.profile.header": "Account information",
  "signup.form.firstName.label": "First Name",
  "signup.form.firstName.length":
    "Sorry, but your first name cannot be longer than 255 characters.",
  "signup.form.lastName.label": "Last Name",
  "signup.form.lastName.length":
    "Sorry, but your last name cannot be longer than 255 characters.",
  "signup.form.required": "This field is required.",
  "signup.form.month.label": "Month",
  "signup.form.day.label": "Day",
  "signup.form.year.label": "Year",
  "signup.form.email.available": "Available",
  "signup.form.email.unavailable": "Unavailable",
  "signup.form.email.premiumAvailable": "Available starting at $9.99/month",
  "signup.form.acceptTerms": `Accept our <0>Terms & Conditions</0>`,
  "signup.form.tncSite": `https://www.edison.tech/terms`,
  "signup.next": "Continue",
  "signup.confirm": "Confirm",
  "signup.back": "Back",
  "signup.login.1": "Already have an account?",
  "signup.login.2": "Sign In",
  "signup.invitationOnly.form.email": "Email Address",
  "signup.invitationOnly.form.email.invalid":
    "Please enter a valid email address.",
  "signup.invitationOnly.form.email.required":
    "Please enter the email address you used for beta signup.",
  "signup.invitationOnly.form.code": "Invite Code",
  "signup.invitationOnly.form.code.required":
    "Please enter a valid invite code.",
  "signup.invitationOnly.form.submit": `Let's Get Started`,
  "signup.invitationOnly.header": "Enter invitation code to continue.",
  "signup.invitationOnly.title":
    "OnMail is currently only available through invitation",
  "signup.invitationOnly.subtitle": `Sign up now to experience the future of email.`,
  "signup.planRestrictions.tooltip":
    "{{ email }} is a premium email address and is only available with Professional or Business plans. All other plans have access to account names with 8 or more characters.",
  "signup.planRestrictions":
    "Email addresses with fewer than 8 characters are only available on our <0>Professional</0> or <0>Business</0> plans starting at $9.99/month.",
  "signup.hobbyPlanRestrictions.tooltip":
    "Personal plans are currently invite-only.",
  "signup.hobbyNotAllowed.tooltip":
    "Please contact us via support.onmail.com in order to complete this process.",
  "signup.subaccount.title": `You've been invited to join {{ domain }}!`,
  "signup.subaccount.subtitle": `We're excited to have you.`,
  "signup.subaccount.password.title": `Create your email`,
  "signup.subaccount.password.subtitle": `Choose a password to finish creating your account.`,
  "signup.subaccount.password.email": `Email`,
  "signup.subaccount.confirm.message":
    "Creating this user will incur an additional charge of {{ price }} per {{ interval }}.",
  "signup.payment.header": "Get started with OnMail",
  "signup.payment.planInfo": "{{ name }} Subscription",
  "signup.payment.paymentMethod": "Payment Method",

  // Forgot Password
  "forgotPassword.title1": `It's ok,`,
  "forgotPassword.title2": `it happens to the best of us`,
  "forgotPassword.subtitle": "Some more than others...",
  "forgotPassword.form.title": "Reset Password",
  "forgotPassword.form.subtitle": `Enter your OnMail address and we'll send reset instructions to your recovery email account.`,
  "forgotPassword.form.email.label": "Email Address",
  "forgotPassword.form.email.placeholder": "Email",
  "forgotPassword.success.title": "Instructions Sent",
  "forgotPassword.success.subtitle": "",
  "forgotPassword.success.message": `Check your recovery email account for password reset instructions. Trouble receiving the email? Make sure to check your spam folder. If it's not there, try to <1>resend</1>.`,
  "forgotPassword.success.message_plural": `Check your recovery email account for instructions to reset your password. Trouble receiving the email? Make sure to check your spam folder. If it's not there, try to <1>resend <1>({{ countDown }})</1></1>.`,
  "forgotPassword.success": `Check your recovery email account for instructions to reset your password. Trouble receiving the email? Make sure to check your spam folder.`,
  "forgotPassword.failure": `Failed to send password reset email. Your recovery email may be unverified. Please verify before trying again.`,
  "forgotPassword.wrongEmailAddress": `Failed to password reset email. Please make sure that you entered your OnMail email address instead of your recovery email address.`,

  // Reset Password
  "resetPassword.form.title": "Create a new password",
  "resetPassword.form.submit": "Reset My Password",
  "resetPassword.success":
    "Password changed successfully, try logging in again.",
  "resetPassword.failure":
    "There was a problem with resetting your password, please resend the forgot password email.",

  // Create Password
  "createPassword.form.password.label": "Password",
  "createPassword.form.confirmPassword.label": "Password Confirmation",

  // Hero Footer
  "heroFooter.title": "OnMail",
  "heroFooter.subtitle": "Made with love in San Jose, CA",

  // Welcome
  "welcome.brand": "OnMail",
  "welcome.title": "Welcome to your new inbox",
  "welcome.subtitle": "Start making it your own",
  "welcome.cta": "Take me to OnMail",

  // Navigation
  "navigation.smartFolders": "Smart Folders",
  "navigation.labels": "Labels",
  "navigation.upgradePlan": "Upgrade to {{planName}}",
  "navigation.usage": "{{ usage }} of {{ total }} used",
  "navigation.upgradeToFreelance":
    "Get a free custom domain with a Freelance plan. <0>Upgrade to Freelance</0>",
  "navigation.getYourFreeDomain":
    "Did you know your Freelance plan comes with a free domain? <0>Get your free domain</0>",
  // Settings
  "settings.update.success": "Saved",
  "settings.update.error": "Update error. Please try again.",
  "settings.unavailable": "This feature is not available now.",
  // Display
  "settings.general.language.label": "Display Language",
  "settings.general.language.description":
    "Choose your language to make OnMail your own. We support 25 different languages",
  "settings.general.theme.description": "",
  "settings.general.undoDuration.label": "Undo Send",
  "settings.general.undoDuration.description":
    "Accidentally send a message you wish you hadn't. Give yourself way out. Choose a cancellation period to show undo send option",
  "settings.general.smartReply.label": "Smart Reply",
  "settings.general.smartReply.description":
    "Make it quick and easy, respond to messages quickly with repsonses based on message context and frequent replies",
  "settings.general.followUpNudge.label": "Follow Up Nudge",
  "settings.general.followUpNudge.description":
    "Email's you have sent and may need to follow up on. It can be useful when you haven't heard back from someone about a question you had asked",
  "settings.general.replyToNudge.label": "Reply To Nudge",
  "settings.general.replyToNudge.description":
    "Highlight email's you may have forgotten to respond to",
  "settings.general.messagePreviewText.label": "Message Preview Text",
  "settings.general.messagePreviewText.description":
    "Customize your email list by hiding the message preview text from the mail feed",
  "settings.general.attachmentPreview.label": "Attachment Preview",
  "settings.general.attachmentPreview.description":
    "View attachment images in your inbox, quick action to download and view the image without having to open the email",
  "settings.general.priceAlertTracking.label": "Price Alert Tracking",
  "settings.general.priceAlertTracking.description":
    "OnMail will automatically track purchasees eligible for refunds within the price alert window",
  "settings.general.smartFolders.label": "Smart Folders",
  "settings.general.smartFolders.description":
    "Automatically categorize Travel, Packages, Events and Receipts into smart folders in the main menu",
  "settings.general.forwardingAccounts.label": "Forwarding Accounts",
  "settings.general.forwardingAccounts.description":
    "You can forward all of your OnMail messages to another email address.",
  "settings.general.forwardingAccounts.newEmailButton": "Add a new address",
  "settings.general.forwardingAccounts.newEmailModal.title":
    "Add Forwarding Address",
  "settings.general.forwardingAccounts.newEmailModal.description":
    "Enter an email address you have access to",
  "settings.general.forwardingAccounts.duplicated":
    "You already have the forwarding address {{ email }}.",
  "settings.general.forwardingAccounts.self":
    "You cannot specify your own email address.",
  "settings.general.forwardingAccounts.verficationSent.title":
    "Verification Sent",
  "settings.general.forwardingAccounts.verficationSent.description":
    "A confirmation link has been sent to <1>{{ email }}</1> to verify permission",
  "settings.general.forwardingAccounts.error.emailAddress":
    "Invalid email address",
  "settings.general.forwardingAccounts.verification.success.title":
    "Your email has been successfully verified.",
  "settings.general.forwardingAccounts.verification.success.subtitle":
    "{{ senderEmail }} can now forward emails to {{ receiverEmail }}",
  "settings.general.forwardingAccounts.verification.success.button":
    "Back To OnMail",
  "settings.general.forwardingAccounts.verification.failure.title":
    "Failed to verify your email.",
  "settings.general.forwardingAccounts.verification.failure.subtitle":
    "Please resend the verify email",
  "settings.general.recoveryEmail.duplicated":
    "You already set it as the recovery email, please use a different address.",
  "settings.general.recoveryEmail.self": `Please use a different address as your recovery email.`,
  // Notifications
  "settings.notifications.webNotification.label": "Web Notifications",
  "settings.notifications.webNotification.description":
    "Get notifications delivered through the web browser and never miss an email",
  "settings.notifications.notificationFilter.label": "Notification Filters",
  "settings.notifications.notificationFilter.description":
    "Fine tune your notifications to help focus on what matters",
  // Storage
  "settings.storage.title": "Storage Used",
  "settings.storage.detail": "More Info",
  "settings.storage.detail.totalUsed": "{{ used }} used",
  "settings.storage.usage": "{{ used }}<1>of {{ quota }} used</1>",
  "settings.storage.alert.full":
    "You're out of storage, you won't be able to store new files and may not be able to send and receive emails.",
  "settings.storage.alert.warning": `You're running low on storage. Once you're out of storage, you won't be able to store new files and may not be able to send and receive emails.`,
  "settings.storage.modal.title": "Storage Breakdown",

  // Signature
  "settings.signature.signature.label": "Enable Signature",
  "settings.signature.signature.description":
    "Create a custom email signature to leave the best first impression.",
  "settings.signature.error.exceedMaxLength":
    "Signature length can't exceed {{ maxLength }}.",
  // Profile
  "settings.account.avatar.label": "Photo",
  "settings.account.avatar.description":
    "Choose a photo to display alongside your sent mail.",
  "settings.account.senderName.label": "Name",
  "settings.account.senderName.description": `Choose a name to display alongside your sent mail.`,
  "settings.account.subscription.label": "Plan",
  "settings.account.subscription.owner": "Owner",
  "settings.account.subscription.paymentMethod": "Payment Method",
  // Recovery
  "settings.recovery.email.label": "Recovery Email",
  "settings.recovery.email.description":
    "Just in case you get locked out of your account, add in a recovery email so we can help you get back in.",
  "settings.recovery.email.form": "Enter a recovery email",
  "settings.recovery.email.form.label": "recovery email address",
  "settings.recovery.email.verificationSent":
    "A verification email has been sent to your address. Follow the instructions in your email to verify this address. If you do not see it please try again.",
  "settings.recovery.email.unverified": "Unverified recovery email.",
  "settings.recovery.email.verify.success": "Successfully verified.",
  "settings.recovery.email.verify.failure": "Failed to verify.",
  "settings.recovery.password.label": "Password",
  "settings.recovery.password.description":
    "Change your email account password.",
  "settings.recovery.password.button": "Change",
  "settings.recovery.password.success": "Password updated successfully.",
  "settings.recovery.password.failure":
    "There was a problem with resetting your password, please try again later.",
  "settings.recovery.password.form.currentPassword.label": "Current Password",
  // SMTP Proxy
  "settings.smtpProxy.setDefault": "Choose",
  "settings.smtpProxy.setDefault.success":
    "Success! OnMail will send your emails as {{ email }}.",
  "settings.smtpProxy.remove": "Remove",
  "settings.smtpProxy.remove.success": "Success! Connected account removed.",
  "settings.smtpProxy.addNewEmail": "Add Another Email Address",
  "settings.smtpProxy.providers.title": "Choose Email Provider",
  "settings.smtpProxy.providers.subtitle":
    "Select the email provider your'd like to connect to OnMail",
  "settings.smtpProxy.providers.google.success":
    "Success! Gmail account connected.",
  "settings.smtpProxy.providers.google.error":
    "Failed to connect Gmail account.",
  // Attachment Links
  "settings.attachmentLinks": "Attachment Links",
  "settings.attachmentLinks.empty.title":
    "Send any attachments without worrying about file size",
  "settings.attachmentLinks.empty.subtitle":
    "Files over 25MB sent to OnMail users will be sent as attachments, with those sent to non-OnMail users sent as links. All of these large attachments can be managed here.",
  "settings.attachmentLinks.delete":
    "Once you delete this, recipients with this link will no longer be able to download these attachments.",
  "settings.attachmentLinks.passwordProtection": "Password Protection",
  "settings.attachmentLinks.passwordProtection.message":
    "Only people with the password will be able to view and download these attachments.",

  // Split Inbox
  "settings.splitInbox.empty.title":
    "Structure your inbox the way that works for you",
  "settings.splitInbox.empty.subtitle":
    "Create customizable inboxes for different types of messages so you can stay focused on what you want, when you want.",
  "settings.splitInbox.name.title":
    "What would you like to call your new split inbox?",
  "settings.splitInbox.error.create": "Failed to create split inbox.",
  "settings.splitInbox.error.update": "Failed to update split inbox.",
  "settings.splitInbox.error.duplicate":
    "This condition is already in use. Try using advanced options to create this split inbox.",
  "settings.splitInbox.success.update": "{{ name }} updated.",
  // Label
  "settings.label.empty.title": `You haven't labeled anything yet`,
  "settings.label.empty.subtitle":
    "Labels help you categorize your messages so you can find what you need in a snap.",
  "settings.label.selector.create": "Create new label",
  "settings.label.delete.text": "Done with this label?",
  "settings.label.error.empty": "No name specified. Please try another name.",
  "settings.label.error.reserved":
    '"{{ value }}" is a reserved system label. Please try another name.',
  "settings.label.error.duplicated":
    "This name already exists. Please try another name.",
  "settings.label.error.invalid":
    'The "{{ value }}" is not allowed. Please try another name.',
  "settings.label.error.create": "Failed to create label.",
  "settings.label.error.update": "Failed to update label.",
  "settings.label.prompt.remove": "Are you sure you want to delete?",
  // Filter
  "settings.filter.empty.title": "Time saved is a little time back for you",
  "settings.filter.empty.subtitle":
    "Manage your messages hands-free. Set rules to automatically send certain emails to a label, mark as read, and more.",
  "settings.filter.normal.text": "All Messages",
  "settings.filter.advanced.text": "Advanced Filter",
  "settings.filter.advanced.note":
    "Add multiple terms by using common search operators.",
  "settings.filter.advanced.footerHint": "Need advanced options?",
  "settings.filter.action.button": "Apply an Action",
  "settings.filter.preview.hint": "Preview This Filter",
  "settings.filter.applyFilter": "Apply to existing messages.",
  "settings.filter.criteria.from": "From",
  "settings.filter.criteria.to": "To",
  "settings.filter.criteria.subject": "Subject Includes",
  "settings.filter.criteria.query": "Have the Words",
  "settings.filter.action.status": "Status",
  "settings.filter.action.read.label": "Mark as Read",
  "settings.filter.action.archive.label": "Mark as Done",
  "settings.filter.action.label.label": "Add Label",
  "settings.filter.action.label.placeholder": "Choose Label",
  "settings.filter.action.forward.label": "Forward To",
  "settings.filter.action.forward.placeholder": "Choose forward address",
  "settings.filter.action.forward.note":
    "Note: Existing threads will not be forwarded",
  "settings.filter.action.spam.label": "Never Mark as Spam",
  "settings.filter.action.spam.note":
    "Note: Filter will not be applied to existing threads in Spam and Trash",
  "settings.filter.action.forward.emptyList":
    "No available forwarding addresses. <1>Add forwarding address</1>",
  "settings.filter.error.create": "Failed to create filter.",
  "settings.filter.error.update": "Failed to update filter.",
  // Vacation Responder
  "settings.vacationResponder.label": "Set Away Message",
  "settings.vacationResponder.description":
    "Set up an automated message when you are away. Select an optional end date or manually disable this message upon your return.",
  "settings.vacationResponder.start": "Start Date",
  "settings.vacationResponder.end": "End Date",
  // Contacts
  "settings.contacts.empty.title":
    "There are no emails between you and this sender.",
  "settings.contacts.empty.subtitle":
    "Send some messages and they'll show up here.",
  "settings.contacts.block.empty.title":
    "You don't have any blocked contacts yet",
  "settings.contacts.block.empty.subtitle":
    "If you block senders, you can edit or unblock them here.",
  "contacts.suggestedBlock.title": "Suggested Inbox Clean Up",
  "contacts.suggestedBlock.description":
    "You rarely open emails from {{ name }}. Would you like to block these emails?",
  "contacts.approved.empty.title": "You don't have any contacts yet",
  "contacts.approved.empty.subtitle":
    "Send or receive emails and your contacts will show up here.",
  "contacts.blocked.empty.title": "You don't have any blocked contacts yet",
  "contacts.blocked.empty.subtitle":
    "If you block senders, you can edit or unblock them here.",
  "contacts.pending.empty.title": "You have no pending contacts to accept",
  "contacts.pending.empty.subtitle":
    "Once you receive emails from new contacts, they will appear here.",
  "contacts.search.empty.title": "No results found.",
  "contacts.subsection.approved": "Approved",
  "contacts.subsection.blocked": "Blocked",
  "contacts.subsection.pending": "Pending",
  "contact.detail.email.empty": "No other emails from this sender.",
  "contact.detail.photo.empty": "No photos from this sender.",
  "contact.detail.file.empty": "No files from this sender.",
  // Domain
  "settings.domain.branding.title": "Branding Assets",
  "settings.domain.branding.desc": `Customize your company's presence for your senders. These assets will be used in public facing transfer pages.`,
  "settings.domain.branding.company.name": "Company Name",
  "settings.domain.branding.color": "Brand Color",
  "settings.domain.branding.icon": "Icon",
  "settings.domain.branding.icon.recommended": "(512x512 recommended)",
  "settings.domain.branding.logo": "Logo",
  "settings.domain.branding.logo.recommended": "(at least 200x50 recommended)",
  "settings.domain.subaccount.emailaddress": "Domain Users",
  "settings.domain.subaccount.newaccount": "Add a new user",
  "settings.domain.disconnect.title": "Disconnect Domain",
  "settings.domain.disconnect.description":
    "This action will permanently delete all accounts associated with {{ domain }}.",
  "settings.domain.disconnect.confirm.title": "Are you sure?",
  "settings.domain.disconnect.confirm.description":
    "<0>This action will permanently delete all accounts associated with {{ domain }}. You will no longer be able to create these accounts using OnMail.</0><0>This should only be done if you are absolutely sure.</0>",
  "settings.domain.disconnect.confirm.label":
    "Type in <0>{{ domain }}</0> to confirm.",
  "settings.domain.disconnect.confirm.placeholder":
    "Enter Domain to Disconnect",

  // Custom Domain
  "settings.customDomain.subAccountDetail.passwordReset.title":
    "password reset",
  "settings.customDomain.subAccountDetail.passwordReset.description":
    "Passwords can be reset for users in case they got locked out of their account.",
  "settings.customDomain.subAccountDetail.passwordReset.button":
    "Generate password reset link",
  "settings.customDomain.subAccountDetail.dangerZone": "Danger Zone",
  "settings.customDomain.subAccountDetail.dangerZone.title": "account deletion",
  "settings.customDomain.subAccountDetail.dangerZone.description":
    "This action is irreversible, and the user will lose access to their account. This account name cannot be used again.",
  "settings.customDomain.subAccountDetail.dangerZone.button":
    "Delete this account",
  "settings.customDomain.subAccountDetail.deletionConfirm.title":
    "Are you sure?",
  "settings.customDomain.subAccountDetail.deletionConfirm.description":
    "Type in the email address below to confirm deletion. This will permanently delete this account.",
  "settings.customDomain.subAccountDetail.deletionConfirm.placeholder":
    "Enter Email Address",
  "settings.customDomain.subaccountDetail.deletionConfrim.failed":
    "Failed to delete this account. Please try again later, or contact us via support.onmail.com.",
  "settings.customDomain.newAccount.title": "Add a new user",
  "settings.customDomain.newAccount.success": "Success!",
  "settings.customDomain.newAccount.email": "email address",
  "settings.customDomain.newAccount.email.invalid":
    "Email address should not contain invalid characters.",
  "settings.customDomain.newAccount.invitationLink": "invitation link",
  "settings.customDomain.convertEmail.form.title":
    "Create a custom domain email address",
  "settings.customDomain.convertEmail.form.description":
    "You may login to OnMail with either {{ email }} or your new custom domain email address.",
  "settings.customDomain.convertEmail.form.warning":
    "This operation is irreversible. Once the email address is created, you cannot change it.",
  "settings.customDomain.convertEmail.confirm": `Once you press confirm, you'll be logged out. Please login again with <0>{{ email }}</0>.`,
  "settings.customDomain.convertEmail.button": "Create your email address",
  "settings.customDomain.error.length":
    "Email address must be at least {{ minChars }} characters.",
  "settings.customDomain.error.invalidEmail": "Invalid email address.",
  "settings.customDomain.error.duplicated":
    "This email already exists, please choose a different one.",
  "settings.customDomain.subsection.branding": "Branding",
  "settings.customDomain.subsection.accounts": "Email Addresses",
  "settings.customDomain.subsection.manage": "Manage DNS",
  "settings.customDomain.subsection.settings": "Settings",

  // - DNS RECORDS
  "settings.customDomain.records.header": "DNS Manager",
  "settings.customDomain.records.description":
    "OnMail is flexible, adjust your DNS records to add new services to your domain.",
  "settings.customDomain.records.labels.header.host": "Host",
  "settings.customDomain.records.labels.header.ttl": "TTL",
  "settings.customDomain.records.labels.header.type": "Type",
  "settings.customDomain.records.labels.header.value": "Value",
  "settings.customDomain.records.add.header": "Create a new DNS record",
  "settings.customDomain.records.labels.type": "Record Type",
  "settings.customDomain.records.labels.placeholder": "Select a type",
  "settings.customDomain.records.view.remove": "Delete this record",
  "settings.customDomain.records.view.header": "{{ type }} Record",
  "settings.customDomain.records.view.featureError.landingPage":
    "Removing this record will remove your branded landing page.",
  "settings.customDomain.records.view.featureError.restricted":
    "This record is used by OnMail for custom domain functionalities.",
  "settings.customDomain.records.add.error":
    "An error occurred when adding this custom domain record.",

  // NS
  "settings.customDomain.records.labels.NS": "NS",
  "settings.customDomain.records.labels.NS.name": "Host",
  "settings.customDomain.records.labels.NS.data": "Points to",
  "settings.customDomain.records.labels.NS.ttl": "TTL",

  // A
  "settings.customDomain.records.labels.A": "A",
  "settings.customDomain.records.labels.A.name": "Host",
  "settings.customDomain.records.labels.A.data": "Points to",
  "settings.customDomain.records.labels.A.ttl": "TTL",

  // CNAME
  "settings.customDomain.records.labels.CNAME": "CNAME",
  "settings.customDomain.records.labels.CNAME.name": "Host",
  "settings.customDomain.records.labels.CNAME.data": "Points to",
  "settings.customDomain.records.labels.CNAME.ttl": "TTL",

  // MX
  "settings.customDomain.records.labels.MX": "MX",
  "settings.customDomain.records.labels.MX.name": "Host",
  "settings.customDomain.records.labels.MX.data": "Points to",
  "settings.customDomain.records.labels.MX.priority": "Priority",
  "settings.customDomain.records.labels.MX.ttl": "TTL",

  // TXT
  "settings.customDomain.records.labels.TXT": "TXT",
  "settings.customDomain.records.labels.TXT.name": "Host",
  "settings.customDomain.records.labels.TXT.data": "TXT value",
  "settings.customDomain.records.labels.TXT.ttl": "TTL",

  // SRV
  "settings.customDomain.records.labels.SRV": "SRV",
  "settings.customDomain.records.labels.SRV.service": "Service",
  "settings.customDomain.records.labels.SRV.protocol": "Protocol",
  "settings.customDomain.records.labels.SRV.name": "Name",
  "settings.customDomain.records.labels.SRV.data": "Target",
  "settings.customDomain.records.labels.SRV.priority": "Priority",
  "settings.customDomain.records.labels.SRV.weight": "Weight",
  "settings.customDomain.records.labels.SRV.port": "Port",
  "settings.customDomain.records.labels.SRV.ttl": "TTL",

  // CAA
  "settings.customDomain.records.labels.CAA": "CAA",
  "settings.customDomain.records.labels.CAA.name": "Name",
  "settings.customDomain.records.labels.CAA.flags": "Flags",
  "settings.customDomain.records.labels.CAA.tag": "Tag",
  "settings.customDomain.records.labels.CAA.data": "Value",
  "settings.customDomain.records.labels.CAA.ttl": "TTL",

  // AAAA
  "settings.customDomain.records.labels.AAAA": "AAAA",
  "settings.customDomain.records.labels.AAAA.name": "Host",
  "settings.customDomain.records.labels.AAAA.data": "Points to",
  "settings.customDomain.records.labels.AAAA.ttl": "TTL",

  "settings.customDomain.records.domainManagedExternally":
    "DNS managed externally",
  "settings.customDomain.records.domainManagedExternally.p":
    "Your DNS is managed by a third-party provider.",
  "settings.customDomain.records.domainManagedExternally.image":
    "https://assets.easilydo.com/onmail/custom-domain-dns-managed-externally.png",
  "settings.customDomain.error.pendingDowngrade":
    "Your account has a pending downgrade, we cannot perform this action at this time. Please contact us via support.onmail.com if you have any questions.",
  "settings.customDomain.error.pendingCancellation":
    "Your account has a pending cancellation, we cannot perform this action at this time. Please contact us via support.onmail.com if you have any questions.",
  "settings.customDomain.error.insufficientFunds":
    "Your payment method has insufficient funds. Please update your payment method in Settings.",

  "settings.customDomain.verify.domainManagedByOnMail":
    "Domain Managed by OnMail",
  "settings.customDomain.verify.domainManagedByOnMail.image":
    "https://assets.easilydo.com/onmail/custom-domain-dns-managed-by-onmail.png",

  "settings.customDomain.setup.verification.header": "Domain Verification",
  "settings.customDomain.setup.verification.description": `To use a custom domain that you own with OnMail, we need to verify that you really own the domain. Please verify there are green checkmarks next to the DNS records' name. <0>Learn more</0>`,

  "settings.customDomain.setup.mailRecord.header": "Mail Records",
  "settings.customDomain.setup.mailRecord.description": `Designate OnMail mail servers to send/receive emails on your behalf. Please verify there are green checkmarks next to the DNS records' name. <0>Learn more</0>`,

  "settings.customDomain.setup.customBranding.header":
    "Custom Branding Records",
  "settings.customDomain.setup.customBranding.description": `Gain access to our web interface and file transfer page via the custom domain. Enter the corresponding CNAME records, and verify there are green checkmarks next to the DNS records' name. <0>Learn more</0>`,

  "settings.customDomain.setup.faq":
    "https://support.onmail.com/hc/en-us/articles/360051750012-Custom-Domain-Guide",

  "settings.customDomain.setup.entry.header.type": "Type",
  "settings.customDomain.setup.entry.header.host": "Host",
  "settings.customDomain.setup.entry.header.ttl": "TTL",
  "settings.customDomain.setup.entry.header.priority": "Priority",
  "settings.customDomain.setup.entry.header.data": "Enter this",
  "settings.customDomain.setup.entry.header.cached": "Current value",
  "settings.customDomain.setup.retry": "Retry Verification",
  "settings.customDomain.setup.disconnect.header": "Disconnect Domain",
  "settings.customDomain.setup.disconnect.description":
    "This action will permanently delete all accounts associated with {{ domain }}.",
  "settings.customDomain.setup.disconnect.button": "Disconnect Domain",
  "settings.customDomain.setup.copied":
    "Record value has been copied to your clipboard.",
  "settings.customDomain.setup.warning": `Your domain has unverified DNS records. Custom domain features may be limited right now.`,
  "settings.customDomain.setup.warning.admin": `<0>Go toSettings</0>`,
  "settings.customDomain.setup.warning.subaccount": `Please notify the administrator.`,

  "settings.securityPrivacy.title": "Security and Privacy",
  "settings.securityPrivacy.optIn.title": "Enable data sharing",
  "settings.securityPrivacy.optIn.description":
    "Data makes our technology work better for you. You can opt-out of data sharing at any time.",
  "settings.securityPrivacy.delete.title": "Delete my account",
  "settings.securityPrivacy.delete.description":
    "At any time, you can discontinue use of this service and delete the information in this account and on our servers.",
  "settings.securityPrivacy.dataExport.title": "Export my data",
  "settings.securityPrivacy.dataExport.description":
    "Easily access all data associated with your OnMail account in a downloadable zip file.",

  "dataExport.beforeRequest.image":
    "https://assets.easilydo.com/onmail/email-assets/security-export-data.jpg",
  "dataExport.beforeRequest.title": "What’s included in my data export?",
  "dataExport.beforeRequest.description":
    "Your OnMail data export contains all information saved to OnMail including emails, attachments, contacts, and personal data. The export link will be delivered to",
  "dataExport.requested.image":
    "https://assets.easilydo.com/onmail/data-export.png",
  "dataExport.requested.title": "Data export requested",
  "dataExport.requested.description":
    "This process can take up to 24-48 hours to complete. When finished, you’ll receive an email with an export download link at",

  "dataExport.downloadSuccess.title": "Your export is ready",
  "dataExport.downloadSuccess.image":
    "https://assets.easilydo.com/onmail/email-assets/security-export-data.jpg",
  "dataExport.downloadSuccess.description":
    "Click the links below to download your data.",
  "dataExport.downloadSuccess.warning":
    "Warning: For your security, we recommend you do not share your export links that may contain your personal or sensitive information.",

  "dataExport.downloadFailure.title":
    "This link is not associated with this OnMail account",
  "dataExport.downloadFailure.image":
    "https://assets.easilydo.com/onmail/email-assets/security-export-data.jpg",
  "dataExport.downloadFailure.description": `You may be logged in with a different account. Please log in with the correct account to access your data export.\nContact us via <0>support.onmail.com</0> for help.`,

  "dataExport.failure.tooltip":
    "There was an issue with data export, please contact us via support.edison.tech for more information.",

  // Approve Sender
  "approveSender.senderCard.text": "Contact Request",
  "approveSender.approve.error": "Failed to approve. Please try again.",
  "approveSender.block.prompt":
    "All messages from this sender will be sent to the Trash.",
  "approveSender.block.error": "Failed to block. Please try again.",
  "approveSender.thread.error":
    "Threads from this sender are not available to review.",

  // Compose
  "compose.beforeUnload": "Changes you made may not be saved.",
  "compose.send.error.exceedMaxSize":
    "Your message could not be saved because it exceeds the maximum size of {{ maxSize }}.",
  "compose.send.error.noRecipient": "Please specify at least one recipient.",
  "compose.send.error.wrongRecipient": "Some address field was not recognized.",
  "compose.send.error.exceedMaxRecipientCount":
    "Total recipients cannot exceed {{ maxCount }}.",
  "compose.send.confirm.emptyBodyOrSubject":
    "Send this message without a subject or text in the body?",
  "compose.send.confirm.errorAttachment":
    "Note: There were errors attaching your file(s). Send this message without these attachments?",
  "compose.send.confirm.uploadingAttachment":
    "Message will be sent after attachments have finished uploading.",

  "compose.tip.saved": "Draft Saved",
  "compose.tip.saving": "Draft Saving...",

  "compose.label.to": "To",
  "compose.label.cc": "Cc",
  "compose.label.bcc": "Bcc",
  "compose.label.subject": "Subject",
  "compose.label.emptyRecipient": "Recipients",

  "uploadDialog.title": "Upload a file",
  "uploadDialog.dragAndDrop": "Drag and drop your files anywhere, or",
  "uploadDialog.recentUploads": "Recent Uploads",
  "uploadDialog.noAnyUploads": "No recent uploads.",

  "compose.upload.error.emptySize":
    "{{ fileName }} is 0 bytes, so it will not be attached. Please re-attach your files again without {{ fileName }}.",
  "compose.upload.error.wrongType": "Invalid file type",
  "compose.upload.error.maxSize":
    "The total size of your attachments cannot be larger than 25MB.",
  "compose.upload.error.virusDetected": "Virus Detected",
  "compose.upload.warning.scanningFailed": "Scanning Failed",
  "compose.upload.error.failed": "Upload Failed",
  "comopse.upload.error.exceedTotalSize":
    "Total usage cannot exceed {{ total }}.",

  "compose.attachmentBox.subject": "{{ count }} Upload Remaining",
  "compose.attachmentBox.subject_plural": "{{ count }} Uploads Remaining",
  "compose.attachmentBox.tip":
    "Pending messages will be sent after upload is completed.",
  "compose.attachmentBox.tip2":
    "Your attachments are over 25MB and will be sent as a link.",
  "compose.attachmentBox.uploadComplete": "Upload Completed",
  "compose.attachmentBox.uploadError": "Error uploading attachments",
  "compose.attachmentBox.uploadErrorExpand":
    "There was an issue with your upload.",
  "compose.attachmentBox.passwordProtection": "Enable password protection",
  "compose.attachmentBox.beforeUnload":
    "If you leave this page the upload will be canceled and your message will not be sent.",

  "compose.toast.uploading":
    "Message will send after attachments are done uploading.",
  "compose.toast.sending": "Message sending...",
  "compose.toast.sendSuccess": "Message sent",
  "compose.toast.sendFailure": "Failed to send",
  "compose.toast.canceling": "Canceling...",
  "compose.toast.undoing": "Undoing...",
  "compose.toast.cancelFailure": "Cancel failed. Message may have been sent.",
  "compose.toast.cancelSuccess": "Sending canceled.",
  "compose.toast.undoSuccess": "Sending undone.",
  "compose.toast.undoFailure": "Undo failed. Message sent.",
  "compose.toast.networkError":
    "Message could not be sent. Check your network and try again.",
  "compose.toast.attachFailure": "There was an error attaching your image.",

  "compose.dropFile": "Drop files here.",

  // Search
  "search.moreIn.tips":
    "Some messages in Trash or Spam match your search. <1>View Messages</1>.",
  "search.recommendations.contacts": "Contacts",
  "search.recommendations.files": "Files",
  "search.recommendations.photos": "Photos",
  "search.recommendations.noResults.title": "No Results",
  "search.recommendations.noResults.message":
    "We couldn't find anything matching your search term.",

  // Search Operators
  "search.operators.or.desc": "Results match multiple terms.",
  "search.operators.and.desc": "Results match all terms.",
  "search.operators.not.desc":
    "Results do not match the specified search term.",

  // Search result count
  "search.results": "{{ count }} Result",
  "search.results_plural": "{{ count }} Results",

  // Price Alert
  "priceAlert.itemList.title": "Tracking price drops",
  "priceAlert.status.noRefundFound": "No Refund Found",
  "priceAlert.status.claimRefund": "Claim Refund",
  "priceAlert.status.tracking": "Tracking...",
  "priceAlert.status.refundRequested": "Refund Requested",
  "priceAlert.status.expired": "Expired",
  "priceAlert.detail.tracking": "Tracking...",
  "priceAlert.detail.claimRefund": "{{ price }} refund found!",
  "priceAlert.detail.refundRequested": "{{ price }} refund requested.",
  "priceAlert.note.tracking": `Monitoring this purchase for price drops over the next 30 days.\nWe’ll let you know if the price drops so you can request a refund for the difference.`,
  "priceAlert.note.claimRefund": `An item you bought has dropped in price!\nClick the button below and request a refund for the difference.`,
  "priceAlert.note.refundRequested": `Your claim has been sent and can take several business days to process.\nRefunds are issued to your original form of payment.`,
  "priceAlert.claim.success": `Refund request sent!\n{{ brokerName }} should process your request in\nthe next few business days.`,
  "priceAlert.card.title": "{{ name }} dropped in price!",
  "priceAlert.card.purchaseDate": "{{ brokerName }} purchase on {{ date }}",

  // Feed view thread list
  "feedView.title": "Feed View",
  "feedView.description":
    "<0>Give your newsletters and promotions a face left.</0><0>Browse them in the new feed and mark them all as done in one click.</0>",

  // Thread list actions
  "thread.actions.archive": "Done",
  "thread.actions.unarchive": "Move to Inbox",
  "thread.actions.read": "Mark as Read",
  "thread.actions.unread": "Mark as Unread",
  "thread.actions.trash": "Move to Trash",
  "thread.actions.untrash": "Move to Inbox",
  "thread.actions.deleteForever": "Delete Forever",
  "thread.actions.notSpam": "Not Spam",
  "thread.actions.markAsSpam": "Mark as Spam",
  "thread.actions.discardDraft": "Discard Drafts",
  "thread.actions.addLabel": "Add to Label",
  "thread.actions.removeLabel": "Remove Current Label",

  //thread default value
  "thread.recipient.none": "No Recipient",
  "thread.subject.none": "(no subject)",
  "thread.tip.deletedMessages": `{{ count }} deleted message in this conversation. <3><0>View Message</0> or <4>Delete Forever</4></3>`,
  "thread.tip.deletedMessages_plural": `{{ count }} deleted messages in this conversation. <3><0>View Messages</0> or <4>Delete Forever</4></3>`,
  "thread.tip.foldMessage": "Click to expand more messages",
  "thread.tip.sendAsLinks": "Attachments sent as a link",

  "thread.error.deletedConversation":
    "The requested conversation has been deleted and is no longer available.",

  "threadList.selectAllThreads.selectAll": "Select All",
  "threadList.selectAllThreads.selectUniverse":
    "Select all {{numUniverse}} threads in {{label}}?",
  "threadList.selectAllThreads.numSelected":
    "You've selected {{numSelected}} thread.",
  "threadList.selectAllThreads.numSelected_plural":
    "You've selected {{numSelected}} threads.",
  "threadList.selectAllThreads.numUniverse":
    "{{numUniverse}} thread in {{label}} is selected.",
  "threadList.selectAllThreads.numUniverse_plural":
    "All {{numUniverse}} threads in {{label}} are selected.",
  "threadList.selectAllThreads.cancel": "Cancel",

  // Sifts
  "sifts.button.trackPackage": "Track Package",
  "sifts.modals.hotel.checkin": "Check In",
  "sifts.modals.hotel.checkout": "Check Out",
  "sifts.modals.cruise.departs": "Departs",
  "sifts.modals.cruise.returns": "Returns",
  "sifts.modals.rentalcar.pickup": "Pick Up",
  "sifts.modals.rentalcar.dropoff": "Drop Off",

  // Large Attachment
  "largeAttachment.error.exceedMaxFileSize":
    "File size can't exceed {{ maxSize }}.",
  "largeAttachment.error.exceedMaxFileNumber":
    "Total file number can't exceed {{ maxNumber }}.",
  "largeAttachment.error.exceedMaxUsage":
    "File usage can't exceed {{ maxUsage }} in composer.",
  "largeAttachment.error.exceedMaxTotalUsage":
    "Total file usage can't exceed {{ maxTotalUsage }}.",

  // Preview
  "preview.notAvaliable": "No preview available",
  "preview.fileInfo": "File Information",
  "preview.fileInfo.title": "File Information",
  "preview.fileInfo.type": "Type",
  "preview.fileInfo.size": "Size",
  "preview.newWindow": "Open in a new window",
  "preview.passwordProtected": `Enter this document\'s password to view it.`,
  "preview.passwordProtected.label": "Password",
  "preview.fileType.audio": "Audio",
  "preview.fileType.book": "Book",
  "preview.fileType.calendar": "Calendar",
  "preview.fileType.code": "Code",
  "preview.fileType.doc": "Document",
  "preview.fileType.font": "Font",
  "preview.fileType.image": "Image",
  "preview.fileType.pdf": "PDF",
  "preview.fileType.presentation": "Presentation",
  "preview.fileType.spreadsheet": "Spreadsheet",
  "preview.fileType.video": "Video",
  "preview.fileType.archive": "Archive",
  "preview.fileType.other": "Other",

  // Email Nudge
  "nudge.reply": "Received {{ count }} day ago. Reply?",
  "nudge.reply_plural": "Received {{ count }} days ago. Reply?",
  "nudge.reply_interval": "(0){Received today. Reply?}",
  "nudge.followup": "Sent {{ count }} day ago. Follow Up?",
  "nudge.followup_plural": "Sent {{ count }} days ago. Follow Up?",
  "nudge.followup_interval": "(0){Sent today. Follow Up?}",
  "nudge.dismiss": "Dismiss",

  // Onboarding
  "onboarding.backgroundImage":
    "https://assets.easilydo.com/onmail/onmail-landing-bg.jpg",
  "onboarding.welcome.0.title": "Welcome to your new inbox",
  "onboarding.welcome.0.subtitle.0": "Your new email address",
  "onboarding.welcome.0.subtitle.1": "<1>{{ email }}</1> is ready to use!",
  "onboarding.welcome.1.title": "Accept Senders",
  "onboarding.welcome.1.subtitle.0": "You decide who enters your inbox.",
  "onboarding.welcome.1.subtitle.1":
    "Simply accept or block email requests with one click.",
  "onboarding.welcome.2.title": "Quick Actions",
  "onboarding.welcome.2.subtitle.0": "Take your time back.",
  "onboarding.welcome.2.subtitle.1":
    "Say goodbye to decision fatigue, simplified actions are up front.",
  "onboarding.welcome.3.title": "Large File Attachments",
  "onboarding.welcome.3.subtitle.0": "Share bigger ideas.",
  "onboarding.welcome.3.subtitle.1":
    "Don’t worry about file size stopping you.",
  "onboarding.welcome.4.title": "Split Inbox",
  "onboarding.welcome.4.subtitle.0": "Keep messages organized.",
  "onboarding.welcome.4.subtitle.1":
    "Create inbox sections whenever you need to, easily.",
  "onboarding.welcome.finish": `Let's Go!`,

  // Error Boundary Messages
  "error.application.title": "Oops!",
  "error.application.subtitle[0]": "Looks like something went wrong.",
  "error.application.subtitle[1]":
    "Try again or contact us if this error persists.",
  "error.application.contact": "Contact Support",
  "error.application.retry": "Try Again",

  //Message
  "message.markedAsSpam": "Marked as Spam",
  "message.readReceiptBlocking.pass":
    "No tracking pixels were found in this message.",
  "message.readReceiptBlocking.tip":
    "Email tracking is being blocked for this message.",
  "message.tip.deleted": "This message has been deleted.",
  "message.action.print": "Print",
  "message.action.showOriginal": "Show Original",
  "message.action.advanced": "Advanced",
  "message.readReceiptBlocking.title":
    "We blocked a spy tracker in this email.",
  "message.readReceiptBlocking.body": `This message uses hidden images used to track if an email is opened and how often it is reopened. The sender will know where you are located and the device you used to open it. We have blocked this automatically but feel it is important to notify you of this sender’s behavior.`,
  "message.suspiciousDetecting.pass": "Message passed standard security audit.",
  "message.suspiciousDetecting.tip":
    "This message looks suspicious, proceed with caution.",
  "message.suspiciousDetecting.title": "This email looks suspicious",
  "message.suspiciousDetecting.body":
    "This email did not pass the OnMail security scan. The scan checks email headers for SPF/DKIM/DMARC/ARC records as well as domain verifications. Emails that fail these tests can sometimes be phishing attempts to gather personal information. Please be careful with this message.",

  //Download
  "download.error.notAvailable": "The attachment link is not available.",
  "download.tip.attachmentNotAvailable": "Attachment not available",
  "download.tip.attachmentNotAvailableDetail":
    "This file is no longer available. It has been deleted by the owner.",
  "download.tip.bottom": "Made with love by Edison Software.",
  "download.tip.filesFrom": "Attachments from {{ email }}",
  "download.tip.filesRelated": "{{ size }}, {{ number }} attachments.",
  "download.tip.freeSend": "Send large attachments for free.",
  "download.tip.createAccount": "Create your free OnMail account.",
  "download.tip.poweredBy": "Powered by",
  "download.oops":
    "<0>Oops!</0><1>The page you're looking for is no longer available.</1>",
  "download.password.title": "These files are password-protected",
  "download.password.detail":
    "Only people with the password will be able to view and download these attachments.",

  // Custom Domains
  "customDomain.search.label": "Claim your domain",
  "customDomain.search.placeholder": "Type to search",
  "customDomain.searchUsername.label": "Enter an address",
  "customDomain.searchDomain.label": "Find your own domain (optional)",
  "customDomain.searchDomain.placeholder": "onmail.com",
  "customDomain.searchDomain.onmailPlan": "OnMail Plan",
  "customDomain.searchDomain.invalidDomain":
    "The domain you have searched for is invalid.",
  "customDomain.purchase": "Claim",
  "customDomain.unavailable": "Unavailable",
  "customDomain.purchaseError": `There's an issue with purchasing this domain, please try again later, or contact us via support.onmail.com.`,
  "customDomain.dnsInfo.type": "Type",
  "customDomain.dnsInfo.host": "Host",
  "customDomain.dnsInfo.ttl": "TTL",
  "customDomain.dnsInfo.data": "Data",
  "customDomain.domainInput.title": "Connect your domain",
  "customDomain.domainInput.subtitle":
    "If you already own a domain, enter it here to use with OnMail.",
  "customDomain.dnsSetup.title": "Domain Setup",
  "customDomain.dnsSetup.subtitle":
    "Add the following text records in order to verify domain ownership.",
  "customDomain.pendingVerification.title": "Verifying Domain",
  "customDomain.pendingVerification.subtitle": `We're setting up your domain name, this may take a few minutes. If you're impatient, you can tap the button below to ping the system.`,
  "customDomain.pendingVerification.view": "View DNS Instructions",
  "customDomain.pendingVerification.retry": "Retry Verification",
  "customDomain.pendingSetup.title": "Setting up {{ domain }}",
  "customDomain.pendingSetup.subtitle": "This should only take a few minutes.",
  "customDomain.pendingSetup.takingLonger":
    "Taking longer? <2>Contact Support</2>",
  "customDomain.pendingVerification.remove": "Remove Domain",
  "customDomain.verification.success": "Domain has been verified successfully.",
  "customDomain.verification.hosted.failure": `We're still setting up your domain, it should be ready in 5 to 15 minutes!`,
  "customDomain.verification.userOwned.failure":
    "Domain verification failed, please update your DNS records accordingly.",

  "customDomain.entry.title": "Create a custom email address",
  "customDomain.entry.title.tips":
    "A faster, easier way to build your unique brand",
  "customDomain.entry.getDomain": "Get your own domain",
  "customDomain.entry.connectDomain":
    "I want to connect my existing custom domain →",
  "customDomain.entry.description":
    "OnMail makes it simple to acquire your own custom domain and make your own email address. Do it in just one click. Finally, an online identity you can keep forever.",
  "customDomain.entry.step1": "Step 1",
  "customDomain.entry.step1.description":
    "Choose a domain from countless available options. Standard domain prices are included for free in the OnMail Freelance, Professional, and Business plans.",
  "customDomain.entry.step2": "Step 2",
  "customDomain.entry.step2.description":
    "Once you have chosen your new domain, create your brand new email address.",
  "customDomain.entry.footer":
    "That’s it! We take care of the rest. Your new address and custom domain will be ready in a few minutes.",
  "customDomain.signup.invalidInvite":
    "Invalid/expired invitation link, please obtain a new link from your admin.",
  "customDomain.subaccount.status.DISABLED": "Invite Pending",
  "customDomain.subaccount.status.ACTIVE": "Active",
  "customDomain.subaccount.status.SOFT_DELETED": "Deleted",
  "customDomain.signup.whatsYourName": `What's Your Name?`,
  "customDomain.premiumDomains": `Premium Domains`,
  "customDomain.description.title": `Custom Domain Pricing`,
  "customDomain.description.content": `Most common domains are included for free in OnMail premium plans. There are also premium domains available for purchase which have an additional yearly fee based on the value of the domain.`,
  "customDomain.connect.userDomain.exists":
    "This domain name is already taken.",
  "customDomain.connect.userDomain.invalid":
    "This is an invalid domain name. Please contact us through support.onmail.com if you require assistance.",
  // Fake account creation modal
  fakeAccountCreation: "{{ name }} just created <1>{{ email }}</1>",

  // Premium
  "premium.plans.header": "Plans",
  "premium.confirmUpgrade.title": `Are you sure you'd like to upgrade to the {{ plan }} plan? You'll now be charged {{ price }}/month/user.`,
  "premium.confirmDowngrade.title": `Are you sure you'd like to downgrade to the {{ plan }} plan?`,
  "premium.confirmDowngrade.subtitle": `You'll lose all the perks you previously had.`,
  "premium.upgrade": "Upgrade",
  "premium.downgrade": "Downgrade",

  "premium.features.fileStorage": "{{ size }} Storage",
  "premium.features.singleFileSizeLimit":
    "{{ size }} Attachment File Size Limit",
  "premium.features.customDomain": "Free Custom Domain Included",
  "premium.features.passwordProtectedLargeFileLinks":
    "Password Protected Large File Links",
  "premium.features.brandedFileTransferPage": "Branded File Transfer Pages",
  "premium.features.customFileTransferUrl": "Custom File Transfer URL",
  "premium.features.adminDashboard": "Additional Domain Users",
  "premium.features.premiumSupport": "Premium Support",
  "premium.payment.purchase.header": "Add a Payment Method",
  "premium.payment.update.header": "Manage Payment Method",
  "premium.payment.info":
    "Your {{ name }} plan is <0>{{ price }}/{{ interval }}/user</0> and will renew on <0>{{ renewDate }}</0>.",
  "premium.payment.settings.error": `We were unable to process your most recent payment. Please re-enter your payment information. If we're unable to process your payment before your renewal date, you will be downgraded to the Personal plan. <0>Learn More</0>.`,
  "premium.payment.error": `Sorry it looks like something went wrong. Please contact us via support.onmail.com to get to the bottom of this.`,
  "premium.payment.errorBanner":
    "There was a problem processing your payment. Please verify your payment information or use a different form of payment.",
  "premium.payment.errorBanner.goToSettings": "Go to Settings",
  "premium.managedByAdmin": "Your account is managed by your administrator.",
  "premium.setup.infoBanner": `We are currently setting up your account. This may take a few minutes, but you’ll be able to send and receive emails soon.`,
  "premium.storage.errorBanner": `Sorry, you're out of storage space! We've all been there. Upgrade now to continue storing new files and allow sending and receiving emails.`,
  "premium.storage.errorBanner.upgrade": "Upgrade",
  "premium.storage.warningBanner": `You're almost out of storage space. Upgrade now to continue storing new files and allow sending and receiving emails before space runs out.`,
  "premium.storage.warningBanner.upgrade": "Upgrade",
  "premium.upcoming":
    "Upcoming means that this will be your new plan after your current billing cycle.",
  "premium.notAvailable":
    "If you would like to switch to this plan, please contact us via support.onmail.com.",
  "premium.billingHistory.title": "Billing History",
  "premium.billingHistory.subtitle":
    "If you notice any issues with your billing history, please <0>contact us</0>.",

  // Downgrade warnings
  "criticalWarning.title": "Please read carefully before proceeding",
  "criticalWarning.subtitle.domain":
    "Disconnecting a domain will cause major changes to your account.",
  "criticalWarning.subtitle.premium":
    "Downgrading will cause major changes to your account.",
  "criticalWarning.items.allowSubaccounts":
    "All additional email accounts associated with the custom domains will be permanently deleted.",
  "criticalWarning.items.fileStorage":
    "If your account exceeds the storage limit you will not be able to send or receive messages.",
  "criticalWarning.items.customFileTransferUrl":
    "Attachments sent using a custom domain link will no longer be accessible.",
  "criticalWarning.items.customDomain":
    "You will no longer be able to login with your {{ domain }} account, you will need to login using onmail.com after the domain is removed from your account. <0>Learn More</0>",
  "criticalWarning.items.passwordProtectedLargeFileLinks":
    "You will no longer be able to password protect large attachment links.",
  "criticalWarning.confirmation":
    "I understand the risks and want to continue.",
  "criticalWarning.premium.downgrade": "Downgrade my account",
  "criticalWarning.domain.disconnect": "Disconnect this domain",

  //Smart Reply
  "smartReply.feedback.sending": "Sending feedback...",
  "smartReply.feedback.sendSuccess": "Thank you for your feedback.",
  "smartReply.feedback.sendFailure": "Feedback failed to send.",
  "smartReply.feedback.toast": "Was this helpful?",

  // Paywalls

  // - Custom File Transfer URL
  "paywall.customFileTransferUrl.title": "Customize It",
  "paywall.customFileTransferUrl.subtitle": "Brand your attachment page",
  "paywall.customFileTransferUrl.children": `Replace the OnMail logo with your own brand so recipients know the file is from you.`,

  // - File Storage
  "paywall.fileStorage.title": "Make room for what matters",
  "paywall.fileStorage.subtitle": "You’re running out of storage!",
  "paywall.fileStorage.children": `Soon you won’t be able to store new files and you may not be able to send and receive emails. Upgrade now for more storage.`,
  "paywall.fileStorage.children.isFull": `Sorry, you're out of storage space! We've all been there. Upgrade now to continue storing new files and allow sending and receiving emails.`,

  // - Password Protected Large File Links
  "paywall.passwordProtectedLargeFileLinks.title":
    "Attachment link password protection",
  "paywall.passwordProtectedLargeFileLinks.subtitle":
    "Protect your attachment links with a password",
  "paywall.passwordProtectedLargeFileLinks.children": `Your attachment security is important. Keep any attachments safe with a password. Protected attachment links require recipients to enter the set password to access the attachment.`,

  // - Custom Domain
  "paywall.customDomain.title": `It's your email, make it yours`,
  "paywall.customDomain.subtitle": "Set up a custom domain",
  "paywall.customDomain.children": `Create your own email of any length by easily adding a custom domain to your email address. Stay on brand for your professional and personal projects to leave the impression you want.`,

  // - Single File Size Limit
  "paywall.singleFileSizeLimit.title": "Share bigger ideas",
  "paywall.singleFileSizeLimit.subtitle": "File too large to attach!",
  "paywall.singleFileSizeLimit.children": `Send large files without leaving your email, and avoid hitting a file size limit. Upgrade now to keep projects moving.`,

  // - Allow Subaccounts
  "paywall.allowSubaccounts.title": "Accounts for your team",
  "paywall.allowSubaccounts.subtitle": "Custom domain accounts for your team",
  "paywall.allowSubaccounts.children": `Add teammates to your custom domain. Control and manage accounts with admin permissions and present a unified front by keeping everyone on brand.`,

  // Subaccount paywall text
  "paywall.contactAdmin.title": `Oops! You'll need to contact your admin.`,
  "paywall.contactAdmin.subtitle":
    "Please contact <0>{{ admin }}</0> in order to change your plan.",
  "paywall.contactAdmin.confirm": "Okay, got it",

  // Contact Detail
  "contactDetail.attachments.title": "Attachments",
  "contactDetail.unblockTip":
    "This sender has been blocked. All future messages from this sender will be sent to trash.",
  "contactDetail.messages.title": "Messages",

  // Image Assets
  "no-results.png": "https://assets.easilydo.com/onmail/no-results.png",
  "empty-settings-attachment-link.png":
    "https://assets.easilydo.com/onmail/empty-settings-attachment-link.png",
  "empty-pending-contacts.png":
    "https://assets.easilydo.com/onmail/empty-pending-contacts.png",
  "empty-settings-contacts-blocked.png":
    "https://assets.easilydo.com/onmail/empty-settings-contacts-blocked.png",
  "empty-settings-contacts.png":
    "https://assets.easilydo.com/onmail/empty-settings-contacts.png",
  "empty-settings-filter.png":
    "https://assets.easilydo.com/onmail/empty-settings-filter.png",
  "empty-settings-label.png":
    "https://assets.easilydo.com/onmail/empty-settings-label.png",
  "empty-settings-split-inbox.png":
    "https://assets.easilydo.com/onmail/empty-settings-split-inbox.png",
  "error-dog.png": "https://assets.easilydo.com/onmail/error-dog.png",
  "no-preview-available.png":
    "https://assets.easilydo.com/onmail/no-preview-available.png",
  "onmail.png": "https://assets.easilydo.com/onmail/onmail.png",
  "placeholder-email.png":
    "https://assets.easilydo.com/onmail/placeholder-email.png",
  "placeholder-file.png":
    "https://assets.easilydo.com/onmail/placeholder-file.png",
  "placeholder-photo.png":
    "https://assets.easilydo.com/onmail/placeholder-photo.png",
  "welcome-0.png": "https://assets.easilydo.com/onmail/welcome-0.png",
  "welcome-1.mp4":
    "https://assets.easilydo.com/onmail/videos/accept-senders.mp4",
  "welcome-2.mp4":
    "https://assets.easilydo.com/onmail/videos/quick-actions.mp4",
  "welcome-3.mp4":
    "https://assets.easilydo.com/onmail/videos/large-file-attachments.mp4",
  "welcome-4.mp4": "https://assets.easilydo.com/onmail/videos/split-inbox.mp4",
  "no-attachment-available.png":
    "https://assets.easilydo.com/onmail/no-attachment-available.png",
  "read-receipt.png": "https://assets.easilydo.com/onmail/read-receipt.png",
  "drop-files.png": "https://assets.easilydo.com/onmail/drop-files.png",
  "custom-domain-disconnected.png":
    "https://assets.easilydo.com/onmail/custom-domain-disconnected.png",
  "custom-domain-new-email.png":
    "https://assets.easilydo.com/onmail/custom-domain-new-email.png",
  "custom-domain-pending.png":
    "https://assets.easilydo.com/onmail/custom-domain-pending.png",
  "custom-domain-intro.png":
    "https://assets.easilydo.com/onmail/custom-domain-intro.png",
  "custom-domain-setting-up.png":
    "https://assets.easilydo.com/onmail/custom-domain-setting-up.png",
  "onboard-logo": "https://assets.easilydo.com/onmail/logo-light.png",

  "custom-domain-bg.jpg":
    "https://assets.easilydo.com/onmail/custom-domain-bg.jpg",
  "custom-domain-step-1.jpg":
    "https://assets.easilydo.com/onmail/custom-domain-step-1.png",
  "custom-domain-step-2.jpg":
    "https://assets.easilydo.com/onmail/custom-domain-step-2.png",

  // Stripe
  "stripe.name": "Name on Card",
  "stripe.cardNumber": "Credit/Debit Card Number",
  "stripe.expiry": "Expiration Date",
  "stripe.cvc": "CVC",
  "stripe.postalCode": "Postal Code",
  "stripe.error.name": "Please type in your name as it appears on your card.",
  "stripe.error.postalCode": "Please fill out your postal code.",
  "stripe.error.postalCode.invalid": "Invalid postal code.",
  "stripe.error.cardNumber": "Please fill out a card number.",
  "stripe.error.cvc": "Please fill out a CVC.",
  "stripe.error.expiry": "Please fill out an expiration date.",

  // Premium plan description in settings
  "premium.plans.hobby.title": "Personal Plan",
  "premium.plans.hobby.description":
    "A <0>{{ name }}</0> plan allows <0>{{ storage }}</0> of storage and up to <0>{{ singleFileSizeLimit }}</0> attachments for free.",
  "premium.plans.freelance.title": "Freelance Plan",
  "premium.plans.freelance.description":
    "A <0>{{ name }}</0> plan allows <0>{{ storage }}</0> of storage and up to <0>{{ singleFileSizeLimit }}</0> attachments for <0>{{ price }}</0> a <0>{{ priceUnit }}</0>.",
  "premium.plans.pro.title": "Professional Plan",
  "premium.plans.pro.description":
    "A <0>{{ name }}</0> plan <0>{{ storage }}</0> of storage and up to <0>{{ singleFileSizeLimit }}</0> attachments for <0>{{ price }}</0> a <0>{{ priceUnit }}</0> per user.",
  "premium.plans.agency.title": "Business Plan",
  "premium.plans.agency.description":
    "A <0>{{ name }}</0> plan allows <0>{{ storage }}</0> of storage and up to <0>{{ singleFileSizeLimit }}</0> attachments for <0>{{ price }}</0> a <0>{{ priceUnit }}</0> per user.",
  "premium.plans.priceUnit.long.month": "month",
  "premium.plans.priceUnit.long.year": "year",
  "premium.plans.priceUnit.month": "/ Month / User",
  "premium.plans.priceUnit.year": "/ Year / User",
  "premium.plans.priceUnit.short.month": "/mth",
  "premium.plans.priceUnit.short.year": "/yr",
  "premium.plans.priceUnit.monthly": "monthly",
  "premium.plans.priceUnit.yearly": "yearly",
  "premium.plans.renewal": "Your plan will renew on <0>{{ expiration }}</0>.",
  "premium.plans.pending":
    "Your <0>{{ name }}</0> plan will begin on <0>{{ startDate }}</0>, paid <0>{{ interval }}</0>.",
  "premium.plans.unsubscribe": "Your plan will end on {{ expiration }}.",
  "premium.plans.freeDomainIncluded": "Free domain included in price",
  "premium.plans.inviteOnly": "Invite only",
  "premium.plans.getInviteCode": "Need an invitation code? <0>Click here</0>",
  "premium.plans.inviteSignup": "https://www.onmail.com/onmailQueueSignUp",

  // Premium bill calculator
  "premium.billCalculator.confirmPlanChange": "Confirm plan change",
  "premium.billCalculator.subscribe": "Subscribe",
  "premium.billCalculator.dueDate": "Due on {{ dueDate }}.",
  "premium.billCalculator.interval.year": "/ year / user",
  "premium.billCalculator.interval.month": "/ month / user",
  "premium.billCalculator.headers.subscriptionOrder": "OnMail Plan Order",
  "premium.billCalculator.headers.paymentMethod": "Payment Method",
  "premium.billCalculator.headers.interval.year": "Renews Annually",
  "premium.billCalculator.headers.interval.month": "Renews Monthly",
  "premium.billCalculator.headers.interval.billed.year": "Billed Annually",
  "premium.billCalculator.headers.interval.billed.month": "Billed Monthly",
  "premium.billCalculator.notAllowed.month":
    "You must change your current plan to monthly before upgrading to the {{ name }} monthly plan.",
  "premium.billCalculator.notAllowed.year":
    "You must change your current plan to yearly before upgrading to the {{ name }} yearly plan.",
  "premium.billCalculator.planName": "{{ name }} Plan",
  "premium.billCalculator.numUsers": "{{ count }} user",
  "premium.billCalculator.numUsers_plural": "{{ count }} users",

  supportSite: "//support.onmail.com",

  //404 png
  "404.png": "https://assets.easilydo.com/onmail/404.png",
  //attachment icon img
  "archive.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/archive.png",
  "audio.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/audio.png",
  "book.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/book.png",
  "calendar.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/calendar.png",
  "code.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/code.png",
  "doc.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/doc.png",
  "font.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/font.png",
  "image.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/image.png",
  "other.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/other.png",
  "pdf.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/pdf.png",
  "presentation.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/presentation.png",
  "spreadsheet.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/spreadsheet.png",
  "video.png":
    "https://assets.easilydo.com/onmail/large-attachment-icons/video.png",

  "edison_logo.jpg": "https://assets.easilydo.com/onmail/icon.png",

  "onmail-loading.json":
    "https://assets.easilydo.com/onmail/onmail-loading.json",
  "lottie_light.min.js":
    "https://assets.easilydo.com/onmail/lottie_light.min.js",

  "mobileWall.signupComplete": "Sign Up Complete!",
  "mobileWall.content": "OnMail is available on mobile using Edison Mail.",
  "mobileWall.apple":
    "https://apps.apple.com/us/app/email-edison-mail/id922793622",
  "mobileWall.android":
    "https://play.google.com/store/apps/details?id=com.easilydo.mail&hl=en_US",
  "apple-store": "https://assets.easilydo.com/onmail/apple-store-icon.png",
  "google-play": "https://assets.easilydo.com/onmail/google-play-icon.png",
  "edison-mail": "https://assets.easilydo.com/onmail/edison-mail-icon.png",
  "blue-stripe-bg": "https://assets.easilydo.com/onmail/blue-stripe-bg.png",

  // paywalls
  "paywall.customFileTransferUrl.image.src":
    "https://assets.easilydo.com/onmail/paywall-branded-attachments.png",
  "paywall.customFileTransferUrl.image.alt": "Custom File Transfer",

  "paywall.fileStorage.image.src":
    "https://assets.easilydo.com/onmail/paywall-out-of-storage.png",
  "paywall.fileStorage.image.alt": "File Storage",

  "paywall.passwordProtectedLargeFileLinks.image.src":
    "https://assets.easilydo.com/onmail/paywall-link-password-protection.png",
  "paywall.passwordProtectedLargeFileLinks.image.alt":
    "Password Protected Large File Links",

  "paywall.customDomain.image.src":
    "https://assets.easilydo.com/onmail/paywall-custom-domain.png",
  "paywall.customDomain.image.alt": "Custom Domains",

  "paywall.singleFileSizeLimit.image.src":
    "https://assets.easilydo.com/onmail/paywall-large-file-attachments.png",
  "paywall.singleFileSizeLimit.image.alt": "Large Attachments",
  "photo-loading.png": "https://assets.easilydo.com/onmail/photo-loading.png",

  "paywall.allowSubaccounts.image.src":
    "https://assets.easilydo.com/onmail/paywall-subaccounts.png",
  "paywall.allowSubaccounts.image.alt": "Subaccounts",

  dictionaryPath: "https://assets.easilydo.com/onmail/dictionaries",
  pdfjsPath:
    "https://assets.easilydo.com/onmail/pdfjs-2.4.456-dist/web/viewer.html",

  // Data Opt In
  "dataOptIn.image":
    "https://assets.easilydo.com/onmail/security-share-trends.png",
  "dataOptIn.title": "Your privacy is important",
  "dataOptIn.content": `Your data makes OnMail work and, when permitted, supports our measurement business, <0>Edison Trends</0>. If you choose to opt-in to sharing data, we will collect information when you sign up and use OnMail, like commercial messages and purchase receipts. The data is de-identified and it's only use is to create aggregated research insights. We share this research with third parties and prohibit them from using the information for any purpose other than understanding e-commerce trends. You can always opt-out of Trends at any time!`,
  "dataOptIn.prompt": "Would you like to opt-in?",
  "dataOptIn.agree": "Yes",
  "dataOptIn.disagree": "No, Thanks",
  "dataOptIn.alt": "Data Opt-in",
  "dataOptIn.termsAndConditions": `https://trends.edison.tech`,
  "dataOptIn.intro":
    "OnMail respects your right to control data as we protect your privacy. In compliance with GDPR regulations, please grant us the required permissions to process your data. You can update them at anytime.",
  "dataOptIn.sendAndReceive": `Use OnMail the service to send and receive messages as well as process data as needed to provide the OnMail service.`,
  "dataOptIn.trends": `Process data as part of Edison Trends research. We use the information we collect as permitted to understand new and interesting consumer trends. We may share these anonymized trends with third parties outside Edison.`,

  // Delete Account
  "delete-account.png": "https://assets.easilydo.com/onmail/delete-account.png",
  "deleteAccount.before.title": "Before deleting this account",
  "deleteAccount.before.description":
    "You should remove this email account from all services using this address to protect your security and privacy.",
  "deleteAccount.before.checkbox": "I acknowledge",
  "deleteAccount.confirm.title": "Are you sure?",
  "deleteAccount.confirm.description":
    "This action will permanently delete your account {{ email }} This should only be done if you are absolutely sure.<3/><3/>Type in <5>{{ email }}</5> to confirm.",
  "deleteAccount.confirm.placeholder": "Enter Email Address",
  "deleteAccount.success.title": "Your Account Has Been Deleted",
  "deleteAccount.success.subtitle": "You have automatically been logged out.",
  "deleteAccount.failure.message": `There's an issue with deleting your account, please try again later, or contact us via support.onmail.com.`,

  // DnD
  "dnd.drop.splitInbox.title":
    "<0>All emails from</0><1>{{ emails }} </1> will now be found in <2>{{ name }}</2>.",
  "dnd.drop.splitInbox.subtitle":
    "If this message is still found in another split, you may need to make further adjustments in the <0>split inbox settings</0> to remove it.",
  "dnd.drop.splitInbox.subtitle.source_plural":
    "If these messages are still found in another split, you may need to make further adjustments in the <0>split inbox settings</0> to remove them.",
  "dnd.drop.splitInbox.advanced": "Need advanced options?",
  "dnd.drop.category.title":
    "This email and future similar ones will be found in <0>{{ name }}</0>.",
  "dnd.drop.category.title_plural":
    "These emails and future similar ones will be found in <0>{{ name }}</0>.",
  "dnd.drop.category.subtitle":
    "If this email doesn’t appear in {{ name }}, it may be under another split inbox. You may need to make further adjustments in the <1>split inbox settings</1> to remove it.",
  "dnd.drop.category.subtitle_plural":
    "If these emails don’t appear in {{ name }}, they may be under another split inbox. You may need to make further adjustments in the <1>split inbox settings</1> to remove them.",

  // Inbox Zero
  "inboxZero.travel.background.0":
    "https://images.unsplash.com/photo-1588112460947-cfb3bfeccab5?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.travel.background.1":
    "https://images.unsplash.com/photo-1588011637159-458da884f3b2?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.travel.background.2":
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.shopping.background.0":
    "https://images.unsplash.com/photo-1520784117156-c5ce16e134b8?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.shopping.background.1":
    "https://images.unsplash.com/photo-1561715276-a2d087060f1d?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.shopping.background.2":
    "https://images.unsplash.com/photo-1556742208-999815fca738?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.packages.background.0":
    "https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.packages.background.1":
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.packages.background.2":
    "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.events.background.0":
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.events.background.1":
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.events.background.2":
    "https://images.unsplash.com/photo-1525159831892-59d292d558b4?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.price_tracking.background.0":
    "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.price_tracking.background.1":
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.price_tracking.background.2":
    "https://images.unsplash.com/photo-1522684462852-01b24e76b77d?&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "inboxZero.travel.quote":
    "<0></0><1></1>Your travel folder is currently empty.<1></1>Book a trip and find all your travel related receipts here. Never go searching through your inbox for your reservation numbers again.",
  "inboxZero.shopping.quote":
    "<0></0><1></1>Your shopping folder is empty.<1></1>Need to return those shoes you ordered last week? Easily find digital receipts in this folder.",
  "inboxZero.packages.quote":
    "<0></0><1></1>Your packages folder is empty.<1></1>Tracking packages has never been easier. Find all your orders in one place.",
  "inboxZero.events.quote":
    "<0></0><1></1>Your events folder is empty.<1></1>Time to book a reservation for dinner or tickets to a concert. When you do, find the emails here quickly with all the info you need.",
  "inboxZero.price_tracking.quote":
    "<0></0><1></1>No price drops are currently being tracked.<1></1>Shop like usual and get money back. OnMail will keep an eye out for any price drops in your past purchases.",
} as const;

export default translations;
