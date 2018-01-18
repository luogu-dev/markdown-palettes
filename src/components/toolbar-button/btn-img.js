export default {
  name: 'img',
  icon: 'fa-picture-o',
  title: '插入图片',
  action: {
    request: {
      title: '插入图片',
      body: [
        {
          name: 'address',
          title: '图片地址',
          type: 'input',
          default: ''
        },
        {
          name: 'description',
          title: '图片描述',
          type: 'input',
          default: ''
        }
      ],
      callback (data) {
        return '![' + data.description + '](' + data.address + ')'
      }
    }
  }
}
