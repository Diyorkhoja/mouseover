class Scroll {
    constructor(obj) {
        if (typeof obj.el == `string`) {
            this.el = document.querySelector('.header__nav')
        } else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.el.style.position = 'fixed'
        this.scroll()
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        if (window.innerHeight - this.el.clientHeight - window.scrollY >= 0) {
            this.el.style.top = window.innerHeight - this.el.clientHeight - window.scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }
}
const scroll = new Scroll({
    el: '.header__nav'
})

class TEXT {
    constructor(obj) {
        this.el = document.querySelector(obj.el)
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.str()
    }
    str(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.str(i)
            }, 100);
        }
    }
}
const text = new TEXT({
    el: '.header__content h1'
})
const text2 = new TEXT({
    el: '.header__content p'
})




let content = document.querySelector('.header__content')


let minb = window.innerHeight,
    maxb = window.innerHeight;
let minr = window.innerWidth,
    maxr = window.innerWidth;
    
function randomNumbersb(minb, maxb) {
    return Math.round(Math.random() * ((maxb - minb + 1) + minb));
}
function randomNumbersr(minr, maxr) {
    return Math.round(Math.random() * ((maxr - minr + 1) + minr));
}

  content.addEventListener('mouseover', function contentFunction() {
    content.style = `margin-bottom:${randomNumbersb(minb, maxb)}px;margin-right:${randomNumbersr(minr, maxr)}px`
})  



















