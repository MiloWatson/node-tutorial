const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => { //listen for specific event
    console.log(`data received `)
})

customEmitter.on('response', (name, id) => {
    console.log(`User ${name} with id: ${id}`)
})

customEmitter.emit('response', 'milo', 56) // emit event