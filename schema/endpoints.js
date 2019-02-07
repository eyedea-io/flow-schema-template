module.exports = {
  register: {
    name: 'register',
    nodeType: 'endpoint',
    socket: 'user',
    required: ['username','fullname', 'password'],
    properties: {
      username: {
        type: 'string',
        minimum: 5
      },
      fullname: {
        type: 'string',
        minimum: 5
      },
      password: {
        type: 'string',
        minimum: 6
      },
    }
  },
}
