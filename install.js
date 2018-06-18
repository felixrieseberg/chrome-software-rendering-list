const https = require('https')
const fs = require('fs')
const path = require('path')

const SOURCE_URL = 'https://cs.chromium.org/codesearch/f/chromium/src/gpu/config/software_rendering_list.json'
const FILE_NAME = path.join(__dirname, 'software_rendering_list.json')
const PREFIX = 'chrome-software-rendering-list'

if (fs.existsSync(FILE_NAME)) {
  fs.unlinkSync(FILE_NAME)
}

const file = fs.createWriteStream(FILE_NAME)
const request = https.get(SOURCE_URL, (response) => {
  response.pipe(file)

  file.on('finish', () => {
    file.close()

    const data = require('./software_rendering_list.json')

    if (!data || !data.entries) {
      throw new Error(`${PREFIX}: Failed to successfully download list. Did the format change?`)
    }

    console.log(`${PREFIX}: Successfully downloaded latest list from Chromium source.`)
  })
}).on('error', () => {
  console.error(`${PREFIX}: Failed to download list from Chromium source:`, error)
})
