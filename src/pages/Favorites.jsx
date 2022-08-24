import Card from "../components/Card";
import { useContext } from "react";
import { AppContext } from "../context"; 
function Favorites() {
  const { favoriteSneakers, onAddToFavorite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {
          favoriteSneakers.map((favoriteSneaker, index) => (
            <Card
              price={favoriteSneaker.price}
              title={favoriteSneaker.title}
              url={favoriteSneaker.url}
              id={favoriteSneaker.id}
              key={index}
              favorited
              // onPlus={(addedSneaker) => onAddToCart(addedSneaker)}
              onAddToFavorite={(favoriteSneaker) => onAddToFavorite(favoriteSneaker)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Favorites;