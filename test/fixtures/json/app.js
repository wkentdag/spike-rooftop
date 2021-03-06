const Rooftop = require('../../..')
const htmlStandards = require('spike-html-standards')
const locals = {}

module.exports = {
  matchers: { html: '**/*.sml' },
  reshape: (ctx) => htmlStandards({ webpack: ctx, locals }),
  plugins: [new Rooftop({
    url: process.env.url,
    apiToken: process.env.token,
    addDataTo: locals,
    json: 'data.json'
  })]
}
