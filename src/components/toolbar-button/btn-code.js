export default {
  name: 'img',
  icon: 'fa-code',
  title: '插入代码',
  action: {
    request: {
      title: '插入代码',
      body: [
        {
          name: 'lang',
          title: '语言类型',
          type: 'input',
          default: ''
        },
        {
          name: 'code',
          title: '代码',
          type: 'textarea',
          default: ''
        }
      ],
      callback (data) {
        return '```' + data.lang + '\n' +
                    data.code + '\n' +
                    '```'
      }
    }
  }
}
