import React from 'react';
import {observer, inject} from 'mobx-react'

const CharacterList = ({store: {characters, addCharacterById}}) => {
    return (
        <div>
            <h4 className="text-uppercase">Characters</h4>
            <ul className="list-group">
                {
                    characters.map((item, i) => {
                        return(
                            <li key={i} className="list-group-item">
                                <div className="list-item">{item.id}.-{item.name}</div>
                                <div onClick={() => addCharacterById(item.id)} className="list-item right-button"> + </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default (inject('store'))(observer(CharacterList))
