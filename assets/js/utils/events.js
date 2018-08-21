import { EventEmitter } from 'events'

let emitter = new EventEmitter()
emitter.setMaxListeners(50)
export default emitter
