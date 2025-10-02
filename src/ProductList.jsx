// ProductList.jsx
import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Sample plant data
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
      ],
    },
  ];

  // Add to cart handler
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Navbar click handlers
  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="logo"
              style={{ width: '60px', marginRight: '10px' }}
            />
            <a href="/" onClick={handleHomeClick} className="tag_home_link">
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div className="ul">
          <div>
            <a href="#" onClick={handlePlantsClick}>
              Plants
            </a>
          </div>
          <div style={{ position: 'relative' }}>
            <a href="#" onClick={handleCartClick}>
              🛒
              {totalItems > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-15px',
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px 10px',
                    fontSize: '14px',
                  }}
                >
                  {totalItems}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Plants or Cart */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, idx) => (
            <div key={idx} className="category-section">
              <h2>{category.category}</h2>
              <div className="plants-row">
                {category.plants.map((plant, pIdx) => {
                  const alreadyInCart = cartItems.some(
                    (item) => item.name === plant.name
                  );
                  return (
                    <div key={pIdx} className="plant-card">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-img"
                      />
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <p>
                        <strong>{plant.cost}</strong>
                      </p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={alreadyInCart}
                        style={{
                          backgroundColor: alreadyInCart ? 'gray' : '#4CAF50',
                          cursor: alreadyInCart ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {alreadyInCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
