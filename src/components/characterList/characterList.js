import React from 'react';
import logo from './logo.png';

import SearchPanel from '../searchPanel/searchPanel';

import './characterList.css';


const CharacterList = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <SearchPanel/>
        </div>
    )
}

export default CharacterList;