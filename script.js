const socket=io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {console.log(data)})

messageForm.addEventListener('submit', e => {
    // prevents page from reloading when message is sent
    e.preventDefault()

    const message=messageInput.value
    socket.emit('send-chat-message', message)

    // empty message field
    messageInput.value=''
})