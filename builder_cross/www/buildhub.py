# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and Contributors
# GNU GPLv3 License. See license.txt

from __future__ import unicode_literals

import frappe

no_cache = 1


sitemap = 1
no_cache = 1
def get_context(context):
    if frappe.session.user == "Guest":
        frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
    csrf_token = frappe.sessions.get_csrf_token()
    user = frappe.session.user
    context.csrf_token = csrf_token
    context.user_id = user
    context.title="Buildhub"