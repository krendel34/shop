import React from 'react'
import axios from 'axios'
import Header from './components/Header';
import Drawer from './components/Drawer';
import { ThemeContexts } from './contexts/themeContexts';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



 
function App() {
  const [searchValue,setSearchValue] = React.useState('')
  const [theme,setTheme] = React.useState('Light')
  const[items, setItems] = React.useState([])
  const [ cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false)
  const [favorites, setFavorites] = React.useState([])

 
React.useEffect(()=> {
  axios.get("https://634720cddb76843976a6d4de.mockapi.io/items").then(res => {
  setItems(res.data)
});
axios.get("https://634720cddb76843976a6d4de.mockapi.io/cart").then(res => {
  setCartItems(res.data)
});
axios.get("https://634720cddb76843976a6d4de.mockapi.io/favorites").then(res => {
  console.log(res.data)
  setFavorites(res.data)
});
}, []);

 const onAddToCart = (obj)=> {
   if( cartItems.find((item) => Number(item.id) === Number(obj.id))) {
    axios.delete(`https://634720cddb76843976a6d4de.mockapi.io/cart/${obj.id}`);
     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
   } else {
  axios.post("https://634720cddb76843976a6d4de.mockapi.io/cart", obj);
  setCartItems(prev =>[...prev, obj])
   }
 };

 const onRemoveItem = (id) => {
  axios.delete(`https://634720cddb76843976a6d4de.mockapi.io/cart/${id}`);
   setCartItems(prev =>prev.filter((item )=> item.id !== id))
 };

 const onAddFavorites = async (obj)=> {
try {
  
  if (favorites.find(favObj=>favObj.id === obj.id)) {
    axios.delete(`https://634720cddb76843976a6d4de.mockapi.io/favorites/${obj.id}`)
    setFavorites(prev =>prev.filter((item) => item.id !== obj.id))
  } else {
 const {data} = await axios.post("https://634720cddb76843976a6d4de.mockapi.io/favorites/", obj);
  setFavorites(prev =>[...prev, data])
 }
} catch (error) {
  alert('Не удалось добавить в фавориты')
  
}
 };

 const toggleTheme = () => {
   setTheme(theme === 'Light' ? 'Dark' : 'Light')
 };

 const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value)
 }; 
console.log(favorites)
  return (
  
    <div className={`wrapper wrapper${theme}` }>
<ThemeContexts.Provider value={theme}>
  <div className='theme'>
  <button className='btnLight' onClick={()=>setTheme('Light')} ><img src="/img/backArrow.svg" alt="Arrow"></img>Light</button>
  <button className='btnDark' onClick={()=>setTheme('Dark')}>Dark <img src="/img/arrow.svg" alt="Arrow"></img></button>
  </div>

      {cartOpened && <Drawer items = {cartItems} onClouse = { () => setCartOpened(false) } onRemove={onRemoveItem} /> }
    <BrowserRouter>
    <Header onClickCart ={ () => setCartOpened(true)} />
    <Routes>
      <Route path='/'>
        <Route index element={
          <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorites={onAddFavorites}
          onAddToCart={onAddToCart}
          favorites={favorites}
          ></Home>
        }></Route>
        <Route path='favorites' element={
        <Favorites
favorites ={favorites} onAddFavorites={onAddFavorites}
        ></Favorites>
        }></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </ThemeContexts.Provider>
    </div>
  );
}
export default App;
