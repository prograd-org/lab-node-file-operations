
const data = require('./data')
const os = require('os')
const fs = require('fs')
const crypto =require('crypto')
const secret='PG';
const value = os.userInfo()
fs.writeFileSync("message.txt", "message.txt \n")
const userdata= data("Prograd",2021,"MTech")
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');
fs.appendFileSync("message.txt", "ProGrad Details: \n")
fs.appendFileSync("message.txt", "\tUserId ->         101, \n")
fs.appendFileSync("message.txt", `\tName ->           ${userdata.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->           ${userdata.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification ->  ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->       ${value.username},\n`)
fs.appendFileSync("message.txt", `\tPassword ->       ${password}\n`)