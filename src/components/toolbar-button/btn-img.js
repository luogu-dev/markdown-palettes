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
          default: ''
        },
        {
          name: 'description',
          title: '图片描述',
          default: ''
        },
        {
          name: 'url',
          title: '图片链接',
          default: 'http://'
        }
      ],
      callback (data) {
        return '[![' + data.description + '](' + data.address + ' "' + data.description + '")](' + data.url + ' "' + data.description + '")'
      }
    }
  }
}
