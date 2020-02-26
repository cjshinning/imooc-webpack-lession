// async function getComponent(){
//     const { default: _ } = await import(/* webpackChunkName:'lodash' */ 'lodash');
//     let element = document.createElement('div');
//     element.innerHTML = _.join(['Jenny', 'Chan'], '-');
//     return element;
// }

// document.addEventListener('click', ()=>{
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     })
// })

// import _ from 'lodash';
// import $ from 'jquery';
// import {ui} from './jquery.ui';

// ui();

// const dom = $('<div>');
// dom.html(_.join(['Jenny', 'Chan'], '---'));
// $('body').append(dom);

console.log(this);
