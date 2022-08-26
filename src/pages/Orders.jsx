import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get('https://62fe178aa85c52ee482f82b0.mockapi.io/orders');
        setOrders(data.map(obj => obj.items).flat(Infinity));
        setIsLoading(false);
      } catch(e) {
        console.log('Ошибка при запросе заказов');
        console.error(e);
      }
    }

    fetchData()
  }, []);


  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array.from({length: 12})] : orders)
          .map((order, index) => (
            <Card
              key={index}
              favorited
              loading={isLoading}
              {...order}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Orders;