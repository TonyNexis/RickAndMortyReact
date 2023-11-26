import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCharacterDetails } from '../../redux/characterDetailsSlice';

import style from './character.module.css';

const Character = (props) => {
    const {id, name, race, avatar, status} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDead = status === "Dead" ? `${style.is_dead}` : null;

    const liveStatus = status === "Alive" ? `${style.status_icon_alive}` : status === "Dead" ? `${style.status_icon_dead}` : `${style.race}`;

    function clickCharacter () {
        navigate(`/characters/${id}`);
        dispatch(fetchCharacterDetails(id));
    }

    return (
        <div onClick={clickCharacter} className={style.character_card} id={id}>
                        <img alt={`${name} avatar`} style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}} className={isDead} src={avatar} />
            <div className={style.text_container}>
                <p className={style.name}>{name}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>                <p className={style.race}>{race}</p>
                <div className={liveStatus}>{status === "unknown" ? '- Unknown' : null}</div></div>
            </div>
        </div>
    )
}

export default Character;