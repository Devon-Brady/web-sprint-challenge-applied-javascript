// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardContainer = document.querySelector('.cards-container');
const topicDiv = document.querySelector('.tab');
console.log(cardContainer);
topicDiv.addEventListener('click', function (event) {
    axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then ((res) =>{
  const info = res;
  if (topicDiv.textContent == 'javascript'){
      cardMaker(info.data.articles.javascript);
  } else if (topicDiv.textContent == 'bootstrap'){
      cardMaker(info.data.articles.bootstrap);
  } else if (topicDiv.textContent == 'technology'){
      cardMaker(info.data.articles.technology)
  } else if (topicDiv.textContent == 'jquery'){
      cardMaker(info.data.articles.jquery);
  }else {
      cardMaker(info.data.articles.node);
  }
})
})


const cardMaker = function (info) {
    info.forEach(element => {
        const cardDiv = document.createElement('div');
        const headDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgdiv = document.createElement('div');
        const theImg = document.createElement('img');
        const authorSpan = document.createElement('span');
        console.log(`${element.authorPhoto}`);
        cardDiv.classList.add('card');
        headDiv.classList.add('headline');
        headDiv.textContent = `${element.headline}`;
        authorDiv.classList.add('author');
        theImg.src = `${element.authorPhoto}`;
        authorSpan.textContent = `${element.authorName}`;
        imgdiv.classList.add('img-container');
        cardContainer.appendChild(cardDiv);
        cardDiv.appendChild(headDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgdiv);
        imgdiv.appendChild(theImg);
        authorDiv.appendChild(authorSpan);
    });
    
}

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then ((res) =>{
  console.log(res);
})