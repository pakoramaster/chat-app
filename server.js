// setting port for the server
const io=require('socket.io')(3000)

// Give each user their own socket
io.on('connection', socket => {
    console.log('new User')
    socket.emit('chat-message', 'Hello World')
    socket.on('send-chat-message', message => {
        console.log(message)
    })
})