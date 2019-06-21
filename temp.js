const fs = require('fs')
let data = fs.readFile('./static/data/output.json', (err, data) => {
  let output = [
    {
      type: "Department",
      keywords: [

      ]
    }
  ]

  const d = JSON.parse(data)
  for (let keyword of d[0].keywords) {
    output[0].keywords.push({
      name: keyword.name,
      aliases: keyword.aliases,
      token: keyword.aliases[1]
    })
  }
  console.log(JSON.stringify(output))
})
