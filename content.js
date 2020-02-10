var dom = document.getElementById('root');

function Content(){
    var content = document.createElement('div');
    content.innerHTML = 'content';
    dom.append(content);
}

export default Content;