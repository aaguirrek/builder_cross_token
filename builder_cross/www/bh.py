# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and Contributors
# GNU GPLv3 License. See license.txt

from __future__ import unicode_literals

import frappe
from frappe import _




sitemap = 1
no_cache = 0
def get_context(context, **dict_params):
    frappe.local.form_dict.update(dict_params)
    name = frappe.local.form_dict.name
    variable = frappe.local.form_dict.variable

    docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=","/"+name]])
    if len(docname)==0:
        docname = frappe.get_list(doctype='Buildhub Web',fields=["name"],filters=[["route","=",name]])
    if len(docname)>0:
        doc = frappe.get_doc("Buildhub Web",docname[0].name)

    if len(docname)==0:
        frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
    
    primary_desk=doc.url_escritorio.replace("https://",'')
    primary_desk=primary_desk.replace("&ln=en",'')
    if len(primary_desk.split("?h="))>1:
        domain=primary_desk.split("?h=")[0].split("/")[0]
        primary_desk=primary_desk.split("?h=")[1]
    else:
        domain="build.frappecorp.com"
        primary_desk=primary_desk.split("?h=")[0]
    
    primary_cel=doc.url_telefono.replace("https://",'')
    primary_cel=primary_cel.replace("&ln=en",'')
    if len(primary_cel.split("?h="))>1:
        domain=primary_cel.split("?h=")[0].split("/")[0]
        primary_cel=primary_cel.split("?h=")[1]
    else:
        domain="build.frappecorp.com"
        primary_cel=primary_cel.split("?h=")[0]

    if doc.log_in==1:
        if frappe.session.user == "Guest":
            frappe.throw(_("You need to be logged in to access this page"), frappe.PermissionError)
    csrf_token = frappe.sessions.get_csrf_token()
    user = frappe.session.user
    if variable != None:
        context.param=variable
    else:
        context.param=''
    if doc.tiene_preload:
        context.preload=1
    else:
        context.preload=0
    if doc.header_y_footer_del_erp:
        context.header=1
    else:
        context.header=0
    context.doma=domain
    context.csrf_token = csrf_token
    context.full_mobile = doc.full_mobile
    context.user_id = user
    context.doc=doc
    context.title=doc.name
    context.primary_desk=primary_desk
    context.primary_cel=primary_cel
    context.ruta=doc.route.replace("/",'')