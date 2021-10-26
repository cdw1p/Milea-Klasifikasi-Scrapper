const fs = require('fs')
const axios = require('axios')
const json2xls = require('json2xls')

// Main Function
;(async () => {
  try {
    const { data } = await axios.get('https://milea.pelindo.co.id/klasifikasi/getkls/')
    await fs.writeFileSync('data.xlsx', await json2xls(data), 'binary')
  } catch (err) {
    console.log(err.message)
  }
})()