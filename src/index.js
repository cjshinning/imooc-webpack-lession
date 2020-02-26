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

console.log(this);
