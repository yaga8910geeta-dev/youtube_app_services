import React from 'react';
import './ServiceModal.css';

const ServiceModal = ({ platform, onServiceSelect, onClose }) => {
  const getServicesForPlatform = (platformId) => {
    const services = {
      youtube: [
        {
          id: 'subscribers',
          name: 'Subscribers',
          description: 'Get real YouTube subscribers to grow your channel',
          icon: '👥'
        },
        {
          id: 'views',
          name: 'Video Views',
          description: 'Increase your video views and reach',
          icon: '👁️'
        },
        {
          id: 'likes',
          name: 'Likes & Comments',
          description: 'Boost engagement with likes and comments',
          icon: '👍'
        }
      ],
      instagram: [
        {
          id: 'followers',
          name: 'Followers',
          description: 'Get real Instagram followers to grow your account',
          icon: '👥'
        },
        {
          id: 'likes',
          name: 'Post Likes',
          description: 'Increase likes on your Instagram posts',
          icon: '❤️'
        },
        {
          id: 'comments',
          name: 'Comments',
          description: 'Get authentic comments on your posts',
          icon: '💬'
        }
      ],
      tiktok: [
        {
          id: 'followers',
          name: 'Followers',
          description: 'Get TikTok followers to grow your account',
          icon: '👥'
        },
        {
          id: 'likes',
          name: 'Video Likes',
          description: 'Increase likes on your TikTok videos',
          icon: '❤️'
        },
        {
          id: 'shares',
          name: 'Shares',
          description: 'Boost your video shares and reach',
          icon: '🔄'
        }
      ],
      facebook: [
        {
          id: 'followers',
          name: 'Page Followers',
          description: 'Get Facebook page followers',
          icon: '👥'
        },
        {
          id: 'likes',
          name: 'Page Likes',
          description: 'Increase your page likes',
          icon: '👍'
        },
        {
          id: 'engagement',
          name: 'Post Engagement',
          description: 'Boost engagement on your posts',
          icon: '💬'
        }
      ]
    };
    
    return services[platformId] || [];
  };

  const services = getServicesForPlatform(platform.id);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal service-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{platform.name} Services</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <p className="modal-description">
            Choose a service to see pricing and add to cart
          </p>
          
          <div className="service-list">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item"
                onClick={() => onServiceSelect(service)}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-details">
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
