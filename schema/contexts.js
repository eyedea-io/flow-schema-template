const components = require('./components')
const endpoints = require('./endpoints')

module.exports.contexts = {
  'Register View': {
    name: 'Register View',
    nodeType: 'context',
    components: [
      components.page,
      components.heading,
      components.input,
      components.button,
    ],
    endpoints: [
      endpoints.register,
    ],
    userStories: [
      userStories['User can type in username'],
      userStories['User can type in an email'],
      userStories['User can type in a password'],
      userStories['User can press sign up button'],
    ],
  },
}
