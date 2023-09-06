(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,l=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(l)?l:String(l)),r)}var l}var o=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.alph=t,this.shifr=o,this.DEBUG=1,this.PRODACTION=0,this.LOG_LEVEL=this.PRODACTION}var o,n;return o=e,n=[{key:"_getLetterFromInputMessage",value:function(e,t){return e[t]}},{key:"_getLetterIndexFromAlphabet",value:function(e,t){for(var o=0;o<t.length;o++)if(t[o]===e)return o;return null}},{key:"_getCorrectShifrEncrypt",value:function(e,t){var o=NaN;t<0&&(t=-t);var n="alph.length = , ".concat(e.length);if(this._customConsoleLog(n,this.LOG_LEVEL),t>e.length){var r=Math.floor(t/e.length);n="wholeAlphLengthInShifr = , ".concat(r),this._customConsoleLog(n,this.LOG_LEVEL),o=t-r*e.length}else o=t;return o}},{key:"_plusLetterIndexFromAlphabet",value:function(e,t,o){var n=this._getCorrectShifrEncrypt(o,t),r="correctedShifrEncrypt = , ".concat(n);return this._customConsoleLog(r,this.LOG_LEVEL),e+n}},{key:"_getLetterFromAlphabet",value:function(e,t){return t[e>=t.length?this._correctionIndexLetterForALphabet(e,t):e]}},{key:"_correctionIndexLetterForALphabet",value:function(e,t){return e-t.length}},{key:"encrypt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.shifr,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.alph,n=[],r="message.lenght = ".concat(e.length);this._customConsoleLog(r,this.LOG_LEVEL);for(var l=0;l<e.length;l++){r="i =  ".concat(l),this._customConsoleLog(r,this.LOG_LEVEL);var s=this._getLetterFromInputMessage(e,l);r="currentLetter = ".concat(s),this._customConsoleLog(r,this.LOG_LEVEL);var a=this._getLetterIndexFromAlphabet(s,o);r="currentLetterIndexFromAlphabet = ".concat(a),this._customConsoleLog(r,this.LOG_LEVEL);var c=null;if(null!==a){var i=this._plusLetterIndexFromAlphabet(a,t,o);r="changedLetter = ".concat(i),this._customConsoleLog(r,this.LOG_LEVEL),c=this._getLetterFromAlphabet(i,o)}else c=s;r="newLetter = ".concat(c),this._customConsoleLog(r,this.LOG_LEVEL),n.push(c)}return n.join("")}},{key:"_getLetterFromAlphabetDecrypt",value:function(e,t){return t[e<0?this._correctionIndexLetterForALphabetDecrypt(e,t):e]}},{key:"_correctionIndexLetterForALphabetDecrypt",value:function(e,t){return e+t.length}},{key:"_getCorrectShifrDecrypt",value:function(e,t){var o=NaN;t<0&&(t=-t);var n="alph.length = , ".concat(e.length);if(this._customConsoleLog(n,this.LOG_LEVEL),t>-e.length){var r=Math.floor(t/e.length);n="wholeAlphLengthInShifr = , ".concat(r),this._customConsoleLog(n,this.LOG_LEVEL),o=t-r*e.length}else o=t;return o}},{key:"_minusLetterIndexFromAlphabet",value:function(e,t,o){var n=this._getCorrectShifrDecrypt(o,t),r="correctedShifrDecrypt = , ".concat(n);return this._customConsoleLog(r,this.LOG_LEVEL),e-n}},{key:"decrypt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.shifr,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.alph,n=[],r="secretMessage.length = ".concat(e.length);this._customConsoleLog(r,this.LOG_LEVEL);for(var l=0;l<e.length;l++){r="i =  ".concat(l),this._customConsoleLog(r,this.LOG_LEVEL);var s=this._getLetterFromInputMessage(e,l);r="secretLetterIndex =  ".concat(s),this._customConsoleLog(r,this.LOG_LEVEL);var a=this._getLetterIndexFromAlphabet(s,o);r="currentLetterIndexFromAlphabet =  ".concat(a),this._customConsoleLog(r,this.LOG_LEVEL);var c=null;if(null!==a){var i=this._minusLetterIndexFromAlphabet(a,t,o);r="newLetterIndex = ".concat(i),this._customConsoleLog(r,this.LOG_LEVEL),c=this._getLetterFromAlphabetDecrypt(i,o)}else c=s;r="newLetter = ".concat(c),this._customConsoleLog(r,this.LOG_LEVEL),n.push(c)}return n.join("")}},{key:"_testEncryptDecrypt",value:function(e,t,o){var n=this.encrypt(e,t,o);console.log("encryptedMessage = ",n);var r=this.decrypt(n,t,o);return console.log("decryptedMessage = ",r),r===e}},{key:"_customConsoleLog",value:function(e,t){1===t&&console.log(e)}},{key:"_testsSet",value:function(e,t){var o=this._testEncryptDecrypt(e,1,t);console.log("testStatus_1 = ",o);var n=this._testEncryptDecrypt(e,2,t);console.log("testStatus_2 = ",n);var r=this._testEncryptDecrypt(e,24,t);console.log("testStatus_3 = ",r);var l=this._testEncryptDecrypt(e,25554,t);console.log("testStatus_4 = ",l);var s=this._testEncryptDecrypt(e,-25554,t);console.log("testStatus_5 = ",s);var a=this._testEncryptDecrypt(e,0,t);console.log("testStatus_6 = ",a);var c=this._testEncryptDecrypt(e,-0,t);console.log("testStatus_7 = ",c);var i=t.length,u=this._testEncryptDecrypt(e,i,t);console.log("testStatus_8 = ",u);var d=t.length-1,h=this._testEncryptDecrypt(e,d,t);console.log("testStatus_9 = ",h);var m=t.length+1,y=this._testEncryptDecrypt(e,m,t);console.log("testStatus_10 = ",y)}},{key:"_testLatinAlph",value:function(){console.log("Testing Latin Alphabit... [ BEGIN ]"),this._testsSet("abc",["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),console.log("Testing Latin Alphabit... [ END ]")}},{key:"_testKiryllicAlph",value:function(){console.log("Testing Kiryllic Alphabit... [ BEGIN ]"),this._testsSet("абв",["а","б","в","г","д"]),console.log("Testing Kiryllic Alphabit... [ END ]")}},{key:"globalTest",value:function(){this._testLatinAlph(),this._testKiryllicAlph()}}],n&&t(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}(),n=new o(["а","б","в","г","д"],13),r=n.encrypt("абв"),l=n.decrypt(r);console.log("decryptedText = ",l);var s={ru:{lang:"русский",langButton:"Язык",encryptButton:"зашифровать",decryptButton:"расшифровать",textarea:"Напишите сообщение...",startButton:"Поехали!",copyButton:"Копировать!",modals:{modalOne:{title:"Ave!",text:"Подобно звездам на небесном своде, я, Юлий Цезарь, великий правитель Римской империи, обращаюсь к тебе сквозь пелену веков и пространства. Великий Цезарь ведом твоему присутствию. Как ветер, что мчится сквозь века, так и мои заслуги и слава остались невозмутимыми. Позволь вниманию твоему представить величественный шифр, созданный мною – Шифр Цезаря! Напиши свое послание, окутанное тайной, ибо перед тобой открываются двери в мир моего гения. Аве Цезарь!"},modalTwo:{text:'«Этот шифр, известный как "шифр Цезаря", — малейшee проявление моей бесконечной мудрости. Простейший и в то же время сложный, он призван олицетворить мою власть над языком и знанием. Ведь так же, как я повергал в покорность варварские земли, так и этот шифр покорит разум человечества и откроет перед вами новые горизонты знаний и возможностей. Как славен мой ум, так и этот шифр великолепен – каждая буква сдвигается, словно солдат на поле битвы, пока не раскроется тайна, как раскрываются мои завоевания перед миром. И как алый мак отличается среди зелени, так и я, Цезарь, сияю среди многих. Будь восхищен этими словами, так же как народ Рима восхищался мной. Ave!»'},modalThree:{text:"«Но довольно, прекратите лишние восхваления моей скромной персоны, ибо великий Цезарь предлагает тебе познать тайны своего шифра! Внимательно следуй моим указаниям и станешь обладателем незаурядной мощи...»"},modalFour:{title:"Вперед, Римлянин!",text:'«Великая суть шифра Цезаря – в сдвиге букв на определенное число позиций. Это число – твой ключ. Зависит от тебя, каким он будет. Возьми свое послание и начни переводить каждую букву на определенное количество позиций вперед по алфавиту. Если твой ключ, скажем, 3, то "А" станет "Г", "Б" – "Д", и так далее.»'},modalFive:{text:"«...здесь также можно расшифровать послание. Для начала работы выбери нужный режим.»"},modalSix:{title:"Тайна остается тайной!",text:"«Слова - это война, а ключ – твой личный щит. Храни его как свои золотые монеты. Выбери алфавит для шифрования, для большей надежности ты можешь загрузить свой собственный алфавит. О век технологий!..»"},modalSeven:{title:"Ave atque vale!",text:"«Помни, добрый друг, что каждый враг может овладеть этой простой магией. Для безопасности выбирай более высокие значения ключа, чтобы сделать тайну сложнее для расшифровки. Твоя власть - в том, как ты используешь этот шифр. Раскрывай его только достойным и достигнешь высот моих побед!»"}},errors:{choseLangAndOperationTitle:"Что-то пошло не так!",choseLang:"Пожалуйста, выберите язык шифрования.",choseOperation:"Пожалуйста, выберите необходимую операцию.",addFileTitle:"Упс!",addFileTxt:"Добавьте файл .txt формата.",addFileOnlyOne:"Можно добавить только один файл за раз."},successfulModal:{title:"Великолепно!",text:"Алфавит успешно добавлен, теперь вы можете увидеть его в списке."},modalAddLangTitle:"Загрузите файл:",modalAddLangText:'*Буквы и знаки "алфавита" должны написаны через запятую. Например: a, ы, л, д, в',nextButton:"Далее",finishButton:"Ave Цезарь!"},en:{lang:"english",langButton:"Language",encryptButton:"encryption",decryptButton:"decryption",textarea:"Write your message...",startButton:"Let`s start!",copyButton:"Copy!",modals:{modalOne:{title:"Ave!",text:"Like stars in the firmament of heaven, I, Julius Caesar, the greatest ruler of the Roman Empire, appeal to you through the veil of centuries and space. The great Caesar is aware of your presence. Like the wind that rushes through the ages, so my merits and glory remained imperturbable. Allow your attention to present the majestic cipher that I created - the Caesar Cipher! Write your message, shrouded in mystery, for the doors to the world of my genius are opening before you. Ave Caesar!"},modalTwo:{text:"«This cipher, known as the Caesar cipher, is the smallest manifestation of my infinite wisdom. The simplest and at the same time complex, it is intended to personify my power over language and knowledge. After all, just as I subjugated the barbarian lands, so this cipher will conquer the mind of mankind and open up new horizons of knowledge and opportunities for you. As my mind is glorious, so is this cipher magnificent - each letter shifts like a soldier on the battlefield until the mystery is revealed, as my conquests are revealed to the world. And as the scarlet poppy stands out among the greenery, so I, Caesar, shine among the many. Be delighted with these words, just as the people of Rome admired me. Ave!»"},modalThree:{text:"«But enough, cease the excessive praise of my modest self, for the great Caesar offers you the chance to comprehend the secrets of his cipher! Attentively heed my instructions, and you shall become the possessor of extraordinary might...»"},modalFour:{title:"Onward, Roman!",text:'«The grand essence of the Caesar cipher lies in the shifting of letters by a certain number of positions. This number is your key. It is up to you to determine its value. Take your message and begin translating each letter by a specified count of positions forward in the alphabet. If your key, let`s say, is 3, then "A" will become "D," "B" will become "E," and so forth.»'},modalFive:{text:"«...here you can also decipher the message. To commence your endeavor, choose the desired mode of operation.»"},modalSix:{title:"The secret remains a secret!",text:"«Words are warfare, and the key is your personal shield. Guard it as you would your precious gold coins. Choose an alphabet for encryption. For enhanced security, you can even upload your own custom alphabet. Oh, the age of technology!...»"},modalSeven:{title:"Ave atque vale!",text:"«Remember, dear friend, that every foe can grasp this simple magic. For added security, opt for higher key values to render the secret more resistant to decryption. Your power lies in how you wield this cipher. Disclose it solely to the worthy, and you shall attain heights akin to my victories!»"}},errors:{choseLangAndOperationTitle:"Something went wrong!",choseLang:"Please select an encryption language.",choseOperation:"Please select the required operation.",addFileTitle:"Oops!",addFileTxt:"Add a .txt format file.",addFileOnlyOne:"Only one file can be added at a time."},successfulModal:{title:"Great!",text:"Alphabet added successfully, now you can see it in the list."},modalAddLangTitle:"UPLOAD THE FILE:",modalAddLangText:'*The letters and characters of the "alphabet" should be written separated by commas. For example: a, p, h, w',nextButton:"Next",finishButton:"Ave Caesar!"}},a=document.querySelector(".menubtn"),c=document.querySelector(".add-lang"),i=document.querySelector(".add-lang__file"),u=document.querySelector(".dropbtn"),d=document.querySelector(".button__start"),h=document.querySelector(".button__copy"),m=document.querySelector(".close-button"),y=document.querySelector(".encryptButton"),p=document.querySelector(".decryptButton"),g=V(),f=document.getElementById("title__shif"),L=document.querySelector(".step-chose"),_=document.querySelectorAll(".modal"),v=document.querySelectorAll(".modal__next-button"),x=document.querySelector(".modal__finish-button"),b=document.querySelectorAll(".modal__skip-button"),E=document.querySelector(".step-chose"),S=document.querySelector(".dropdown"),T=document.querySelector(".header__menu"),w=(document.querySelector(".modal-alert").querySelector(".modal__content_text"),0),A=null,C=[{label:"Eng",alph:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",".",",",";",":","=",'"',"'","-","+","_"," ","?","!",")","(","0","1","2","3","4","5","6","7","8","9"]},{label:"Rus",alph:["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я","А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я",".",",",";",":","=",'"',"'","-","+","_"," ","?","!",")","(","0","1","2","3","4","5","6","7","8","9"]},{label:"+",alph:null}],q=new o(A,L.value),k=document.querySelector(".input__block_shif"),O=document.querySelector(".input__block_deshif");function B(){c.classList.toggle("modal__opened"),H()}function F(e){var t=e.target.closest(".langBtn");"+"===t.innerHTML?B():(console.log("clickedButton.innerHTML = |".concat(t.innerHTML,"|")),C.forEach((function(e){if(e.label===t.innerHTML)return console.log(),A=e.alph,void(a.innerHTML=t.innerHTML)})))}function M(e,t){var o=document.querySelector(".modal-alert"),n=o.querySelector(".modal__content_text_only");o.querySelector(".modal__content_title").textContent=e,n.textContent=t,o.style.display="block",H(),o.querySelector(".modal__close-button").addEventListener("click",(function(){o.style.display="none",G()}))}function I(){_[w].style.display="block",H()}function D(){_[w].style.display="none",G()}function H(){document.body.style.overflow="hidden"}function G(){document.body.style.overflow=""}function V(){var e,t=window.navigator.language,o=s[e="ru"===t?t:"en"];document.querySelector(".menubtn").textContent=o.langButton,document.querySelector(".encryptButton").textContent=o.encryptButton,document.querySelector(".decryptButton").textContent=o.decryptButton,document.querySelector(".button__start").textContent=o.startButton,document.querySelector(".button__copy").textContent=o.copyButton;var n=document.querySelector(".add-lang");n.querySelector(".modal__content_title").textContent=o.modalAddLangTitle,n.querySelector(".modal__content_text_only").textContent=o.modalAddLangText,document.querySelectorAll(".modal__next-button").forEach((function(e){e.textContent=o.nextButton})),document.querySelectorAll(".modal__finish-button").forEach((function(e){e.textContent=o.finishButton})),document.querySelector(".input__block_shif").placeholder=o.textarea;var r=document.querySelector(".modal-one");r.querySelector(".modal__content_title").textContent=o.modals.modalOne.title,r.querySelector(".modal__content_text").textContent=o.modals.modalOne.text,document.querySelector(".modal-two").querySelector(".modal__content_text_only").textContent=o.modals.modalTwo.text,document.querySelector(".modal-three").querySelector(".modal__content_text_only").textContent=o.modals.modalThree.text;var l=document.querySelector(".modal-four");l.querySelector(".modal__content_title").textContent=o.modals.modalFour.title,l.querySelector(".modal__content_text_only").textContent=o.modals.modalFour.text,document.querySelector(".modal-five").querySelector(".modal__content_text_only").textContent=o.modals.modalFive.text;var a=document.querySelector(".modal-six");a.querySelector(".modal__content_title").textContent=o.modals.modalSix.title,a.querySelector(".modal__content_text_only").textContent=o.modals.modalSix.text;var c=document.querySelector(".modal-seven");return c.querySelector(".modal__content_title").textContent=o.modals.modalSeven.title,c.querySelector(".modal__content_text_only").textContent=o.modals.modalSeven.text,e}u.addEventListener("click",(function(){console.log("openMenu"),document.getElementById("dropdown").classList.toggle("show")})),window.onclick=function(e){if(function(){var e=document.querySelector(".menudown-content"),t=e.getElementsByTagName("button");console.log("childDivs = ",t);for(var o=t.length-1;o>=0;--o)t[o].remove();C.forEach((function(t){var o=document.createElement("button");o.classList.add("langBtn"),o.innerHTML=t.label,o.addEventListener("click",F),e.appendChild(o)}))}(),function(e){if(console.log("dropdown"),!e.target.matches(".dropbtn")){var t,o=document.getElementsByClassName("dropdown-content");for(t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&n.classList.remove("show")}}}(e),!e.target.matches(".menubtn")){var t,o=document.getElementsByClassName("menudown-content");for(t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&n.classList.remove("show")}}},y.addEventListener("click",(function(){f.innerHTML=s[g].encryptButton,document.getElementById("dropdown").classList.toggle("show")})),p.addEventListener("click",(function(){f.innerHTML=s[g].decryptButton,document.getElementById("dropdown").classList.toggle("show")})),m.addEventListener("click",B),a.addEventListener("click",(function(){console.log("openMenuLang"),document.getElementById("menudown").classList.toggle("show")})),i.onchange=function(e){var t=s[g];if(console.log("inputFile.onchange !!!"),console.log("input = ",e),e.srcElement.files.length>1)M(t.errors.addFileTitle,t.errors.addFileOnlyOne);else{var o=e.srcElement.files[0],n=o.name,r=n.substring(0,n.length-4);console.log("langName = ",r);var l=new FileReader;l.readAsText(o),l.onload=function(){var e=s[g];console.log("reader.result = ",l.result);var t=function(e){console.log("content =",e);for(var t=[],o=[],n=0;n<e.length;n++)if(","!==e[n]&&n!==e.length-1)o.push(e[n]);else{n===e.length-1&&o.push(e[n]);var r=o.join("").split(" ").join("");if(console.log("strip_buf = |".concat(r,"|")),1!==r.length)return console.log("ERROR: strip_buf.length !== 1. strip_buf = |".concat(r,"|")),null;t.push(r),o=[]}return t}(l.result);if(null!==t){console.log("userCustomAlph = ",t);var o={label:r,alph:t};C.unshift(o),B(),M(e.successfulModal.title,e.successfulModal.text)}else M(e.errors.addFileTitle,e.errors.addFileTxt)},l.onerror=function(){console.log(l.error)}}},d.addEventListener("click",(function(){var e=s[g];if("Language"!==a.innerHTML&&"Язык"!==a.innerHTML){if(""===f.innerHTML)return console.log("title.innerHTML",f.innerHTML),void M(e.errors.choseLangAndOperationTitle,e.errors.choseOperation);if(console.log("currentAlph = ",A),"encryption"===f.innerHTML||"зашифровать"===f.innerHTML){console.log("its encryption");var t=q.encrypt(k.value,Number(L.value),A);console.log("resEncrypt = ",t),O.innerHTML=t,console.log(" outputText.innerHTML = ",O.innerHTML)}if("decryption"===f.innerHTML||"расшифровать"===f.innerHTML){console.log("its decryption");var o=q.decrypt(k.value,Number(L.value),A);console.log("resDecrypt = ",o),O.innerHTML=o,console.log(" outputText.innerHTML = ",O.innerHTML)}console.log("inputText =",k.value),console.log("shifr =",L.value)}else M(e.errors.choseLangAndOperationTitle,e.errors.choseLang)})),h.addEventListener("click",(function(){console.log("copyButton"),console.log("outputText =",O),O.select(),document.execCommand("copy")})),v.forEach((function(e,t){e.addEventListener("click",(function(){D(),++w<_.length&&I()})),v[2].addEventListener("click",(function(){E.classList.add("special-style")})),v[3].addEventListener("click",(function(){E.classList.remove("special-style"),S.classList.add("special-style")})),v[4].addEventListener("click",(function(){S.classList.remove("special-style"),T.classList.add("special-style")})),v[5].addEventListener("click",(function(){T.classList.remove("special-style")}))})),b.forEach((function(e){e.addEventListener("click",(function(){D(),_.forEach((function(e){e.style.display="none"}))}))})),x.addEventListener("click",(function(){D()})),V(),I()})();