import { createApp } from 'vue'
import message from './message.vue'

const wrapper = document.createElement('div')

const style = {
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)'
}

for (const key in style) {
  wrapper.style[key] = style[key]
}

document.body.appendChild(wrapper)

const Message = (options) => {
  const messageBox = document.createElement('div')
  const app = createApp(message, options)
  app.mount(messageBox)

  wrapper.appendChild(messageBox)

  const timer = setTimeout(() => {
    app.unmount()
    wrapper.removeChild(messageBox)
    clearTimeout(timer)
  }, options.duration || 3000)
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = (options) => {
    options.type = type
    return Message(options)
  }
})

export default Message
