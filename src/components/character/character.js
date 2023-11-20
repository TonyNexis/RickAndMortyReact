import './character.css';

const Character = (props) => {
    const {id, name, race, avatar, status} = props;
    return (
        <div className="character-card" id={id}>
                        <img alt={`${name} avatar`} style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}} className={status === "Dead" ? 'is-dead' : null} src={avatar} />
            <div className='textContainer'>
                <p className="name">{name}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>                <p className="race">{race}</p>
                <div className={status === "Alive" ? 'status-icon-alive' : status === "Dead" ? 'status-icon-dead' : 'race' }>{status === "unknown" ? '- Unknown' : null}</div></div>
            </div>
        </div>
    )
}

export default Character;