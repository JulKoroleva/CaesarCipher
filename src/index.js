
import './index.css'; 

import { CipherCeaser } from "./CipherCeaser.js"
import { translations } from "./translations.js"

const menuButtonLang = document.querySelector('.menubtn');
const addButtom = document.querySelector('.add-lang');
const inputFile = document.querySelector('.add-lang__file');

const menuButton = document.querySelector('.dropbtn');
const startButton = document.querySelector('.button__start');
const copyButton = document.querySelector('.button__copy');

const closeButton = document.querySelector('.close-button');
const encryptButton = document.querySelector('.encryptButton');
const decryptButton = document.querySelector('.decryptButton');

let lang = setLanguage ();

let title = document.getElementById("title__shif");

let shifr = document.querySelector('.step-chose')

const modals = document.querySelectorAll('.modal');
const nextButtons = document.querySelectorAll('.modal__next-button');
const finishButton = document.querySelector('.modal__finish-button');
const skipButtons = document.querySelectorAll('.modal__skip-button');
const stepChoseInput = document.querySelector('.step-chose');
const dropdownButton = document.querySelector('.dropdown');
const menudownButton = document.querySelector('.header__menu');
const alertModal = document.querySelector('.modal-alert');
const alertText = alertModal.querySelector('.modal__content_text');

let currentModalIndex = 0;

let currentAlph = null;
const latinAlph = [
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                    '.', ',', ';', ':', '=', '"', '\'', '-', '+', '_', ' ', '?', '!', ')', '(', 
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                  ];

const cyrillicAlph = [
                    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
                    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
                    '.', ',', ';', ':', '=', '"', '\'', '-', '+', '_', ' ', '?', '!', ')', '(', 
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                  ];
  
const objLatinAlph = {
  label: "Eng",
  alph: latinAlph
};

const objCyrillicAlph = {
  label: "Rus",
  alph: cyrillicAlph
};

const addUserAlph = {
  label: "+",
  alph: null
};

const objAlphArr = [
  objLatinAlph,
  objCyrillicAlph,
  addUserAlph,
];

const cipherCeaser = new CipherCeaser(currentAlph, shifr.value);

