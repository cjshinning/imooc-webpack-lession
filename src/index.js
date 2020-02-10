// ES Module 模块引入方式
// webpack 模块打包工具
// import Header from './header.js';
// import SideBar from './sidebar.js';
// import Content from './content.js';

var Header = require('./header.js');
var SideBar = require('./sidebar.js');
var Content = require('./content.js');

new Header();
new SideBar();
new Content();