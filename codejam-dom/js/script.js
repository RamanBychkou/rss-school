window.onload = function(){
    this.setTimeout( mainAction, 1000);
  
    function mainAction(){
  
      let check = localStorage.getItem('checkboxValue');
  
      if(check === 'false' || check === null || check === 'null' ){
  
        document.querySelector('.pop-up').style.display="block";
        document.querySelector('.btn-cross').addEventListener("click", clickHandler);
        function clickHandler(){
					document.querySelector('.pop-up').style.display="none";
					let checkAttr = document.querySelector('input').checked;
					localStorage.setItem('checkboxValue', checkAttr)
        };
      };
    };
  };
  
  
  