const EventEmitter = require('events');

class Message extends EventEmitter {
    sendMessage() {
        this.emit('info', { id: 1, name: 'Samir', address: 'Banepa' })
    }
}

module.exports = Message;
