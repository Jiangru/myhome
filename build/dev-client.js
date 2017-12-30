var hotClient = require('webpack-hot-middleware/client')

// 订阅事件，当event.action === 'reload'时执行页面刷新
hotClient.subscribe((event) => {
    if (event.action === 'reload') {
        window.location.reload()
    }
})