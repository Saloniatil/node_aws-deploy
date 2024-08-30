const express = require("express")

const app = express()

app.use(express.json())

app.get('/api/get', (req, res) => {
  return res.send({message: "CI/CD Integration "})
})

app.get('/api/get/user', (req, res) => {
  return res.send({ name: 'Dev', email: 'saloni@gmail.com', 'role': 'Deveopment' });
})
const port = 5000

app.listen(port, () => {
  console.log(`Server is running on 5000 port`)
})