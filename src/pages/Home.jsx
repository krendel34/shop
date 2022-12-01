import Card from '../components/Card/Card'



function Home ({items, searchValue, setSearchValue, onChangeSearchInput, onAddFavorites, onAddToCart}) {
	return (
		<div className="content">
		<div className="h1Search">
		<h1>{searchValue ?  `Вот что мы нашли по вашему запросу: "${searchValue}"` : 'Все кросовки '}</h1> 
		<div className="search-block">
		  <img src="/img/Search.svg" alt="Search"></img>
		  {searchValue && <img onClick={() => setSearchValue('')} className="clearBtn" src="/img/btn-remov.svg" alt="Clear"></img>}
		  <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
		</div>
		</div>
		
		<div className="sneakers">
	   
		  {items
		  .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
		  .map((item,index)=>(
   <Card
   key={index}
   title={item.title}
   price={item.price}
   imageUrl={item.imageUrl}
   onFavorite={(obj) => onAddFavorites(obj)}
   onClickPlus={(obj) => onAddToCart(obj)}
   />
		  ))}
		</div>
	  </div>
	);
}
export default Home