function Content(){
    var dom = document.getElementById('root');
    var content = document.createElement('div');
    content.innerHTML = 'content';
    dom.append(content);
}

export default Content;