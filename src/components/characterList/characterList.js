import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";

import SearchPanel from '../searchPanel/searchPanel';
import Character from '../character/character';

import style from './characterList.module.css';
import logo from './logo.png';

const CharacterList = () => {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    const characters = useSelector(state => state.characters.data)
    console.log('=>>>>', characters)
    return (
        <div className={style.body}>
            <img className={style.logo_img} src={logo} alt="" />
            <SearchPanel/>
            <div className={style.container}>
            {characters.map((character) => (
                <Character key={character.id} id={character.id} name={character.name} race={character.species} avatar={character.image} status={character.status} />
            ))}
            </div>
        </div>
    )
}

export default CharacterList;
