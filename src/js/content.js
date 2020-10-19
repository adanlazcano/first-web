import { page } from './pages.js';

const content = {

    page: { 
        index: page.index, 
        info: page.info,
        about: page.about,
        contact:page.contact 
    },

    show: function (position) {

        container.innerHTML = '';
        const indexDiv = document.createElement('div');

        for(let i in this.page[position].class){

          indexDiv.classList.add(this.page[position].class[i]);
        }
              
        const htmlElement = this.page[position].content;
        indexDiv.innerHTML = htmlElement;
        return indexDiv;
    }
}

export { content };