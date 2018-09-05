// toggler for nav MOBILE ONLY
if (window.outerWidth < 750) {
  document.getElementById('navigation').addEventListener('click', (event) => {
    let theNavigation = document.getElementsByTagName('nav');

    if (theNavigation[0].className === 'inactive') {
      theNavigation[0].className = 'active';
      theNavigation[0].style.display = 'block';
      theNavigation[0].style.height = 'auto';
      const height = theNavigation[0].clientHeight + 'px';
      theNavigation[0].style.height = '0px';

      setTimeout(() => {
        theNavigation[0].style.height = height;
      }, 0);
    } else {
      theNavigation[0].className = 'inactive';
      theNavigation[0].style.height = '0px';
    }
  });
}

// Change the hero image on click
const hero1 = document.getElementsByClassName('hero-1')[0];
const hero2 = document.getElementsByClassName('hero-2')[0];
const hero3 = document.getElementsByClassName('hero-3')[0];
const hero4 = document.getElementsByClassName('hero-4')[0];
const preview1 = document.getElementsByClassName('preview-1')[0];
const preview2 = document.getElementsByClassName('preview-2')[0];
const preview3 = document.getElementsByClassName('preview-3')[0];
const preview4 = document.getElementsByClassName('preview-4')[0];

preview1.onclick = () => {
  hero1.style.display = 'block';
  hero2.style.display = 'none';
  hero3.style.display = 'none';
  hero4.style.display = 'none';
  preview1.style.border = '5px solid black';
  preview2.style.border = 'none';
  preview3.style.border = 'none';
  preview4.style.border = 'none';
};

preview2.onclick = () => {
  hero1.style.display = 'none';
  hero2.style.display = 'block';
  hero3.style.display = 'none';
  hero4.style.display = 'none';
  preview2.style.border = '5px solid black';
  preview1.style.border = 'none';
  preview3.style.border = 'none';
  preview4.style.border = 'none';
};

preview3.onclick = () => {
  hero1.style.display = 'none';
  hero2.style.display = 'none';
  hero3.style.display = 'block';
  hero4.style.display = 'none';
  preview3.style.border = '5px solid black';
  preview2.style.border = 'none';
  preview1.style.border = 'none';
  preview4.style.border = 'none';
};

preview4.onclick = () => {
  hero1.style.display = 'none';
  hero2.style.display = 'none';
  hero3.style.display = 'none';
  hero4.style.display = 'block';
  preview4.style.border = '5px solid black';
  preview2.style.border = 'none';
  preview3.style.border = 'none';
  preview1.style.border = 'none';
};

// collapsed sections to expanded - more toggling
const moreSections = document.getElementsByClassName('more');
const expandSections = document.getElementsByClassName('expand');

document.getElementById('more1').addEventListener('click', (event) => {
  if (moreSections[0].className === 'more inactive') {
    moreSections[0].className = 'more active';
    moreSections[0].display = 'none';
    expandSections[0].className = 'expand expanded1 active';
    expandSections[0].display = 'block';
    expandSections[0].style.height = 'auto';
    const height = expandSections[0].clientHeight + 'px';
    expandSections[0].style.height = '0px';

    setTimeout(() => {
      expandSections[0].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded1').addEventListener('click', (event) => {
  expandSections[0].className = 'expand expanded1 inactive';
  expandSections[0].style.height = '0px';
  moreSections[0].className = 'more inactive';
  moreSections[0].display = 'block';
});

document.getElementById('more2').addEventListener('click', (event) => {
  if (moreSections[1].className === 'more inactive') {
    moreSections[1].className = 'more active';
    moreSections[1].display = 'none';
    expandSections[1].className = 'expand expanded2 active';
    expandSections[1].display = 'block';
    expandSections[1].style.height = 'auto';
    const height = expandSections[1].clientHeight + 'px';
    expandSections[1].style.height = '0px';

    setTimeout(() => {
      expandSections[1].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded2').addEventListener('click', (event) => {
  expandSections[1].className = 'expand expanded2 inactive';
  expandSections[1].style.height = '0px';
  moreSections[1].className = 'more inactive';
  moreSections[1].display = 'block';
});

document.getElementById('more3').addEventListener('click', (event) => {
  if (moreSections[2].className === 'more inactive') {
    moreSections[2].className = 'more active';
    moreSections[2].display = 'none';
    expandSections[2].className = 'expand expanded3 active';
    expandSections[2].display = 'block';
    expandSections[2].style.height = 'auto';
    const height = expandSections[2].clientHeight + 'px';
    expandSections[2].style.height = '0px';

    setTimeout(() => {
      expandSections[2].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded3').addEventListener('click', (event) => {
  expandSections[2].className = 'expand expanded3 inactive';
  expandSections[2].style.height = '0px';
  moreSections[2].className = 'more inactive';
  moreSections[2].display = 'block';
});
  
// Modal for add to cart button
const modal = document.getElementsByClassName('modal')[0];
const button = document.getElementsByClassName('addButton')[0];
const span = document.getElementsByClassName("closeButton")[0];
button.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// counter button
const number = document.getElementsByClassName('number')[0];
currentNum = 1;
number.innerHTML = currentNum;
document.getElementsByClassName('up')[0].addEventListener('click', (event) => {
  number.innerHTML = currentNum++;
  number.innerHTML = currentNum;
});
document.getElementsByClassName('down')[0].addEventListener('click', (event) => {
  if (currentNum > 0) {
    number.innerHTML = currentNum--;
    number.innerHTML = currentNum;
  }
});

