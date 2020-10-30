// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const divHeader = document.querySelector('.header-container')
 function Header() {
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    
    head.classList.add('header');
    date.textContent = 'MARCH 28, 2020';
    date.classList.add('date');
    title.textContent='Lamba Times';
    temp.textContent='98°';
    temp.classList.add('temp');

    divHeader.appendChild(head);
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);
    return head;
}
Header();