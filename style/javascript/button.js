let hamburgerlist = document.querySelector(".nav-menus")
let hamburger = document.querySelector(".hamburger-btn")

document.querySelector(".hamburger-btn").onclick = () => {
    hamburgerlist.classList.toggle('active');
}

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !hamburgerlist.contains(e.target)) {
        hamburgerlist.classList.remove('active');
    }
})