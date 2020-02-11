// 使用loader可以帮助webpack打包除了javascript的其他静态资源
import avatar from './avatar.jpg';

var img = new Image();
img.src = avatar;

var root = document.getElementById('root');
root.append(img);