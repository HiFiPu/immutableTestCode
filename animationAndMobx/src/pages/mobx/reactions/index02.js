import { makeAutoObservable, reaction } from 'mobx';
import React from 'react';
class Animal {
  name;
  energyLevel;

  constructor(name) {
    this.name = name;
    this.energyLevel = 100;
    makeAutoObservable(this);
  }

  reduceEnergy() {
    this.energyLevel -= 10;
    console.log(this.energyLevel,'reduceEnergy.....')
  }

  get isHungry() {
    console.log(this.energyLevel,'isHungry.....')
    return this.energyLevel < 50;
  }
}


function index(props) {
  const giraffe = new Animal('Gary');

  reaction(
    () => giraffe.isHungry,
    (isHungry) => {
        console.log(isHungry,'isHungry....')
      if (isHungry) {
        console.log("Now I'm hungry!");
      } else {
        console.log("I'm not hungry!");
      }
      console.log('Energy level:', giraffe.energyLevel);
    },
  );

  console.log("Now let's change state!");
  for (let i = 0; i < 10; i++) {
    giraffe.reduceEnergy();
  }
  return <div><h1>副作用reaction</h1></div>;
}

export default index;
