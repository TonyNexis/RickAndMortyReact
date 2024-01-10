import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { fetchCharacters } from "../../redux/charactersSlice";

import SearchPanel from '../searchPanel/searchPanel';
import Character from '../character/character';
import Spinner from "../spinner/spinner";
import MenuPanel from "../menuPanel/menuPanel";
import RegForm from "../form/form";
import { spinnerDisplay } from "../../redux/spinnerSlice";

import style from './characterList.module.scss';
import logo from './logo.png';

const CharacterList = () => {
    const dispatch = useDispatch();
    let display = useSelector(spinnerDisplay)

    useEffect (() => {
        dispatch(fetchCharacters());
    }, [dispatch])

    const characters = useSelector(state => state.characters.data)

    return (
        <>
        <Helmet><title>Rick and Morty</title></Helmet>
        <RegForm/>
        <div className={style.body}>
            <MenuPanel/>
            <img className={style.logo_img} src={logo} alt="" />
            <SearchPanel/>
            {display ? <Spinner/> : null}
            <div className={style.container}>
            {characters.map((character) => (
                <Character key={character.id} id={character.id} name={character.name} race={character.species} avatar={character.image} status={character.status} />
            ))}
            </div>
        </div>
        </>
    )
}

export default CharacterList;
