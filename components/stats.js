import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Stats extends Component {
  render() {
      const {store: {strength, intelligence, speed}} = this.props;
    return (
      <div>
          <h4>SquadStats</h4>
          <ul className="list-grop">
              <li className="list-group-item">
                  <b>Overall Strength: {strength}</b>
              </li>
              <li className="list-group-item">
                  <b>Overall Strength: {intelligence}</b>
              </li>
              <li className="list-group-item">
                  <b>Overall Strength: {speed}</b>
              </li>
          </ul>
      </div>
    );
  }
}

export default (inject('store'))(observer(Stats))
