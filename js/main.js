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
    const errors = document.querySelectorAll('.error');

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
        } else {

        }
    }

    setResultText = (prob) => {
        const resultTextEl = document.getElementById('result-text');
        const probabilityText = document.getElementById('probability-text');
        let text = '';
        if (prob < 20) {
            text = 'У вас низкая вероятность стать кандидатом на выездные налоговые проверки.  \n  Однако вам будет полезно знать о схемах оптимизации и ошибках в бухгалтерии, которые допускают 80% предпринимателей, повышая риск проверок и штрафов.  Хотите получить полную методичку по налоговой оптимизации для ООО и ИП, список судебных решений, ссылки на документы а также схемы, которые ни в коем случае НЕЛЬЗЯ применять в 2020 году?';
            probabilityText.style.color = "#28a745";
        }
        else if (prob < 60) {
            text = 'У инспекторов есть много оснований включить вас в списки кандидатов  на выездные налоговые проверки на следующий год. Для вашей ситуации разработана методичка по налоговой оптимизации для ООО и ИП, список судебных решений, ссылки на документы а также схемы, которые ни в коем случае НЕЛЬЗЯ применять в 2020 году. Жмите “подробнее” ';
            probabilityText.style.color = "#ffc107";
        }
        else {
            text = 'Вы являетесь кандидатом на выездную налоговую проверку  на следующий год, возможно даже внеплановую. Советую начать подготовку уже сейчас. Для вашей ситуации разработана методичка по налоговой оптимизации для ООО и ИП, список судебных решений, возможная ответственность и ссылки на документы. Также схемы, которые вам ни в коем случае НЕЛЬЗЯ применять в 2020 году. Я бы посоветовала проконсультироваться со мной для поиска решений по минимизации последствий в случае проверки.';
            probabilityText.style.color = "#dc3545";
        }
        text += 'Смотрите схемы по налоговй оптимизации и налоговому планировании  или обратитесь за консультацией,чтобы уменьшить риски.';

        resultTextEl.textContent = text;
        probabilityText.textContent = prob + "%";
    }

    isValidForm = (...quizes) => {
        for (var i = 0; i < quizes.length; i++) {
            let val;
            for (var j = 0; j < quizes[i].length; j++) {
                if (quizes[i][j].checked) {
                    val = quizes[i][j].value;
                    break;
                }
            }
            if (!val)
                return false;
        }

        return true;
    }

    const resultButtons = document.querySelectorAll('.btn-result');
    resultButtons[0].onclick = (e) => {
        e.preventDefault();
        const q11 = document.getElementsByName('q-1-1');
        const q12 = document.getElementsByName('q-1-2');
        const q13 = document.getElementsByName('q-1-3');

        let isValid = isValidForm(q11, q12, q13);

        if (isValid) {
            modals[1].style.display = 'none';

            probability = q11[0].checked ? 20 : 0;
            probability += q12[0].checked ? 40 : 0;
            probability += q13[0].checked ? 40 : 0;

            setResultText(probability);
            modals[5].style.display = 'block';
        } else {
            errors[1].style.display = 'block';
        }
    }

    resultButtons[1].onclick = (e) => {
        e.preventDefault();
        const q21 = document.getElementsByName('q-2-1');
        const q22 = document.getElementsByName('q-2-2');
        const q23 = document.getElementsByName('q-2-3');
        const q24 = document.getElementsByName('q-2-4');
        const q25 = document.getElementsByName('q-2-5');
        const q26 = document.getElementsByName('q-2-6');
        const q27 = document.getElementsByName('q-2-7');
        const q28 = document.getElementsByName('q-2-8');

        let isValid = isValidForm(q21, q22, q23, q24, q25, q26, q27, q28);

        if (isValid) {
            modals[2].style.display = 'none';
            probability += q21[0].checked ? 20 : 0;
            probability += q22[0].checked ? 10 : 0;
            probability += q23[0].checked ? 10 : 0;
            probability += q24[0].checked ? 10 : 0;
            probability += q25[0].checked ? 10 : 0;
            probability += q26[0].checked ? 10 : 0;
            probability += q27[0].checked ? 10 : 0;
            probability += q28[0].checked ? 10 : 0;

            setResultText(probability);
            modals[5].style.display = 'block';
        } else {
            errors[2].style.display = 'block';
        }
    }

    resultButtons[2].onclick = (e) => {
        e.preventDefault();
        const q31 = document.getElementsByName('q-3-1');
        const q32 = document.getElementsByName('q-3-2');
        const q33 = document.getElementsByName('q-3-3');

        let isValid = isValidForm(q31, q32, q33);

        if (isValid) {
            modals[3].style.display = 'none';
            probability += q31[0].checked ? 20 : 0;
            probability += q32[0].checked ? 40 : 0;
            probability += q33[0].checked ? 40 : 0;
            setResultText(probability);
            modals[5].style.display = 'block';
        } else {
            errors[3].style.display = 'block';
        }
    }

    resultButtons[3].onclick = (e) => {
        e.preventDefault();
        const q41 = document.getElementsByName('q-4-1');
        const q42 = document.getElementsByName('q-4-2');
        const q43 = document.getElementsByName('q-4-3');
        const q44 = document.getElementsByName('q-4-4');
        const q45 = document.getElementsByName('q-4-5');

        let isValid = isValidForm(q41, q42, q43, q44, q45);

        if (isValid) {
            modals[4].style.display = 'none';
            probability += q41[0].checked ? 20 : 0;
            probability += q42[0].checked ? 20 : 0;
            probability += q43[0].checked ? 20 : 0;
            probability += q44[0].checked ? 20 : 0;
            probability += q45[0].checked ? 20 : 0;

            setResultText(probability);
            modals[5].style.display = 'block';
        } else {
            errors[4].style.display = 'block';
        }
    }

    window.onclick = (e) => {
        modals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        })
    }
})