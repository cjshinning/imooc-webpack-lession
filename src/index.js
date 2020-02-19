// import test from './test.js';
// console.log(test.name);


import _ from 'lodash';
import $ from "jquery";

let element = document.createElement('div');
element.innerHTML = _.join(['Jenny', 'Chan'], '-');
document.body.appendChild(element);



// 异步方式
// function getComponent(){
//     return import(/* webpackChunkName:'lodash' */ 'lodash').then(({default: _}) => {
//         let element = document.createElement('div');
//         element.innerHTML = _.join(['Jenny', 'Chan'], '-');
//         return element;
//     })
// }

// getComponent().then(element => {
//     document.body.appendChild(element);
// })

// 代码分割，和webpack无关
// webpack实现代码分割，两种方式
// 1、同步代码：只需要在webpack.common.js做optimization的配置
// 2、异步代码（import）：异步代码，无需做任何配置，会自动将代码分割