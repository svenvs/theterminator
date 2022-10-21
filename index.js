const Gpio = require('onoff').Gpio;
const express = require('express')
const app = express()
const port = 8080

const power = new Gpio(17, 'out'); 
const motor1 = new Gpio(27, 'out'); 
const motor2 = new Gpio(4, 'out'); 

power.writeSync(1)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aan', (req, res) => {
  motor1.writeSync(1);
})
app.get('/uit', (req, res) => {
  motor1.writeSync(2);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})