window.onload = function(){
    this.setTimeout( mainAction, 1000);
  
    function mainAction(){
  
      let check = localStorage.getItem('checkboxValue');
  
      if(check === 'false' || check === null || check === 'null' ){
  
        document.querySelector('.pop-up').style.display="block";
        document.querySelector('.btn-cross').addEventListener("click", clickHandler);
				
				let text = [
					'Товарищи! консультация с широким активом в значительной степени обуславливает создание направлений прогрессивного развития. ',
					'Не следует, однако забывать, что начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации.  ',
					'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения направлений прогрессивного развития. '
				];

				document.querySelector('.btn-prev > button').addEventListener("click", clickPrev);
				document.querySelector('.btn-next > button').addEventListener("click", clickNext);

				function clickHandler(){
					document.querySelector('.pop-up').style.display="none";
					let checkAttr = document.querySelector('input').checked;
					localStorage.setItem('checkboxValue', checkAttr)
				};
				
				function clickPrev() {
					let activeElement = document.querySelector('.active');
					activeElement= +(activeElement.id);
					document.getElementById(activeElement).classList.remove('active')
					if (activeElement == 0) {
						document.getElementById(text.length - 1).classList.add('active')
						document.querySelector('.inner-text p').innerHTML = text[text.length-1];
						
					} else  {
						activeElement = activeElement -1
						document.getElementById(activeElement).classList.add('active')
						document.querySelector('.inner-text p').innerHTML = text[activeElement];
					}
				}

				function clickNext() {
					let activeElement = document.querySelector('.active');
					activeElement= activeElement.id;
					document.getElementById(activeElement).classList.remove('active')
	
						if(activeElement == (text.length - 1)) {
							document.getElementById(0).classList.add('active')
							createP(0)
						} else {
							activeElement = Number(activeElement)
							activeElement = activeElement+ 1;
							document.getElementById(activeElement).classList.add('active')
							document.querySelector('.inner-text p').innerHTML = text[activeElement];
						}
				}
      };
    };
  };
  
  
  