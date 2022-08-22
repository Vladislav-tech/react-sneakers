import Card from "../components/Card";


function Home({ 
  sneakers, 
  searchValue,
  onAddToCart,
  onChangeSearchInput,
  onAddToFavorite,
  transformQuerySearch,
  setSearchValue

}) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue.trim() || 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <div className="favorite">
            <img src="/img/search.svg" alt="Search" />
          </div>
          <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
          {
            searchValue && <img
              onClick={() => setSearchValue('')}
              title="Очистить"
              className="clearBtn cu-p"
              src="/img/btn-remove.svg"
              alt="Clear" />
          }

        </div>
      </div>
      <div className="d-flex flex-wrap">
        {console.log('Home: ', sneakers)}
        {sneakers.filter(item => transformQuerySearch(item.title).includes(transformQuerySearch(searchValue))).map((sneaker, index) => (
          <Card
            price={sneaker.price}
            title={sneaker.title}
            url={sneaker.url}
            id={sneaker.id}
            key={index}
            onPlus={(addedSneaker) => onAddToCart(addedSneaker)}
            onAddToFavorite={(favoriteSneaker) => onAddToFavorite(favoriteSneaker)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;