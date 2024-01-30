document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            hiddenHeaderElements();
        } else {
            removeClassHeader();
        }

    });

    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${tabAlvo}]`)
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            removeBntActive();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (let i =0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})


// Funções

function hiddenHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function removeClassHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(e) {
    const classe = 'faq__questions__item--is-open';
    const eParent = e.target.parentNode;

    eParent.classList.toggle(classe);
}

function removeBntActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        setTimeout(function() {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }, 8000);
    }

}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
