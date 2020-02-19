// 第一种方式
// 首次访问页面时，加载main.js(2mb)
// 当页面业务逻辑发生变化时，又要加载2mb的内容

// 业务逻辑1mb
// console.log(_.join(['a', 'd', 'c'], '***'));
// 此处省略10万行业务逻辑
// console.log(_.join(['a', 'b', 'c'], '***'));

// 第二种方式
// main.js被拆成lodash.js(1mb),main.js(1mb)
// 当页面业务逻辑发生变化时，只需要加载main.js即可(1mb)

// Code Spliting

// 同步方式
// import _ from 'lodash';
// console.log(_.join(['a', 'd', 'c'], '***'));
// console.log(_.join(['a', 'b', 'c'], '***'));

// 异步方式
function getComponent(){
    return import('lodash').then(({default: _}) => {
        let element = document.createElement('div');
        element.innerHTML = _.join(['Jenny', 'Chan'], '-');
        return element;
    })
}

getComponent().then(element => {
    document.body.appendChild(element);
})

// 代码分割，和webpack无关
// webpack实现代码分割，两种方式
// 1、同步代码：只需要在webpack.common.js做optimization的配置
// 2、异步代码（import）：异步代码，无需做任何配置，会自动将代码分割