document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('a[href*="#"]')
    for (let i = 0, len = links.length; i < len; i++) {
        links[i].onclick = function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                let target = this.getAttribute("href").slice(1)
                if (target.length) {
                    scrollTo(document.getElementById(target).offsetTop, document.getElementById(target).offsetTop)
                    return false
                }
            }
        }
    }

    let navbar = document.getElementById('navbar')
    let sticky = navbar.offsetTop
    window.onscroll = function (e) {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("moved")
        } else {
            navbar.classList.remove("moved");
        }
    }

});
