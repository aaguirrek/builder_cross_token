app_name = "builder_cross"
app_title = "Builder Cross"
app_publisher = "Frappe"
app_description = "Cross builder erpnext"
app_email = "admin@frappe.com"
app_license = "mit"
# required_apps = []

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/builder_cross/css/builder_cross.css"
# app_include_js = "/assets/builder_cross/js/builder_cross.js"

# include js, css files in header of web template
# web_include_css = "/assets/builder_cross/css/builder_cross.css"
# web_include_js = "/assets/builder_cross/js/builder_cross.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "builder_cross/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}
website_route_rules = [
	{"from_route": "/page/<name>", "to_route": "page"},
	{"from_route": "/page/<name>/<variable>", "to_route": "page"},
	{"from_route": "/web/<name>", "to_route": "page2"},
	{"from_route": "/web/<name>/<variable>", "to_route": "page2"},
	{"from_route": "/new_web/<name>", "to_route": "new_web"},
	{"from_route": "/new_web/<name>/<variable>", "to_route": "new_web"},
	{"from_route": "/site/<name>", "to_route": "bh"},
	{"from_route": "/site/<name>/<variable>", "to_route": "bh"},
]
# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "builder_cross/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "builder_cross.utils.jinja_methods",
# 	"filters": "builder_cross.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "builder_cross.install.before_install"
# after_install = "builder_cross.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "builder_cross.uninstall.before_uninstall"
# after_uninstall = "builder_cross.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "builder_cross.utils.before_app_install"
# after_app_install = "builder_cross.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "builder_cross.utils.before_app_uninstall"
# after_app_uninstall = "builder_cross.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "builder_cross.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
	"User buildhub": {
 		"after_insert": "builder_cross.api.crear_user"
# 		"on_cancel": "method",
# 		"on_trash": "method"
	}
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"builder_cross.tasks.all"
# 	],
# 	"daily": [
# 		"builder_cross.tasks.daily"
# 	],
# 	"hourly": [
# 		"builder_cross.tasks.hourly"
# 	],
# 	"weekly": [
# 		"builder_cross.tasks.weekly"
# 	],
# 	"monthly": [
# 		"builder_cross.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "builder_cross.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "builder_cross.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "builder_cross.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["builder_cross.utils.before_request"]
# after_request = ["builder_cross.utils.after_request"]

# Job Events
# ----------
# before_job = ["builder_cross.utils.before_job"]
# after_job = ["builder_cross.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"builder_cross.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

