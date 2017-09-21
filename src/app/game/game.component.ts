import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {
  }

  customArray = Array.from(Array(7).keys());

  getRandom(min, max) {
    let res = Math.floor(Math.random() * (max - min) + min);

    if(this.customArray.indexOf(res) >= 0) {
      return this.getRandom(min, max);
    }

    return res;
  }

  populateCardsWithImages= ($methodName) => {
    // console.log($methodName);
    if('random' == $methodName) {

      let currentImageNo = this.getRandom(1,160);

      return `assets/memory_check/${currentImageNo}.png`;
    }

    return null;
  }


  ngOnInit() {
    console.log(Array.from(Array(5).keys()));
  }

  myEvent(event) {
    console.log(event);
  }

  titleClass = false;
  listClasses = {
    'red-title': true,
    'large-title': true
  }

  //games logic
  selectCard(){
    //to do:
  };
  finished() {
  //to do:
  };

  populateCards() {
    //to do:
    // { name: "", img: ""}
  }

  selectedCards = [];
  cardsMatchList = [];
  correctCards = 0;
  score = 0;

  populateScore() {
    //to do:
  }

  showScore = false;
  displayScorePanel() {
    //to do:
  }
}
