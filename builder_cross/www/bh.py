# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and Contributors
# GNU GPLv3 License. See license.txt

from __future__ import unicode_literals

import frappe

no_cache = 1


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
    doc.url_escritorio
    primary_desk=doc.url_escritorio.replace("https://",'')
    primary_desk=doc.url_escritorio.replace("&ln=en",'')
    primary_desk=primary_desk.split("?h=")[1]
    primary_cel=doc.url_escritorio.replace("https://",'')
    primary_cel=doc.url_escritorio.replace("&ln=en",'')
    primary_cel=primary_cel.split("?h=")[1]
    if doc.log_in==1:
        if frappe.session.user == "Guest":
            frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
    csrf_token = frappe.sessions.get_csrf_token()
    user = frappe.session.user

    context.csrf_token = csrf_token
    context.user_id = user
    context.title=doc.name
    context.primary_desk=primary_desk
    context.primary_cel=primary_cel
    context.ruta=doc.route.replace("/",'')