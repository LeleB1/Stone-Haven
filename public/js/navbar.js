// Functions for showing and hiding the sidebar
const showMenu = (navbarId, toggleId) => {
    const navbar = document.getElementById(navbarId),
          toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        navbar.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('navbarMenu', 'navbarToggle')

// Copy email
const navbarEmail = document.getElementById('navbarEmail'),
      navbarCopy = document.getElementById('navbarCopy').textContent,
      navbarText = document.getElementById('navbarText')

navbarEmail.addEventListener('click', () => {
    // Using clipboard API to topy the email
    navigator.clipboard.writeText(navbarCopy).then(() => {
        navbarText.innerHTML = 'Copied✅'

        // Restore the original text
        setTimeout(() => {
            navbarText.innerHTML = 'Copy Email'
        }, 2000)
    })
})

// Get current year for CopyRight
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('current-year');
yearElement.textContent = currentYear;