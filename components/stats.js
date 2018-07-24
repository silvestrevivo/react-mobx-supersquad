import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Stats extends Component {
  render() {
    console.log('rops', this.props.store)
    return (
      <div>
          <h4>SquadStats</h4>
          <ul className="list-grop">
              <li className="list-group-item">
                  <b>Overall Strength: {this.props.store.strength}</b>
              </li>
              <li className="list-group-item">
                  <b>Overall Strength: {this.props.store.intelligence}</b>
              </li>
              <li className="list-group-item">
                  <b>Overall Strength: {this.props.store.speed}</b>
              </li>
          </ul>
      </div>
    );
  }
}

export default (inject('store'))(observer(Stats))
