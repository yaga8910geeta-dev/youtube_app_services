import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import './Home.css';

const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '📺',
      description: 'Grow your YouTube channel with subscribers, views, and engagement',
      color: '#FF0000'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      description: 'Boost your Instagram presence with followers, likes, and comments',
      color: '#E4405F'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      description: 'Increase your TikTok reach with followers, likes, and shares',
      color: '#000000'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '📘',
      description: 'Enhance your Facebook page with followers, likes, and engagement',
      color: '#1877F2'
    }
  ];

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setShowModal(true);
  };

  const handleServiceSelect = (service) => {
    setShowModal(false);
    navigate(`/costing/${selectedPlatform.id}`, { 
      state: { 
        platform: selectedPlatform,
        selectedService: service 
      } 
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlatform(null);
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">
            Grow with us on YouTube, Instagram, TikTok, Facebook
          </h1>
          <p className="hero-subtitle">
            Choose your platform and discover our professional growth services
          </p>
        </div>

        <div className="platform-grid">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="platform-card"
              onClick={() => handlePlatformClick(platform)}
              style={{ borderColor: platform.color }}
            >
              <div className="platform-icon">{platform.icon}</div>
              <h2 className="platform-title">{platform.name}</h2>
              <p className="platform-description">{platform.description}</p>
            </div>
          ))}
        </div>

        {showModal && selectedPlatform && (
          <ServiceModal
            platform={selectedPlatform}
            onServiceSelect={handleServiceSelect}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
