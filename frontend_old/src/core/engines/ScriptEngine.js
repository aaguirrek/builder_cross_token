/* eslint-disable */
import Logger from '../Logger'
import ScriptAPI from './ScriptAPI'
import ScriptConsole from './ScriptConsole'
import { useStore } from './piniaStore'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default class ScriptEngine {

    run (js, model, viewModel, sourceEvent = {type: 'None'}) {
        const qux = new ScriptAPI(model)
        const console = new ScriptConsole()
        this.isDone = false
        return new Promise((resolve, reject) => {
            
            try {
                const store = useStore()
                try{
                    const regex = /inject\([^)]*\)/;
                    let match = regex.exec(js);
                    while(match.startsWith('inject(')){
                        match = regex.exec(js);
                        if(match!==undefined){
                            if( match.startsWith('inject(')  ){
                                match = match.replace('inject(','').replace(');','').replace(')')
                                let js_custom= frappe.inject(match)
                                js = js.replace(regex, js_custom);
                            }
                        }
                    }
                }catch(e){}
                
                const code = new Function('resolve','buildhub','qux', 'data', 'console','store','axios','CryptoJS',  'event', js);
                try{
                    let  result=  code(resolve,qux,qux,viewModel,console,store,axios, CryptoJS, sourceEvent) 
                    this.isDone = true
                    resolve({
                        to: result,
                        viewModel: viewModel,
                        appDeltas: qux.getAppDeltas(),
                        console: console.messages,
                        vibratePattern: qux.vibratePattern,
                        status : 'ok'
                    })

                }catch(e){
                    
                    this.isDone = true
                    return code(resolve,qux,qux,viewModel,console,store,axios, CryptoJS, sourceEvent) 
                }
               
            } catch (error) {
                Logger.error('ScriptEngine.run() > Error', error)
                resolve({
                    status: 'error',
                    error: error.message
                })
            }
        })       
    }

    onMessage (message, resolve, reject, start) {
        const end = new Date().getTime()
        Logger.log(2, 'ScriptEngine.onMessage() > took',end - start)
        this.isDone = true
        resolve(message.data)
    }
}
