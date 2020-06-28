const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.classList.add('turned'); //turns the card
      memoryGame.pickedCards.push(card);//adds the turned card to the array
      if(memoryGame.pickedCards[0].getAttribute('data-card-name')===memoryGame.pickedCards[1].getAttribute('data-card-name')){
        memoryGame.pairsCards.push(memoryGame.pickedCards[0]);//if the name of the two turned cards are equal they are pushed to the pairsCards array
        memoryGame.pairsCards.push(memoryGame.pickedCards[1]);
        memoryGame.pairsGuessed ++//adds a point to the score
        memoryGame.pairsClicked ++
        memoryGame.pickedCards = [];//given that the two equal cards are already saved, it erases the picked array
      }else if(memoryGame.pickedCards.length === 3){//if the user didn't guess the cards it will re-turn them
        memoryGame.pickedCards[0].setAttribute('class','card');
        memoryGame.pickedCards[1].setAttribute('class','card');
        memoryGame.pairsClicked++//adds a point to the score
        memoryGame.pickedCards.splice(0,2);//removes the cards from the pickedArray when not equal
      }
      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;//shows score in webpage
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
      if(memoryGame.pairsCards.length === memoryGame.cards.length){//displays an alert when game is finished
        if (confirm('You Won!! Do you want to start new game?')){
          location.reload();//if user wants to play again it refreshes the page
        }else{
          txt = "Great game!";
        }
      }
    });
  });
});
