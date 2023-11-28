import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetails } from '../../redux/characterDetailsSlice';
import Spinner from '../spinner/spinner'
import { spinnerDisplay } from '../../redux/spinnerSlice';

import styles from './characterDetails.module.scss'

const CharacterDetails = () => {
    const navigate = useNavigate();
    const characterDetails = useSelector(state => state.characterDetails.characterData);
    const display = useSelector(spinnerDisplay);
    const dispatch = useDispatch();
    const { id } = useParams();

    const {name, image, status, gender, species, type, origin } = characterDetails || {};

    useEffect (() => {
        if (id) {
            dispatch(fetchCharacterDetails(id));
        }
    }, [dispatch, id]);

    const clickBack = () => {
        navigate('/characters');
    }

    const createInfoBlocks = (title, info) => {
        return (
            <div className={styles.info_block_container}>
                <div className={styles.title}>{title}</div>
                <div className={styles.info}>{info}</div>
                <div className={styles.divider}></div>
            </div>
        )
    }

    return (
        <div className="body">
            <button className={styles.btn_container} onClick={clickBack}>
                <svg className={styles.arrow_btn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
                </svg>
                <p>go back</p>
            </button>
            {display ? <Spinner/> : 
                        <div className={styles.profile_container}>
                        <img className={styles.avatar} src={image} alt="" />
                        <div className={styles.name}>{name}</div>
                        <div className={styles.informations}>Informations</div>
                        <div className={styles.info_container}>
                            {createInfoBlocks("Gender", gender)}
                            {createInfoBlocks("Status", status)}
                            {createInfoBlocks("Specie", species)}
                            {createInfoBlocks("Origin", origin && origin.name ? origin.name : 'Unknown')}
                            {createInfoBlocks("Type", type || 'Unknown')}

{/* Як тут правильніше робити на проєктах? Через функцію типу оптимізація, не займаєшся повтором коду, але за допомогою копіпасти простіше напевно. */}

                            {/* <div className={styles.info_block_container}>
                                <div className={styles.title}>Gender</div>
                                <div className={styles.info}>{gender}</div>
                                <div className={styles.divider}></div>
                            </div>
                            <div className={styles.info_block_container}>
                                <div className={styles.title}>Status</div>
                                <div className={styles.info}>{status}</div>
                                <div className={styles.divider}></div>
                            </div>
                            <div className={styles.info_block_container}>
                                <div className={styles.title}>Specie</div>
                                <div className={styles.info}>{species}</div>
                                <div className={styles.divider}></div>
                            </div>
                            <div className={styles.info_block_container}>
                                <div className={styles.title}>Origin</div>
                                <div className={styles.info}>{origin && origin.name ? origin.name : 'Unknown'}</div>
                                <div className={styles.divider}></div>
                            </div>
                            <div className={styles.info_block_container}>
                                <div className={styles.title}>Type</div>
                                <div className={styles.info}>{type || 'Unknown'}</div>
                                <div className={styles.divider}></div>
                            </div> */}
                        </div>
                    </div>}

        </div>
    )
}

export default CharacterDetails;