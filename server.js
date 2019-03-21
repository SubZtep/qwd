#!/usr/bin/env node
const path = require("path")
const chalk = require("chalk")
const express = require("express")
const figlet = require("figlet")
const argv = require("minimist")(process.argv.slice(2))
const port = process.env.PORT || 1369
const app = express()

// Serve static folder
if (argv.s) {
  console.log(path.join(__dirname, argv.s))
  app.use(express.static(path.join(__dirname, argv.s)))
}

// Start server
const server = app.listen(port, () => {
  const addr = server.address()
  const host = addr.address === "::" ? "localhost" : addr.address
  console.log(
    figlet.textSync("qwd [static]", {
      font: "Small"
    }) +
      "\n\n" +
      chalk.yellow.bgHex("#003300")(`Listening at http://${host}:${addr.port}`) +
      " + /filename\n"
  )
})
