class Header {
    constructor(containerId, buttonsNames, callback) {
        this._header = document.getElementById(containerId);
        this.init(buttonsNames, callback);
    }

    init(buttonsNames, callback) {
        buttonsNames.forEach(name => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.appendChild(document.createTextNode(name));
            a.setAttribute('href', '#');
            a.setAttribute('id', name);

            li.appendChild(a);
            li.addEventListener('click', callback);
            li.addEventListener('click', (e) => this.setActive(e.target.id));
            this._header.appendChild(li);
        });
    }

    setActive(id) {
        const activeClassname = 'active';
        const actives = this._header.querySelectorAll(`.${activeClassname}`);
        actives.forEach(element => {
            element.classList.remove(activeClassname);
        })

        const active = this._header.querySelector(`#${id}`);
        active.classList.add(activeClassname);
    }
}

export default Header;