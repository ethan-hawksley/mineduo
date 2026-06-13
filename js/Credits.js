export default class Credits {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'credits';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Created by ';
    const link = document.createElement('a');
    link.textContent = 'Ethan Hawksley';
    link.href = 'https://hawksley.dev';
    link.className = 'credits-link';

    paragraph.append(link);
    this.element.append(paragraph);
  }
}
