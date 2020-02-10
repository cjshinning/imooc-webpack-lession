var dom = document.getElementById('root');

function Header(){
    var header = document.createElement('div');
    header.innerHTML = 'header';
    dom.append(header);
}

export default Header;