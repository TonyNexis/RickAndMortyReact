import './character.css';

const Character = (props) => {
    const {id, name, race, avatar} = props;
    return (
        <div className="character-card" id={id}>
                        {/* <img className="avatar" src="https://s3-alpha-sig.figma.com/img/b86d/7059/b695d8bbb483cac677dfbff28a6b3f98?Expires=1701043200&Signature=OoeItrIPu-6Eosg4DyNGQjlvf9ruxQ4WhUlM6SILN9qMWlNJoMWxx5uzM8Luep1y6c7iIuGTX1wkrNyymz2tk-ro4BRzrEC8NNFbu67Iacjih~XdRrAywCIP~9E0aUolsq-SWvM5w3ALOfAylwwXRM2XgAW8AdDl29s6-~Q2HNtYkq1TBdrG6QLaE~DYGRMugDf3Aof8OJIx8TF5XDBtv0pvQ17u3TbOsHakmr0X0To22gQYe2m8fjTdqf~UbZ79hK0Cj9I4APrtvyGohw8RRbItkKLdvRG4f5qGBgZ9lL4aRhrZkuhgH1I7yYfLJsrgZ4B2FbraxN1xvN9yTrSS8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /> */}
                        {/* <div className="avatar"></div> */}
                        <img style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}} src={avatar} />
            <div>
                <p className="name">{name}</p>
                <p className="race">{race}</p>
            </div>
        </div>
    )
}

export default Character;