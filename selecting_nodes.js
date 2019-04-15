const header = document.querySelector('li').parentElement.parentElement;
//const section = document.querySelector('div').children;
const section = document.querySelector('h1').parentElement.parentElement;
const sectionCurrent = document.querySelector('section.current');
const nextSection = sectionCurrent.nextElementSibling;
const prevSection = sectionCurrent.previousElementSibling;
const divHighlight = document.querySelector('h2.highlight').parentElement.parentElement;
const sectionList = document.querySelector('div').querySelectorAll('section');
const H = Array.from(sectionList);
const H2 = H.filter(function(header){
    return header.querySelector('h2') != null;
      })

console.log(header);
console.log(section);
console.log(sectionCurrent);
console.log(nextSection);
console.log(prevSection);
console.log(divHighlight);
console.log(H2);