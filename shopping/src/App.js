import React, { useEffect, useState } from 'react';
import Sidebar from "react-sidebar"
import "rbx/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Message, Title, Card } from "rbx";
import { Nav, Navbar, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
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

  const [open, setOpen] = useState(false);

 
  const addToCart = (id, title, desc) => {
    console.log(id);
    if (cartItems.length == 0) {
      var new_list = [{id: id, title: title, desc: desc}];
      setCartItems(new_list);
    } else {
      setCartItems(cartItems.concat({id: id, title: title, desc: desc}));
    }
    setOpen(true);    
  };


  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Navbar.Text id="title">KarenaCopia</Navbar.Text>
            <FontAwesomeIcon style={{float:'right !important'}} icon={faShoppingCart}  onClick={() => setOpen(!open)} id="icon" />
            
      </Navbar>
      <Sidebar
        id="sidebar"
        sidebar={<div>
          {cartItems.map(item => <Card key={item.id} style={{width:'200%'}}>
            <img src={"./data/products/" + item.id + "_2.jpg"} />
            <h3>{item.title}</h3>
            <h1 id="description"> {item.desc}</h1>
            </Card>)}
        </div>}
        pullRight
        open={open}
        onSetOpen={setOpen}
        styles={{ sidebar: { background: "white", 
                              top:"90px", width:"400px" } }}
      >
        </Sidebar>
        <div class="card_container">
          {products.map(product => <Card key={product.sku} style={{height: '500px'}}>
                                        <img src={"./data/products/" + product.sku + "_1.jpg"} style={{height:'50%', marginTop:'20px'}}/> 
                                        <h3>{product.title}</h3>
                                        <h1 id="description"> {product.description}</h1>
                                        <p>${product.price.toFixed(2)}</p>
                                        <div>
                                          <Button style={{marginRight:"5px"}}>S</Button>
                                          <Button style={{marginRight:"5px"}}>M</Button>
                                          <Button style={{marginRight:"5px"}}>L</Button>
                                          <Button style={{marginRight:"5px"}}>XL</Button>
                                        </div>
                                        <Button style={{marginTop:'8px'}} onClick={() => addToCart(product.sku, product.title, product.price)}>Add to Cart</Button>
                                  </Card>)}
        </div>
    </div>
    
  );
};

export default App;