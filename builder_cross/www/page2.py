# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals

import frappe
from frappe import _
import frappe.utils

sitemap = 1
no_cache = 1
def get_context(context, **dict_params):
	frappe.local.form_dict.update(dict_params)
	name = frappe.local.form_dict.name
	variable = frappe.local.form_dict.variable
	websetting = frappe.get_doc("Website Settings", "Website Settings")

	if variable != None:
		docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=","/"+name],["es_dinamica","=",1]])
		if len(docname)==0:
			docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=",name],["es_dinamica","=",1]])
		if len(docname)>0:
			doc = frappe.get_doc("Buildhub Web",docname[0].name)
	else:
		docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=","/"+name]])
		if len(docname)==0:
			docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=",name]])
		if len(docname)>0:
			doc = frappe.get_doc("Buildhub Web",docname[0].name)
	
	if len(docname)==0:
		frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
		
	if doc.log_in==1:
		if frappe.session.user == "Guest":
			frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
	context.doc = doc
	context.user = frappe.get_user()
	context.settings = websetting