let currentTheme =   localStorage.getItem('theme') ||'light' 
const themeBtn = document.querySelector('.theme-btn')

if (currentTheme === 'dark') {
    document.body.classList.add('dark')
    themeBtn.textContent = '☀'
} else {
    themeBtn.textContent = '☽'
}


function changeTheme() {
        document.body.classList.toggle('dark')
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
        if (currentTheme === "dark") {
            themeBtn.textContent = '☀'
            localStorage.setItem("theme", currentTheme)
        } else {
            localStorage.setItem("theme", currentTheme)
            themeBtn.textContent = '☽'}
}

themeBtn.addEventListener('click', changeTheme)