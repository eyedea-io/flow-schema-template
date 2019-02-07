module.exports = {
  button: {
    name: 'Button',
    nodeType: 'component',
    components: [
      {
        $ref: '#/components/spinner'
      }
    ]
  },
  heading: {
    name: 'Heading',
    nodeType: 'component'
  },
  input: {
    name: 'Input',
    nodeType: 'component'
  },
  page: {
    name: 'Page',
    nodeType: 'component'
  },
  spinner: {
    name: 'Spinner',
    nodeType: 'component'
  }
}