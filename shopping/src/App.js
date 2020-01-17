import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Button, Container, Message, Title, Card } from "rbx";
const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <div class="card_container">
      {products.map(product => <Card key={product.sku}><img src={"./data/products/" + product.sku + "_1.jpg"} /> <h3>{product.title}</h3></Card>)}
    </div>
    
  );
};

export default App;