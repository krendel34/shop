function Drawer({ onClouse ,onRemove, items = []}) {
	return (
		<div className="overlay">
		<div className="rightSite">
		  <h2>Корзина     <img onClick={onClouse} className="removBtn" src="/img/btn-remov.svg" alt="Remov"></img>
		</h2>
		{
			items.length > 0 ? <div className="items">
			{items.map((obj)=> (
					<div className="cartItem">
					<img width={70} height={70} src={obj.imageUrl}></img>
					<div className="text-remov">
					  <p >{obj.title}</p>
					  <b>{obj.price}</b>
					</div>
					<img onClick={()=>onRemove(obj.id)} className="removBtn" src="/img/btn-remov.svg" alt="Remov"></img>
				  </div>
				))
			}
			  <div className="cartTotalBlock">
		  <ul>
			<li>
			  <span>Итого: </span>
			  <div></div>
			  <b>21 498 руб. </b>
			</li>
			<li>
			<span>Налог 5%:  </span>
			  <div></div>
			  <b>1074 руб.  </b>
			</li>
		  </ul>
		  <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img></button>
		  </div>
			  </div> : 		<div className="cartEmpty">
			<img src="/img/BigBox.jpg" alt="Cart Empty"></img>
			<h2>Корзина пустая</h2>
			<p>Добавьте хотя бы один товар, чтобы сделать заказ.</p>
			<button onClick={onClouse} className="greenButton"> <img src="/img/backArrow.svg" alt="Arrow"></img>Вернуться назад </button>
		</div>
		}
		</div>
			 </div>
		
	);
}

export default Drawer;
