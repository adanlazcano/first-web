import { content } from './content.js';

const container = document.querySelector('#container');
const home = document.querySelector('#home');
const info = document.querySelector('#info');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links');

document.addEventListener('click',(e)=>{

    navlinks.classList.remove('burger-active');
 
 });

const contentIndex = () => {

    container.appendChild(content.show('index'));

}

contentIndex();

burger.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    navlinks.classList.toggle('burger-active');
});


home.addEventListener('click', contentIndex);


info.addEventListener('click', () => {

    container.appendChild(content.show('info'));

});

about.addEventListener('click', () => {

    container.appendChild(content.show('about'));

});

contact.addEventListener('click', () => {

    container.appendChild(content.show('contact'));

});
