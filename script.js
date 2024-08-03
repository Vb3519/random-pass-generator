const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '123456789';
const symbols = '@#$%^&*()_+~|}{[]></-=';


// --------------------------------------------------- ФУНКЦИИ --------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //

// Для генерации пароля использую фукнцию с указанием макс значения: "Math.floor(Math.random() * max);" max - это длина массива символов
function generatePassword() {
    let passLength = 12;
    let passwordVal = '';
    
    while( passLength > passwordVal.length ) {
        passwordVal += upperCaseLetters[ Math.floor(Math.random() * upperCaseLetters.length) ];
        passwordVal += lowerCaseLetters[ Math.floor(Math.random() * lowerCaseLetters.length) ];
        passwordVal += numbers[ Math.floor(Math.random() * numbers.length) ];
        passwordVal += symbols[ Math.floor(Math.random() * symbols.length) ];
    }
    
    return passwordVal;
}

// Добавление и отображение пароля в поле input:
function addPasswordValue() {
    let inputElem = document.querySelector('.input-form__input');
    inputElem.value = generatePassword();
    //inputElem.setAttribute( 'value', generatePassword() ); // добавление в поле input сгенерированного пароля, если потом его стереть - функция НЕ работает

    inputElem.removeAttribute('data-passCopied', 'password-copied');
    changeTooltip();
}
// Обработчик onclick - указан в теге;
// const generatePassBtn = document.querySelector('.pass-generator__btn');
// generatePassBtn.addEventListener('click', addPasswordValue);

// Копирование значения сгенерированного пароля:
function copyPasswordValue(e) {
    let inputElem = document.querySelector('.input-form__input');
    let target = e.target;

    if ( !target.classList.contains('copy-pass-btn') || inputElem.value === '') {
        return;
    }

    inputElem.select(); // выделение поля input по клику;

    // inputElem.classList.add('active');
    
    document.execCommand('selectAll', false, null);
    document.execCommand('copy', false, null);
    inputElem.setAttribute('data-passCopied', 'password-copied');
    changeTooltip();
    
}

// Отображение подсказки над кнопкой копирования пароля:
function showCopyPassTooltip(e) {
    let target = e.target;

    if ( !target.classList.contains('copy-pass-btn') ) {
        return;
    }

    let tooltipElem = document.querySelector('.pass-tooltip');
    tooltipElem.style.visibility = 'visible';
    //tooltipElem.classList.toggle('pass-tooltip__active');
}

// Скрытие подсказки над кнопкой копирования пароля:
function hideCopyPassTooltip(e) {
    let target = e.target;

    if ( !target.classList.contains('copy-pass-btn') ) {
        return;
    }

    let tooltipElem = document.querySelector('.pass-tooltip');
    tooltipElem.style.visibility = 'hidden';
    //tooltipElem.classList.toggle('pass-tooltip__active');
}

// Изменения текста подсказки в зависимости от того скопирован пользователем пароль или нет
function changeTooltip() {
    let inputElem = document.querySelector('.input-form__input');
    let tooltipElem = document.querySelector('.pass-tooltip');    
    
    if (inputElem.dataset.passcopied === 'password-copied') {
        tooltipElem.innerHTML = `Пароль скопирован!`;
    } else {
        tooltipElem.innerHTML = `Скопировать пароль`;
    }
}

// --------------------------------------------------- ОБРАБОТЧИКИ ----------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------- //

document.addEventListener('click', copyPasswordValue); // Копирование значения сгенерированного пароля;
document.addEventListener('mouseover', showCopyPassTooltip); // Отображение подсказки над кнопкой копирования пароля
document.addEventListener('mouseout', hideCopyPassTooltip); // Скрытие подсказки над кнопкой копирования пароля









// // --------------------------------------------------------------------------------------------------------------------------- //
// // -------------------------------------- Мое решение (практикуюсь с циклами): ----------------------------------------------- //
// // --------------------------------------------------------------------------------------------------------------------------- //

// function createPassSymbolsArr() {
//     let resultArr = [];
//     resultArr.push(upperCaseLetters, lowerCaseLetters, numbers, symbols);    
//     return resultArr;
// }

// let mySymbolsArr = createPassSymbolsArr();

// function generateUserPassword(inputSymbolsArr) {
//     let passLength = 10;
//     let passwordVal = '';

//     while( passwordVal.length < passLength ) {
//         for (let i = 0; i < inputSymbolsArr.length; i++) {
//             passwordVal += inputSymbolsArr[i][ Math.floor( Math.random() * inputSymbolsArr[i].length ) ];
            
//             if (passwordVal.length === passLength) { // проверка соответствия текущей длины пароля, длине пароля которую указал пользователь (если больше, то break)
//                 break;
//             }
//         }
//     }

//     return passwordVal;
// }

// // generateUserPassword(mySymbolsArr);