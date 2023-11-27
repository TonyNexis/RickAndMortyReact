import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetails } from '../../redux/characterDetailsSlice';


import styles from './characterDetails.module.scss'

const CharacterDetails = () => {
    const navigate = useNavigate();
    const characterDetails = useSelector(state => state.characterDetails.characterData);
    const dispatch = useDispatch();
    const { id } = useParams();

    const {name, image, status, gender, species, type, origin } = characterDetails;

    useEffect (() => {
        if (id) {
            dispatch(fetchCharacterDetails(id));
        }
    }, [dispatch, id]);

    const clickBack = () => {
        navigate('/characters');
    }

    return (
        <div className="body">
            <button className={styles.btn_container} onClick={clickBack}>
                <svg className={styles.arrow_btn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
                </svg>
                <p>go back</p>
            </button>
            <div className={styles.profile_container}>
                <img className={styles.avatar} src={image} alt="" />
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>Informations</div>
                <div className="styles.info_container">
                    <div className="styles.info_block_container">
                        <div className="styles.title">Gender</div>
                        <div className="styles.info">{gender}</div>
                    </div>
                    <div className="styles info_block_container">
                        <div className="styles.title">Status</div>
                        <div className="styles.info">{status}</div>
                    </div>
                    <div className="styles info_block_container">
                        <div className="styles.title">Specie</div>
                        <div className="styles.info">{species}</div>
                    </div>
                    <div className="styles info_block_container">
                        <div className="styles.title">Origin</div>
                        <div className="styles.info">{origin && origin.name ? origin.name : 'Unknown'}</div>
                    </div>
                    <div className="styles info_block_container">
                        <div className="styles.title">Type</div>
                        <div className="styles.info">{type || 'Unknown'}</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CharacterDetails;