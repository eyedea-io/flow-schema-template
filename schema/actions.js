const contexts = require('./contexts')

module.exports.actions = {
  'User goes to the register page': {
    name: 'User goes to the register page',
    nodeType: 'action',
    links: [
      contexts['Register View'],
    ]
  },
  'User creates an account': {
    name: 'User creates an account',
    nodeType: 'action',
    links: [
      contexts['Register View'],
    ]
  },
  'User sees his dashboard': {
    name: 'User sees his dashboard',
    nodeType: 'action',
    links: [
      contexts['Dashboard View'],
    ]
  },
}