let inputText = document.querySelector('.input__block_shif');
let outputText = document.querySelector('.input__block_deshif') 

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function openMenu() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  menuButton.addEventListener('click', () => {
    console.log('openMenu');
    openMenu();
  })

  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  function openDropdown (event) {
    console.log('dropdown')
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          
        }
      }
    }
  }


  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function openMenudown (event) {
    dynamicAddButtonsLanguages();
    openDropdown (event)
    if (!event.target.matches('.menubtn')) {
      var menudowns = document.getElementsByClassName("menudown-content");
      var i;
      for (i = 0; i < menudowns.length; i++) {
        var openMenudown = menudowns[i];
        if (openMenudown.classList.contains('show')) {
          openMenudown.classList.remove('show');
          
        }
      }
    }
  }

  /// Поменять заголовок окна
  encryptButton.addEventListener('click', () => {
    title.innerHTML = translations[lang].encryptButton;
    document.getElementById("dropdown").classList.toggle("show");
  })

  decryptButton.addEventListener('click', () => {
    title.innerHTML = translations[lang].decryptButton;
    document.getElementById("dropdown").classList.toggle("show");
  })
  


  function openMenuLang() {
    document.getElementById("menudown").classList.toggle("show");
  }
  
  function openModalWindow () {
    addButtom.classList.toggle('modal__opened');
    disableScroll();
  }

  closeButton.addEventListener('click', openModalWindow)

  menuButtonLang.addEventListener('click', () => {
    console.log('openMenuLang');
    openMenuLang()
  })

  function loadAlphFileModalShow() {
    console.log('Modal window for load alph_file!'); 
  }

  function handlerLangButtonClick(elem) {
    const clickedButton = elem.target.closest('.langBtn');
    if (clickedButton.innerHTML === "+") {
      //loadAlphFileModalShow();
      openModalWindow()
    } else {
      console.log(`clickedButton.innerHTML = |${clickedButton.innerHTML}|`);
      objAlphArr.forEach((currentAlpObj) => {
        if (currentAlpObj.label === clickedButton.innerHTML) {
          console.log()
          currentAlph = currentAlpObj.alph;
          menuButtonLang.innerHTML = clickedButton.innerHTML;
          return
        }
        
      });
    }
    
  }






  
  function dynamicAddButtonsLanguages() {
    const langDiv = document.querySelector('.menudown-content');
    // remove all elements in langDiv
    let childDivs = langDiv.getElementsByTagName('button');
    console.log('childDivs = ', childDivs);
    for(let i = childDivs.length - 1; i >= 0; --i)
    {
      childDivs[i].remove();
    }

    objAlphArr.forEach((currentObjLang) => {
      let btnLang = document.createElement("button");
      btnLang.classList.add('langBtn');
      btnLang.innerHTML = currentObjLang.label;
      btnLang.addEventListener('click', handlerLangButtonClick);
      langDiv.appendChild(btnLang);
    })
  }

  


  function parseFileAlph(content) {
    console.log('content =', content);

    const alph = [];
    let buf = [];
    for (let i = 0; i < content.length; i++) {
      if (content[i] !== ',' && i !== content.length - 1) {
        buf.push(content[i]);
      } else {
        if (i === content.length - 1) {
          buf.push(content[i]);
        }
        const strip_buf =  buf.join('').split(' ').join('');
        console.log(`strip_buf = |${strip_buf}|`);
        if (strip_buf.length !== 1) {
          console.log(`ERROR: strip_buf.length !== 1. strip_buf = |${strip_buf}|`);
          return null;
        }
        alph.push(strip_buf);
        buf = [];
      }
    }
    return alph;
  }

  inputFile.onchange = function(event) {
    console.log('inputFile.onchange !!!');
    console.log('input = ', event)

    if (event.srcElement.files.length > 1) {
      showModal('Упс!','Можно добавить только один файл за раз.');
      return;
    }

    const file = event.srcElement.files[0];

    const fileName = file.name;
    const langName = fileName.substring(0, fileName.length - 4);
    console.log('langName = ', langName);

    //alert(`File name: ${file.name}`); // например, my.png
    //alert(`Last modified: ${file.lastModified}`); // например, 1552830408824

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      console.log('reader.result = ', reader.result);
      const rawFileAlph = reader.result;
      const userCustomAlph = parseFileAlph(rawFileAlph);
      if (userCustomAlph === null) {
        showModal('Упс!','Добавьте файл .txt формата.');
        return;
      } else {
        console.log('userCustomAlph = ', userCustomAlph);
        const userCustomAlphObj = {
          label: langName,
          alph: userCustomAlph,
        };
        objAlphArr.unshift(userCustomAlphObj);
        openModalWindow()
        showModal('Великолепно!', 'Алфавит успешно добавлен, теперь вы можете увидеть его в спискею')
      }
    };

    reader.onerror = function() {
      console.log(reader.error);
    };

  }

  /* Поменять заголовок окна
  encryptButton.addEventListener('click', () => {
    title.innerHTML = "encryption";
  })

  decryptButton.addEventListener('click', () => {
    title.innerHTML = "decryption";
  })*/



