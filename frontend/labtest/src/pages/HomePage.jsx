import { useEffect, useState } from "react";
import { getItems } from "../api/itemApi";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <h1>Item Manager</h1>

      <a href="/add">Go to Add Item</a>

      <h2>Items</h2>

      {items.map((item) => (
        <div key={item._id}>
          <p>
            {item.name} - Rs.{item.price} | Reviews: {item.customerReviewCount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;