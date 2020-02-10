var dom = document.getElementById('root');

var header = document.createElement('div');
header.innerHTML = 'header';
dom.append(header);

var sideBar = document.createElement('div');
sideBar.innerHTML = 'sideBar';
dom.append(sideBar);

var content = document.createElement('div');
content.innerHTML = 'content';
dom.append(content);