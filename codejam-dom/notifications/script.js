/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
window.onload = function onload() {
  function mainAction() {
    const check = localStorage.getItem('checkboxValue');

    if (check === 'false' || check === null || check === 'null') {
      const text = [
        'Товарищи! консультация с широким активом в значительной степени обуславливает создание направлений прогрессивного развития. ',
        'Не следует, однако забывать, что начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации.  ',
        'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения направлений прогрессивного развития. ',
      ];

      const clickHandler = function clickHandler() {
        document.querySelector('.pop-up').style.display = 'none';
        const checkAttr = document.querySelector('input').checked;
        localStorage.setItem('checkboxValue', checkAttr);
      };

      const clickPrev = function clickPrev() {
        let activeElement = document.querySelector('.active');
        activeElement = +(activeElement.id);
        document.getElementById(activeElement).classList.remove('active');
        if (activeElement === 0) {
          document.getElementById(text.length - 1).classList.add('active');
          document.querySelector('.inner-text p').innerHTML = text[text.length - 1];
        } else {
          activeElement -= 1;
          document.getElementById(activeElement).classList.add('active');
          document.querySelector('.inner-text p').innerHTML = text[activeElement];
        }
      };

      const clickNext = function clickNext() {
        let activeElement = document.querySelector('.active');
        activeElement = +(activeElement.id);
        document.getElementById(activeElement).classList.remove('active');

        if (activeElement === (text.length - 1)) {
          document.getElementById(0).classList.add('active');
        } else {
          activeElement += 1;
          document.getElementById(activeElement).classList.add('active');
          document.querySelector('.inner-text p').innerHTML = text[activeElement];
        }
      };
      const clickKeyb = function clickKeyb() {
        switch (event.keyCode) {
          case 37: {
            clickPrev();
            break;
          }
          case 39: {
            clickNext();
            break;
          }
          default: {
            break;
          }
        }
      };

      document.querySelector('.pop-up').style.display = 'block';
      document.querySelector('.btn-cross').addEventListener('click', clickHandler);
      document.querySelector('.btn-prev > button').addEventListener('click', clickPrev);
      document.querySelector('.btn-next > button').addEventListener('click', clickNext);
      document.addEventListener('keydown', clickKeyb);
    }
  }
  this.setTimeout(mainAction, 5000);
};
