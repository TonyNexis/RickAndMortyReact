import styles from './characterDetails.module.css'

const {info} = styles;

const CharacterDetails = () => {
    return (
        <div className="body">
            <div className="styles.btn-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/>
                </svg>
                <p>go back</p>
            </div>
            <div className="styles.profile-container">
                <img className="styles.avatar" src="" alt="" />
                <div className={styles.name}></div>
                <div className={info}>Informations</div>
                
            </div>
        </div>
    )
}

export default CharacterDetails;