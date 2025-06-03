class Cookie {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

let greenCookie = new Cookie('green');
let blueCookie = new Cookie('blue');