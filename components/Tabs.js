// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topicsDiv = document.querySelector('.topics')
const topicDivMaker = function (info) {
    const topics = document.createElement('div')
    topics.textContent = `${info}`
    topics.classList.add('tab');
    topicsDiv.appendChild(topics);
    return topicsDiv;
}
axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then ((res) =>{
  console.log(res);
  const info = res;
    info.data.topics.forEach(element => {
        topicDivMaker(element);
        
    });
})
.catch((err)=>{
  console.log(err);
})