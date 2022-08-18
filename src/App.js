import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const data = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    id: 0,
    url: '/img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 15999,
    id: 1,
    url: '/img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 7999,
    id: 2,
    url: '/img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    id: 3,
    url: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <div className="favorite">
              <img src="/img/search.svg" alt="Search" />
            </div>
            <input type="text" placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
          {data.map(item => <Card key={item.id} price={item.price} title={item.name} url={item.url}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
