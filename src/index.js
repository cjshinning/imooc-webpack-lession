console.log('Hello, this is Jenny');

// if('serviceWorker' in navigator){
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js')
//             .then(registration => {
//                 console.log('service-worker registed');
//             }).catch(error => {
//                 console.log('service-worker register error');
//             })
//     })
// }


if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('/dist/service-worker.js')
    .then(function (reg) {
        console.log('success', reg);
    })
    .catch(function (err) {
        console.log('fail', err);
    });
}  