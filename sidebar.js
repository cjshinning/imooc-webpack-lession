var dom = document.getElementById('root');

function SideBar(){
    var sideBar = document.createElement('div');
    sideBar.innerHTML = 'sideBar';
    dom.append(sideBar);
}

export default SideBar;