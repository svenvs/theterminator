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

app.get('/schieter', (req, res) => {
  motor1.writeSync(1);
  res.send('aan1')
})

app.get('/feeder', (req, res) => {
  motor2.writeSync(1);
  res.send('aan2')
})

app.get('/uit', (req, res) => {
  motor1.writeSync(0);
  motor2.writeSync(0);
  res.send('uit')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})