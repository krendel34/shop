import Card from '../components/Card/Card'

function Favorites ({items,onAddFavorites}) {
	return (
		<div className="content">
		<div className="h1Search">
		<h1>Мой закладки</h1> 
		</div>
		<div className='sneakers'>
			{items
			.map((item,index)=>(
				<Card>
					key={index}
					title={item.title}
					price={item.price}
					imageUrl={item.imageUrl}
					favorited={true}
					onFavorite={onAddFavorites}
				</Card>
			))
			}
		</div>
	  </div>
	);
}
export default Favorites


//  <div className='bigCard'>
// <div  className="favorite" >
// <img src='/img/heartactiv.svg' alt="Favorite">
// </img>

// </div>
// <img  className='bigSneakers' src='/img/Sneakers/1.jpg' alt="Sneakers"></img>
// <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
// <div className="cardBottom">
//   <div className="cardPrice">
// 	<span>Цена:</span>
// 	<b>12 999 руб.</b>
//   </div>
//   <button className="greenButton" >Добавить в корзину
//   </button>
// </div>
// </div> 

// export default BigCard

