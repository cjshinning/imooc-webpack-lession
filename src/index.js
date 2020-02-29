<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import List from './list';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
=======
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
>>>>>>> c1fe8ffbb8879591de6abb5fd42a7aca634499d7
