import React, { useState, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import './CostingPage.css';

const CostingPage = () => {
  const { platform } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1000);

  const platformData = location.state?.platform;
  const selectedService = location.state?.selectedService;

  const getPricingForService = (platformId, serviceId) => {
    const pricing = {
      youtube: {
        subscribers: [
          { quantity: 1000, price: 29.99, delivery: '3-5 days' },
          { quantity: 5000, price: 129.99, delivery: '5-7 days' },
          { quantity: 10000, price: 229.99, delivery: '7-10 days' },
          { quantity: 25000, price: 499.99, delivery: '10-14 days' }
        ],
        views: [
          { quantity: 1000, price: 9.99, delivery: '1-2 days' },
          { quantity: 5000, price: 39.99, delivery: '2-3 days' },
          { quantity: 10000, price: 69.99, delivery: '3-5 days' },
          { quantity: 25000, price: 149.99, delivery: '5-7 days' }
        ],
        likes: [
          { quantity: 100, price: 4.99, delivery: '1-2 days' },
          { quantity: 500, price: 19.99, delivery: '2-3 days' },
          { quantity: 1000, price: 34.99, delivery: '3-5 days' },
          { quantity: 2500, price: 79.99, delivery: '5-7 days' }
        ]
      },
      instagram: {
        followers: [
          { quantity: 1000, price: 24.99, delivery: '3-5 days' },
          { quantity: 5000, price: 99.99, delivery: '5-7 days' },
          { quantity: 10000, price: 179.99, delivery: '7-10 days' },
          { quantity: 25000, price: 399.99, delivery: '10-14 days' }
        ],
        likes: [
          { quantity: 100, price: 2.99, delivery: '1-2 days' },
          { quantity: 500, price: 12.99, delivery: '2-3 days' },
          { quantity: 1000, price: 22.99, delivery: '3-5 days' },
          { quantity: 2500, price: 49.99, delivery: '5-7 days' }
        ],
        comments: [
          { quantity: 10, price: 9.99, delivery: '1-2 days' },
          { quantity: 25, price: 19.99, delivery: '2-3 days' },
          { quantity: 50, price: 34.99, delivery: '3-5 days' },
          { quantity: 100, price: 59.99, delivery: '5-7 days' }
        ]
      },
      tiktok: {
        followers: [
          { quantity: 1000, price: 19.99, delivery: '3-5 days' },
          { quantity: 5000, price: 79.99, delivery: '5-7 days' },
          { quantity: 10000, price: 139.99, delivery: '7-10 days' },
          { quantity: 25000, price: 299.99, delivery: '10-14 days' }
        ],
        likes: [
          { quantity: 100, price: 1.99, delivery: '1-2 days' },
          { quantity: 500, price: 8.99, delivery: '2-3 days' },
          { quantity: 1000, price: 15.99, delivery: '3-5 days' },
          { quantity: 2500, price: 34.99, delivery: '5-7 days' }
        ],
        shares: [
          { quantity: 50, price: 4.99, delivery: '1-2 days' },
          { quantity: 100, price: 8.99, delivery: '2-3 days' },
          { quantity: 250, price: 19.99, delivery: '3-5 days' },
          { quantity: 500, price: 34.99, delivery: '5-7 days' }
        ]
      },
      facebook: {
        followers: [
          { quantity: 1000, price: 34.99, delivery: '3-5 days' },
          { quantity: 5000, price: 149.99, delivery: '5-7 days' },
          { quantity: 10000, price: 269.99, delivery: '7-10 days' },
          { quantity: 25000, price: 599.99, delivery: '10-14 days' }
        ],
        likes: [
          { quantity: 100, price: 3.99, delivery: '1-2 days' },
          { quantity: 500, price: 16.99, delivery: '2-3 days' },
          { quantity: 1000, price: 29.99, delivery: '3-5 days' },
          { quantity: 2500, price: 64.99, delivery: '5-7 days' }
        ],
        engagement: [
          { quantity: 50, price: 14.99, delivery: '1-2 days' },
          { quantity: 100, price: 24.99, delivery: '2-3 days' },
          { quantity: 250, price: 54.99, delivery: '3-5 days' },
          { quantity: 500, price: 99.99, delivery: '5-7 days' }
        ]
      }
    };

    return pricing[platformId]?.[serviceId] || [];
  };

  const pricingOptions = getPricingForService(platform, selectedService?.id);
  const selectedPricing = pricingOptions.find(option => option.quantity === selectedQuantity) || pricingOptions[0];

  const handleAddToCart = () => {
    if (selectedPricing) {
      const serviceToAdd = {
        platform: platformData?.name || platform,
        serviceName: selectedService?.name || 'Service',
        quantity: selectedQuantity,
        price: selectedPricing.price,
        delivery: selectedPricing.delivery,
        totalPrice: selectedPricing.price
      };
      
      addToCart(serviceToAdd);
      navigate('/cart');
    }
  };

  if (!platformData || !selectedService) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="error-message">
            <h2>Service information not found</h2>
            <p>Please go back and select a service.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="costing-header">
          <h1>{platformData.name} - {selectedService.name}</h1>
          <p>Choose your package and add to cart</p>
        </div>

        <div className="costing-grid">
          {pricingOptions.map((option) => (
            <div
              key={option.quantity}
              className={`costing-item ${selectedQuantity === option.quantity ? 'selected' : ''}`}
              onClick={() => setSelectedQuantity(option.quantity)}
            >
              <div className="costing-info">
                <h3>{option.quantity.toLocaleString()} {selectedService.name}</h3>
                <p>Delivery: {option.delivery}</p>
                <p>High quality, real engagement</p>
              </div>
              <div className="costing-price">
                ${option.price}
              </div>
            </div>
          ))}
        </div>

        <div className="costing-actions">
          <div className="selected-package">
            <h3>Selected Package</h3>
            <p>{selectedQuantity.toLocaleString()} {selectedService.name} - ${selectedPricing?.price}</p>
            <p>Delivery: {selectedPricing?.delivery}</p>
          </div>
          
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart - ${selectedPricing?.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostingPage;
