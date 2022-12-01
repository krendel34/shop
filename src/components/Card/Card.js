import React from 'react';
import styles from './Card.scss'
import {ThemeContexts} from '../../contexts/themeContexts'

function Card({title, price,imageUrl, onFavorite, onClickPlus, favorited = false }) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(favorited)
	const theme = React.useContext(ThemeContexts)
	const onHandlePlus = () => {
		onClickPlus({title, price,imageUrl});
		setIsAdded(!isAdded)
	};
	const onClickFavorite = () => {
		  onFavorite({title, price,imageUrl});
		  setIsFavorite(!isFavorite)
		 }


	return(
		<div className={`card card${theme}` }>
<div  className="favorite" >
<img onClick={onClickFavorite} src={isFavorite ? '/img/heartactiv.svg' : '/img/heard.svg'} alt="Favorite">
</img>
</div>
<img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
<h5>{title}</h5>
<div className="cardBottom">
  <div className="cardPrice">
	<span>Цена:</span>
	<b>{price}</b>
  </div>
  <button className="button" >
	<img className='plus' 
	onClick={onHandlePlus}
	 width={32} height={32}
	  src={isAdded ? '/img/plusGreen.svg' : '/img/plus.svg' } alt="Plus">
	  </img>
  </button>
</div>
</div>
	)
};

export default Card;
