const slide = document.getElementsByClassName('main1');
const sub = document.getElementsByClassName('sub');
const lib = document.getElementById("fotos");


function appendImage(parent, imageSrc){
  let image = document.createElement('img');
  image.src = imageSrc;
  parent.appendChild(image);
}


function show1(){
  removeElement()
  let block = document.getElementById("block1");
  let photos = document.getElementById('photos');

  appendImage(photos, "image/aam.jpg");
  appendImage(photos, "image/alfi.jpg");
  appendImage(photos, "image/nanda.jpg");

  block.setAttribute("onclick", "removeElement()");
}

function show2(){
  removeElement()
  const block = document.getElementById("block2");
  const photos = document.getElementById('photos');

  const image = document.createElement('img'); //putting this inside
  image.src = "image/aam.jpg";
  photos.appendChild(image);

  const image2 = document.createElement('img'); 
  image2.src = "image/aldi.jpg";
  photos.appendChild(image2);

  const image3 = document.createElement('img');
  image3.src = "image/nanda.jpg";
  photos.appendChild(image3);

  block.setAttribute("onclick", "removeElement()");
}


function removeElement(){
  const block = document.getElementById("block1");
  const block2 = document.getElementById("block2");
  const photos = document.getElementById("photos");
  if (photos){
    const image = photos.getElementsByTagName("img");
    if (image){
      let a = 0;
      while (image.length > 0) {
        image[0].remove();
      }
    }
  }

  block.setAttribute("onclick", "show1()");
  block2.setAttribute("onclick", "show2()");
}




function slideFunction() {
    for (let i = 0; i < slide.length; i++){
    slide[i].removeAttribute("id");
    void slide[i].offsetWidth;    
    slide[i].setAttribute("id", "");
    slide[i].removeAttribute("onclick");
  }
  
    lib.innerHTML += '<img class="sub" src="image/aldi.jpg">';
    lib.innerHTML += '<img class="sub" src="image/bimo.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/alfi.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/alif.jpg"">';
    lib.innerHTML += '<img class="sub" src="image/nanda.jpg"">';
    
    

  for (let i = 0; i < sub.length; i++){
    sub[i].setAttribute("id", "fadein");
  }

}
