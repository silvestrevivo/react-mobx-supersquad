import { observable, action, computed  } from 'mobx'
import data from '../data/characters.json';

function toFilterArray(obs, id) {
  return obs.filter(item => item.id !== id);
}

function addElementArray(obs, id) {
  return obs.filter(item => item.id === id)[0];
}

class SquadStore{
  @observable characters = data;
  @observable heroes = [];

  @action addCharacterById = (id) => {
    let filterArray = toFilterArray(this.characters, id);
    let newElement = addElementArray(this.characters, id);
    this.characters.replace(filterArray)
    this.heroes.push(newElement)
  }
  @action removeCharacterById = (id) => {
    let array = toFilterArray(this.heroes, id);
    let element = addElementArray(this.heroes, id);
    this.characters.push(element);
    this.heroes.replace(array);
  }

  @computed get strength(){
    let strength = 0;
    this.heroes.forEach(hero => strength += hero.strength);
    return strength;
  }
  @computed get intelligence(){
      let intelligence = 0;
      this.heroes.forEach(hero => intelligence += hero.intelligence);
      return intelligence;
  }
  @computed get speed(){
      let speed = 0;
      this.heroes.forEach(hero => speed += hero.speed);
      return speed;
  }
}

var store = new SquadStore()

export default store;
