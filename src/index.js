

// 业务逻辑1mb

console.log(_.join(['a', 'b', 'c'], '***'));
// 此处省略10万行业务逻辑
console.log(_.join(['a', 'b', 'c'], '***'));

// main.js 2mb

// 打包文件会很大，加载时间会长

// main.js 2mb

// 重新访问我们的页面，又要加载2mb的内容