const slide = document.getElementsByClassName('foto1');

function slideFunction() {

    for (let i = 0; i < slide.length; i++){
    slide[i].removeAttribute("id");
    void slide[i].offsetWidth;    
    slide[i].setAttribute("id", "slideKiri");
  }

}
