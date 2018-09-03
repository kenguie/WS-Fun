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

      setTimeout(function () {
        theNavigation[0].style.height = height;
      }, 0);
    } else {
      theNavigation[0].className = 'inactive';
      theNavigation[0].style.height = '0px';
    }
  });
}

// Change the hero image on click
const hero1 = document.getElementsByClassName('hero-1');
const hero2 = document.getElementsByClassName('hero-2');
const hero3 = document.getElementsByClassName('hero-3');
const hero4 = document.getElementsByClassName('hero-4');
const preview1 = document.getElementsByClassName('preview-1');
const preview2 = document.getElementsByClassName('preview-2');
const preview3 = document.getElementsByClassName('preview-3');
const preview4 = document.getElementsByClassName('preview-4');

preview1[0].onclick = () => {
  hero1[0].style.display = 'block';
  hero2[0].style.display = 'none';
  hero3[0].style.display = 'none';
  hero4[0].style.display = 'none';
  preview1[0].style.border = '5px solid black';
  preview2[0].style.border = 'none';
  preview3[0].style.border = 'none';
  preview4[0].style.border = 'none';
};

preview2[0].onclick = () => {
  hero1[0].style.display = 'none';
  hero2[0].style.display = 'block';
  hero3[0].style.display = 'none';
  hero4[0].style.display = 'none';
  preview2[0].style.border = '5px solid black';
  preview1[0].style.border = 'none';
  preview3[0].style.border = 'none';
  preview4[0].style.border = 'none';
};

preview3[0].onclick = () => {
  hero1[0].style.display = 'none';
  hero2[0].style.display = 'none';
  hero3[0].style.display = 'block';
  hero4[0].style.display = 'none';
  preview3[0].style.border = '5px solid black';
  preview2[0].style.border = 'none';
  preview1[0].style.border = 'none';
  preview4[0].style.border = 'none';
};

preview4[0].onclick = () => {
  hero1[0].style.display = 'none';
  hero2[0].style.display = 'none';
  hero3[0].style.display = 'none';
  hero4[0].style.display = 'block';
  preview4[0].style.border = '5px solid black';
  preview2[0].style.border = 'none';
  preview3[0].style.border = 'none';
  preview1[0].style.border = 'none';
};

// collapsed sections to expanded - more toggling
const moreSections = document.getElementsByClassName('more');
const expandSections = document.getElementsByClassName('expand');

document.getElementById('more1').addEventListener('click', function (event) {
  if (moreSections[0].className === 'more inactive') {
    moreSections[0].className = 'more active';
    moreSections[0].display = 'none';
    expandSections[0].className = 'expand expanded1 active';
    expandSections[0].display = 'block';
    expandSections[0].style.height = 'auto';
    const height = expandSections[0].clientHeight + 'px';
    expandSections[0].style.height = '0px';

    setTimeout(function () {
      expandSections[0].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded1').addEventListener('click', function (event) {
  expandSections[0].className = 'expand expanded1 inactive';
  expandSections[0].style.height = '0px';
  moreSections[0].className = 'more inactive';
  moreSections[0].display = 'block';
});

document.getElementById('more2').addEventListener('click', function (event) {
  if (moreSections[1].className === 'more inactive') {
    moreSections[1].className = 'more active';
    moreSections[1].display = 'none';
    expandSections[1].className = 'expand expanded2 active';
    expandSections[1].display = 'block';
    expandSections[1].style.height = 'auto';
    const height = expandSections[1].clientHeight + 'px';
    expandSections[1].style.height = '0px';

    setTimeout(function () {
      expandSections[1].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded2').addEventListener('click', function (event) {
  expandSections[1].className = 'expand expanded2 inactive';
  expandSections[1].style.height = '0px';
  moreSections[1].className = 'more inactive';
  moreSections[1].display = 'block';
});

document.getElementById('more3').addEventListener('click', function (event) {
  if (moreSections[2].className === 'more inactive') {
    moreSections[2].className = 'more active';
    moreSections[2].display = 'none';
    expandSections[2].className = 'expand expanded3 active';
    expandSections[2].display = 'block';
    expandSections[2].style.height = 'auto';
    const height = expandSections[2].clientHeight + 'px';
    expandSections[2].style.height = '0px';

    setTimeout(function () {
      expandSections[2].style.height = height;
    }, 0);
  } 
});

document.getElementById('expanded3').addEventListener('click', function (event) {
  expandSections[2].className = 'expand expanded3 inactive';
  expandSections[2].style.height = '0px';
  moreSections[2].className = 'more inactive';
  moreSections[2].display = 'block';
});
  