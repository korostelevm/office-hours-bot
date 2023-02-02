process.env.PUBLIC_KEY = 'a9314b598d3fd1de1f1850fc3ac369e6bcd6d138b1c7f40e64dc0c991411f08b'
process.env.TOKEN = 'MTA3MDc3MTYwOTE0Njc2OTQzOQ.G6lGuL.QnMaUwS52hwBj0bpjGtAmI1W_h1C6Lekd1IjQQ'


const express = require('express')
const app = express()

const { verifyKeyMiddleware, InteractionResponseType } = require('discord-interactions')


const ops = {
    ban: async function(){
        console.log('running ban')
        return 
    }
}

app.post('/', verifyKeyMiddleware(process.env.PUBLIC_KEY), async (req, res) => {
    const message = req.body;
    console.log(message)
    let command = message.data.name
    await ops[command]()


    // if (message.type === InteractionType.APPLICATION_COMMAND) {
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 'Hello world',
        },
      });
  });
app.listen(process.env.PORT || 3000)