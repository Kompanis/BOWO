const tabsParent = document.querySelector('.tabheader__items')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsContent = document.querySelectorAll('.tabcontent')


tabsParent.addEventListener('click', (e) => {
    const target = e.target

    if(target.classList.contains('tabheader__item')){
        //console.log(target)
        tabs.forEach((item, i) => {
            if(target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

const openModalBtn = document.querySelector('.btn_white')
const modal = document.querySelector('.modal')

const modalCloseBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = "hidden"
}

openModalBtn.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow =""
}
modalCloseBtn.addEventListener('click', closeModal)

///////////////////////////////////


function modalClose ( e ) {
    if ( !e.keyCode |s| e.keyCode === 27 ) {
        // здесь код для закрытия модального окна
    }
}

document.addEventListener('keydown', modalClose);