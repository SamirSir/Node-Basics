const auth = require('./auth.module.ts');

auth.pingAuth('Alex');


// Using the event message
const Message = require('./builtin-modules/events');
const messenger = new Message();

// Listener before event rise
messenger.addListener('info', (eventArg) => {
    console.log("Listening to 'message' event")
    console.table({ eventArg });
});

messenger.sendMessage();
