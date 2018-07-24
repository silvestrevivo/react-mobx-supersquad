import { observable, action, computed  } from 'mobx'
import data from '../data/characters.json';

class SquadStore{
  @observable characters = data;
  @observable heroes = [];

  @action addCharacterById = (id) => {
    console.log('addCharacterById')
    let filterArray = this.characters.filter(item => item.id !== id);
    let newElement = this.characters.filter(item => item.id === id)[0];
    this.characters.replace(filterArray)
    this.heroes.push(newElement)
  }

  @action removeCharacterById = (id) => {
    console.log('removeCharacterById')
    let array = this.heroes.filter(item => item.id !== id);
    let element = this.heroes.filter(item => item.id === id)[0];
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
