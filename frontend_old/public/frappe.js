const loaded=()=>{    
    let i=0;
    frappe.resize=()=>{
        return window.top.postMessage({name:'height',height:document.querySelector(".MatcSimulator").style.height }, '*')}
    setTimeout(()=>{
        if(document.querySelector(".MatcSimulator")){
            if(window.top!==undefined){
                window.top.postMessage({name:'height',height:document.querySelector(".MatcSimulator").style.height }, '*')
            }
            i++
            
        }
    },300)
    setInterval(()=>{
        if(document.querySelector(".MatcSimulator")){
            if(i<300){
                if(window.top!==undefined){
                    window.top.postMessage({name:'height',height:document.querySelector(".MatcSimulator").style.height }, '*')
                }
                i++
            }
            if(i==300){
                
                console.clear();
                i++
            }
        }
    },500)  
}
let loca = location.href.split("?")
let lo = []
let t=''
if(loca.length>1){
    lo = location.href.split("?")[1].split("&")
}
for(let e of lo){
        try{
            const el=e.split("=")
            
            frappeVars[el[0]]=decodeURIComponent(el[1])
        }catch(e){}
}
try{
    frappeVars.crsf_token=decodeURIComponent(location.href.split("crsf_token=")[1].split("&")[0])
}catch(e){}
if(frappeVars.from_partent ){
    
    if( frappeVars.from_partent.startsWith("/web/") || frappeVars.from_partent == "/" ){
        if(document.querySelector("body")){
            document.querySelector("body").style.overflowY = "hidden"
        }else{
        setTimeout(()=>{
            try{
                document.querySelector("body").style.overflowY = "hidden"
            }catch(e){}
        },500)
    }
    }else{
        if(document.querySelector("body")){
            document.querySelector("body").style.overflowY = "auto"
        }else{
        setTimeout(()=>{
            try{
            }catch(e){}
        },500)
    }
    }
}else{
    if(document.querySelector("body")){
        document.querySelector("body").style.overflowY = "auto"
    }else{
        setTimeout(()=>{
            try{
                document.querySelector("body").style.overflowY = "auto"
            }catch(e){}
        },500)
    }
}
frappe.inject=(name) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${frappeVars.origin}/api/method/get`, false);
    xhttp.setRequestHeader('x-frappe-csrf-token',frappe.csrf_token)
    xhttp.send( {doctype:"Javascript Archivos",name:name} );
    let e = JSON.parse(api.responseText);
    return  e.message.codigo;

}
frappe.call = (data)=>{
    let tk = frappeVars.crsf_token
    let origin = frappeVars.origin
    if(data.nosync===undefined){
        data.nosync=false
    }
    if(data.origin){
        origin = data.origin
        tk = data.auth
    }
    
    if(data.method=="upload_file"||data.method=="upload"){
        data.method="upload_file"
        let form_data = new FormData();
        form_data.append('file', data.args.file, data.args.file.name!==undefined?data.args.file.name:"filename");
        if(data.args.doctype!==undefined){
            form_data.append('doctype',data.args.doctype)
        }
        if(data.args.name!==undefined){
            form_data.append('docname',data.args.name)
        }
        form_data.append('is_private',data.args.is_private!==undefined?data.args.is_private:false)

        let url = `${origin}/api/method/${data.method}`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", url, false );
        xmlHttp.setRequestHeader('x-frappe-csrf-token',frappe.csrf_token)
        xmlHttp.send( form_data );
        let e = JSON.parse(xmlHttp.responseText);
        e.status = xmlHttp.status
        return  e;
    }
    
    
    if(data.method.startsWith('client')){
        data.method=`builder_cross.${data.method}`
        if(data.auth){
            data.args.user="Administrator"
        }else{
            if(data.user===undefined){
                data.args.user=frappeVars.user
            }

        }
        if(data.method=="builder_cross.client.upload"){
                data.method="builder_cross.client.attach_file"
                const xhttp = new XMLHttpRequest();

                xhttp.open("POST", `${origin}/api/method/${data.method}`, data.nosync);
                xhttp.setRequestHeader('x-frappe-csrf-token',frappe.csrf_token)
                
                if(data.nosync===true){
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 ) {
                                data.callback({status:this.status, ...JSON.parse(xhttp.responseText)})
                        }
                    }
                    api.send( data.args );
                    return api
                }else{
                    api.send( data.args );
                    let e = JSON.parse(api.responseText);
                    e.status = api.status
                    return  e;
                }
                    
        }
    }
    let url = `${origin}/api/method/${data.method}`
    let api = new XMLHttpRequest();
    api.open( "POST", url, data.nosync );
    api.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    api.setRequestHeader('x-frappe-csrf-token',frappe.csrf_token)
    if(data.nosync===true){
        api.onreadystatechange = function() {
            if (this.readyState == 4 ) {
                    console.log(data.callback)
                    data.callback({status:this.status, ...JSON.parse(api.responseText)})
            }
        }
        api.send( JSON.stringify(data.args) );
        return api
    }else{
        api.send( JSON.stringify(data.args) );
        let e = JSON.parse(api.responseText);
        e.status = api.status
        return  e;
    }
}
frappe.profile={}
function onSignIn(googleUser) {
    const responsePayload = decodeJwtResponse(googleUser.credential);
    var profile = {
        id:responsePayload.sub,
        name: responsePayload.name, 
        givenName:responsePayload.given_name, 
        familyName:responsePayload.family_name, 
        image: responsePayload.picture, 
        email:responsePayload.email
    }
    document.querySelector('div[widgetid="'+localStorage.getItem("google")+'"]').style.display="block"
    frappe.profile=profile
}

function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
    atob(base64)
    .split("")
    .map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })
    .join("")
    );

    return JSON.parse(jsonPayload);
}
frappe.css=(css) =>{
    var head = document.getElementsByTagName('head')[0];
    var estilo = document.createElement('style');
    estilo.setAttribute('type', 'text/css');
    if (estilo.styleSheet) {
        estilo.styleSheet.cssText = css;
    } else {
        estilo.appendChild(document.createTextNode(css));
    }
    head.appendChild(estilo);
}
frappe.js=(srcjs,async = true) =>{
        var myAsyncScript = document.createElement('script');
        myAsyncScript.src = srcjs;
        myAsyncScript.async = async;
        document.body.appendChild(myAsyncScript);
}
frappe.to=(url,new_tab=false)=>{
    if(new_tab==true){
        window.open(url,"_blank")
    }else{
        
        window.open(url,"_parent")
    }
}
function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str;
}
frappe.path=""
frappe.param=""
frappe.changepath=(id,name)=>{
    param=name
    frappe.param=name
    frappe.path="/site/"+frappeVars.ruta+"/"+name
    if(frappeVars.allow_change_path==0){
        window.history.pushState({screenid:id}, name, "/site/"+frappeVars.ruta+"/"+name);
    }
}

frappe.fn=(data={},js)=>{const frappefn = new Function('data',js); frappefn(data,js) } 