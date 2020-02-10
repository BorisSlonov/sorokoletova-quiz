window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    });

    let probability = 0;

    const btnStartTest = document.getElementById('btn-start-test');
    const modals = document.querySelectorAll('.modal');

    btnStartTest.onclick = (e) => {
        e.preventDefault();
        probability = 0;
        modals[0].style.display = 'block';
    }

    const buttonNext = document.getElementById('btn-next');
    buttonNext.onclick = (e) => {
        e.preventDefault();
        let ownershipType;
        let taxSystem;

        var ownershipTypeRadios = document.getElementsByName('ownership-type');
        for (var i = 0; i < ownershipTypeRadios.length; i++) {
            if (ownershipTypeRadios[i].checked) {
                ownershipType = ownershipTypeRadios[i].value;
                break;
            }
        }

        var taxSystemRadios = document.getElementsByName('tax-system-radios');
        for (var i = 0; i < taxSystemRadios.length; i++) {
            if (taxSystemRadios[i].checked) {
                taxSystem = taxSystemRadios[i].value;
                break;
            }
        }

        if (ownershipType && taxSystem) {
            modals[0].style.display = 'none';
            let isYear = document.getElementsByName('is-year')[0].checked;

            if (taxSystem == 0) {
                if (!isYear) {
                    modals[1].style.display = 'block';
                }
                else {
                    if (ownershipType == 1) {
                        modals[2].style.display = 'block';
                    } else {
                        modals[4].style.display = 'block';
                    }
                }
            } else {
                modals[3].style.display = 'block';
            }
        }
    }

    setResultText = (prob) => {
        const resultTextEl = document.getElementById('result-text');
        let text = '';
        if (prob < 20)
            text = 'Согласно кретериям вы не являетесь кандидатом на выездые налоговые проверки.';
        else if (prob >= 20)
            text = 'У испекторов есть основания включить вас в списки кандидатов  на выездные налоговые проверки на следующий год.';
        else
            text = 'Вы являетесь кандидатом на выездную налоговую проверку  на следующий год, возможно даже внеплановую. Уже сейчас начните подготовку.';
        text += 'Смотрите схемы по налоговй оптимизации и налоговому планировании  или обратитесь за консультацией,чтобы уменьшить риски.';

        resultTextEl.textContent = text;
    }

    const resultButtons = document.querySelectorAll('.btn-result');
    resultButtons[0].onclick = (e) => {
        e.preventDefault();
        modals[1].style.display = 'none';
        const q11 = document.getElementsByName('q-1-1')[0];
        const q12 = document.getElementsByName('q-1-2')[0];
        const q13 = document.getElementsByName('q-1-3')[0];

        probability = q11.checked ? 20 : 0;
        probability += q12.checked ? 40 : 0;
        probability += q13.checked ? 40 : 0;

        setResultText(probability);
        modals[5].style.display = 'block';
    }

    resultButtons[1].onclick = (e) => {
        e.preventDefault();
        modals[2].style.display = 'none';
        const q21 = document.getElementsByName('q-2-1')[0];
        const q22 = document.getElementsByName('q-2-2')[0];
        const q23 = document.getElementsByName('q-2-3')[0];
        const q24 = document.getElementsByName('q-2-4')[0];
        const q25 = document.getElementsByName('q-2-5')[0];
        const q26 = document.getElementsByName('q-2-6')[0];
        const q27 = document.getElementsByName('q-2-7')[0];
        const q28 = document.getElementsByName('q-2-8')[0];

        probability += q11.checked ? 20 : 0;
        probability += q12.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;
        probability += q13.checked ? 10 : 0;

        setResultText(probability);
        modals[5].style.display = 'block';
    }

    resultButtons[2].onclick = (e) => {
        e.preventDefault();
        modals[3].style.display = 'none';
        const q31 = document.getElementsByName('q-3-1')[0];
        const q32 = document.getElementsByName('q-3-2')[0];
        const q33 = document.getElementsByName('q-3-3')[0];

        probability += q31.checked ? 20 : 0;
        probability += q32.checked ? 40 : 0;
        probability += q33.checked ? 40 : 0;
        setResultText(probability);
        modals[5].style.display = 'block';
    }

    resultButtons[3].onclick = (e) => {
        e.preventDefault();
        modals[4].style.display = 'none';
        const q41 = document.getElementsByName('q-4-1')[0];
        const q42 = document.getElementsByName('q-4-2')[0];
        const q43 = document.getElementsByName('q-4-3')[0];
        const q44 = document.getElementsByName('q-4-4')[0];
        const q45 = document.getElementsByName('q-4-5')[0];

        probability += q41.checked ? 20 : 0;
        probability += q42.checked ? 20 : 0;
        probability += q43.checked ? 20 : 0;
        probability += q44.checked ? 20 : 0;
        probability += q45.checked ? 20 : 0;

        setResultText(probability);
        modals[5].style.display = 'block';
    }

    window.onclick = (e) => {
        modals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        })
    }
})