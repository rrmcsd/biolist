
function toggleMode() {

    // Modo escuro
    const html = document.documentElement  
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    html.classList.toggle('light')

    
    // Troca de foto
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.jpg')
    } else {
        img.setAttribute('src', './assets/avatar.jpg')
    }

}