startButton.addEventListener('click', () => {
  
  if (menuButtonLang.innerHTML === "Language" || menuButtonLang.innerHTML === "Язык") {
      // Show the language selection modal instead of using alert
      showModal('Что-то пошло не так!','Пожалуйста, выберите язык шифрования.');
      return;
  }

  if (title.innerHTML === "") {
    console.log('title.innerHTML', title.innerHTML)
      // Show the operation choice modal
      showModal('Что-то пошло не так!','Пожалуйста, выберите необходимую операцию.');
      return;
  }

    console.log('currentAlph = ', currentAlph);

    if (title.innerHTML === "encryption" || title.innerHTML === "зашифровать"){
      console.log('its encryption');
      const resEncrypt = cipherCeaser.encrypt(inputText.value, Number(shifr.value), currentAlph)
      console.log('resEncrypt = ', resEncrypt)
      outputText.innerHTML = resEncrypt;
      console.log(' outputText.innerHTML = ',  outputText.innerHTML)
    }
    if (title.innerHTML === "decryption" || title.innerHTML === "расшифровать"){
      console.log('its decryption');
      const resDecrypt = cipherCeaser.decrypt(inputText.value, Number(shifr.value), currentAlph)
      console.log('resDecrypt = ', resDecrypt)
      outputText.innerHTML = resDecrypt;
      console.log(' outputText.innerHTML = ',  outputText.innerHTML)
    }    
    console.log('inputText =', inputText.value)
    console.log('shifr =', shifr.value)
  
  })

  copyButton.addEventListener('click', () => {
    console.log("copyButton")
    console.log('outputText =', outputText)

    outputText.select();
    document.execCommand("copy");

    
  })

  
  function showModal(title, message) {
    const alertModal = document.querySelector('.modal-alert');
    const alertText = alertModal.querySelector('.modal__content_text_only');
    const alertTitle = alertModal.querySelector('.modal__content_title');

    alertTitle.textContent = title;
    alertText.textContent = message;
    alertModal.style.display = 'block';
    disableScroll();

    const closeButton = alertModal.querySelector('.modal__close-button');
    closeButton.addEventListener('click', () => {
      alertModal.style.display = 'none';
        enableScroll();
    });
}

  
  function showCurrentModal() {
      modals[currentModalIndex].style.display = 'block';
      disableScroll();
  }

  function hideCurrentModal() {
      modals[currentModalIndex].style.display = 'none';
      enableScroll();
  }

  nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          hideCurrentModal();
          currentModalIndex++;
          if (currentModalIndex < modals.length) {
              showCurrentModal();
          } else {
              // All modals finished
              // Add any final actions you want to perform
          }
      });
      nextButtons[2].addEventListener('click', () => {      
        stepChoseInput.classList.add('special-style'); 
    });

      nextButtons[3].addEventListener('click', () => { 
        stepChoseInput.classList.remove('special-style');           
        dropdownButton.classList.add('special-style'); 
    });

      nextButtons[4].addEventListener('click', () => { 
        dropdownButton.classList.remove('special-style');            
        menudownButton.classList.add('special-style'); 
    });
      nextButtons[5].addEventListener('click', () => { 
        menudownButton.classList.remove('special-style');     
    });
  });

  skipButtons.forEach((button) => {
      button.addEventListener('click', () => {
          hideCurrentModal();
          // Hide all modals if "Skip" button is clicked
          modals.forEach((modal) => {
              modal.style.display = 'none';
          });
      });
  });


  finishButton.addEventListener('click', () => {
    hideCurrentModal();
});

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}


function setLanguage () {
  const browserLanguage = window.navigator.language;
  let lang = '';
    if (browserLanguage === 'ru') {
      lang = browserLanguage
    } else {
      lang = 'en'
    }

  let translation = translations[lang]
  document.querySelector('.menubtn').textContent = translation.langButton; 
  document.querySelector('.encryptButton').textContent = translation.encryptButton; 
  document.querySelector('.decryptButton').textContent = translation.decryptButton; 
  document.querySelector('.button__start').textContent = translation.startButton; 
  document.querySelector('.button__copy').textContent = translation.copyButton; 

  const addLangButton = document.querySelector('.add-lang');  
  addLangButton.querySelector('.modal__content_title').textContent = translation.modalAddLangTitle;   
  addLangButton.querySelector('.modal__content_text_only').textContent = translation.modalAddLangText; 
  
  const nextButtons = document.querySelectorAll('.modal__next-button');
  nextButtons.forEach(button => {
    button.textContent = translation.nextButton;
  });
  const finishButton = document.querySelectorAll('.modal__finish-button');
  finishButton.forEach(button => {
    button.textContent = translation.finishButton;
  });

  const modalOne = document.querySelector('.modal-one');
  modalOne.querySelector('.modal__content_title').textContent = translation.modals.modalOne.title;
  modalOne.querySelector('.modal__content_text').textContent = translation.modals.modalOne.text;

  const modalTwo = document.querySelector('.modal-two');
  modalTwo.querySelector('.modal__content_text_only').textContent = translation.modals.modalTwo.text;

  const modalThree = document.querySelector('.modal-three');
  modalThree.querySelector('.modal__content_text_only').textContent = translation.modals.modalThree.text;

  const modalFour = document.querySelector('.modal-four');
  modalFour.querySelector('.modal__content_title').textContent = translation.modals.modalFour.title;
  modalFour.querySelector('.modal__content_text_only').textContent = translation.modals.modalFour.text;

  const modalFive = document.querySelector('.modal-five');
  modalFive.querySelector('.modal__content_text_only').textContent = translation.modals.modalFive.text;

  const modalSix = document.querySelector('.modal-six');
  modalSix.querySelector('.modal__content_title').textContent = translation.modals.modalSix.title;
  modalSix.querySelector('.modal__content_text_only').textContent = translation.modals.modalSix.text;

  const modalSeven = document.querySelector('.modal-seven');
  modalSeven.querySelector('.modal__content_title').textContent = translation.modals.modalSeven.title;
  modalSeven.querySelector('.modal__content_text_only').textContent = translation.modals.modalSeven.text;


  return lang
}

  // Show the first modal when the page loads
  setLanguage();
  showCurrentModal();