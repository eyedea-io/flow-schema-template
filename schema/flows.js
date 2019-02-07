const actions = require('./actions')

module.exports.flows = {
  'User can see his dashboard': {
    name: 'User can see his dashboard',
    nodeType: 'flow',
    links: [
      actions['User goes to the register page'],
      actions['User creates an account'],
      actions['User sees his dashboard'],
    ]
  },
}
