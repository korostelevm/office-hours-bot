process.env.PUBLIC_KEY = 'a9314b598d3fd1de1f1850fc3ac369e6bcd6d138b1c7f40e64dc0c991411f08b'

const express = require('express')
const app = express()

const { verifyKeyMiddleware } = require('discord-interactions')

app.post('/', verifyKeyMiddleware(process.env.PUBLIC_KEY), (req, res) => {
    const message = req.body;
    console.log(message)
    // if (message.type === InteractionType.APPLICATION_COMMAND) {
    //   res.send({
    //     type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //     data: {
    //       content: 'Hello world',
    //     },
    //   });
    // }
    return res.send('ok')
  });
app.listen(process.env.PORT || 3000)