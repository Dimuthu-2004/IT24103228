import { useState } from "react";
import { addItem } from "../api/itemApi";

function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [reviewCount, setReviewCount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addItem({
      name,
      price: Number(price),
      customerReviewCount: Number(reviewCount),
    });

    window.location.href = "/";
  };

  return (
    <div>
      <h1>Add Item</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
        <br />
        <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <input placeholder="Customer Review Count" onChange={(e) => setReviewCount(e.target.value)} />
        <br />
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;