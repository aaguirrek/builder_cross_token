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
	
	if variable != None:
		docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=","/"+name],["es_dinamica","=",1]])
		if len(docname)==0:
			docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=",name],["es_dinamica","=",1]])
		
		doc = frappe.get_doc("Buildhub Web",docname[0].name)
	else:
		docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=","/"+name]])
		if len(docname)==0:
			docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=",name]])
		doc = frappe.get_doc("Buildhub Web",docname[0].name)
	context.doc = doc
	context.user = frappe.get_user()
	#context.csrf_token = ""