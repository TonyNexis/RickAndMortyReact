import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, fetchCharacters, originCharacters } from '../../redux/charactersSlice'

import { spinnerDisplay } from '../../redux/spinnerSlice'
import Character from '../character/character'
import SignInForm from '../form/SignIn'
import SignUpForm from '../form/SignUp'
import MenuPanel from '../menuPanel/menuPanel'
import SearchPanel from '../searchPanel/searchPanel'
import Spinner from '../spinner/spinner'
import { selectPosition } from '../../redux/positionOnMainPageSlice'

import style from './characterList.module.scss'
import logo from './logo.png'

const CharacterList = () => {
	const dispatch = useDispatch()
	let display = useSelector(spinnerDisplay)
    let position = useSelector(selectPosition)
	let nextPageUrl = useSelector(state => state.characters.nextPageUrl)
	let characters = useSelector(state => state.characters.data)
	let [displayButtonUp, setDisplayButtonUp] = useState(false)

	useEffect(() => {
		if (!characters || characters.length === 0) {
			dispatch(fetchCharacters())
		}
	}, [dispatch, characters])

	const onNextPage = () => {
		dispatch(fetchCharacters(nextPageUrl))
		dispatch(originCharacters())
		dispatch(clearFilter())
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const collapseHeight = 800

			scrollPosition > collapseHeight
				? setDisplayButtonUp(true)
				: setDisplayButtonUp(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

    const onButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.scrollTo({
            top: position,
        });
    }, []);

	return (
		<>
			<Helmet>
				<title>Rick and Morty</title>
			</Helmet>
			<SignUpForm />
			<SignInForm />
			<div className={style.body}>
				<MenuPanel />
				<img className={style.logo_img} src={logo} alt='' />
				<SearchPanel />
				{display ? <Spinner /> : null}
				<div className={style.container}>
					{characters.map(character => (
						<Character
							key={character.id}
							id={character.id}
							name={character.name}
							race={character.species}
							avatar={character.image}
							status={character.status}
						/>
					))}
				</div>
				<button className={style.nextPageButton} onClick={onNextPage}>
					More Characters
				</button>
                <button onClick={onButtonUp} className={displayButtonUp ? style.buttonUp : `${style.buttonUp} ${style.buttonUpHide}`}>
						<svg
							width='54'
							height='54'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill='currentColor'
								d='M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36a1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41a1 1 0 0 0 1.41.14'
							/>
							<path
								fill='currentColor'
								d='M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41a1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36a1 1 0 0 0-.13-1.41Z'
							/>
						</svg>
					</button>
			</div>
		</>
	)
}

export default CharacterList
