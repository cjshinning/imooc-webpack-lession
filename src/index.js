// 使用loader可以帮助webpack打包除了javascript的其他静态资源
import avatar from './avatar.jpg';
import './index.scss';

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);