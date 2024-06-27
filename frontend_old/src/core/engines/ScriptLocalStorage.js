export default class ScriptLocalStorage {

    constructor () {
        this.storage = []
    }

    setItem(key,data) {
        localStorage.setItem(key,data)
    }

    getItem(key) {
        localStorage.getItem(key)
    }

    removeItem(key) {
        localStorage.removeItem(key)
    }

    error() {
        console.warn('ScriptConsole.error() > ', arguments[0])
        this.messages.push({
            type: 'error',
            args: arguments[0]
        })
    }
}