# Social Media Growth Services - React App

A modern React application for purchasing social media growth services across YouTube, Instagram, TikTok, and Facebook platforms.

## Features

- **Header Navigation**: About Us, Services, My Account, Blog, My Cart
- **Platform Selection**: 4 clickable tiles for YouTube, Instagram, TikTok, and Facebook
- **Service Modals**: Platform-specific service options with detailed descriptions
- **Pricing Pages**: Comprehensive pricing for each service with multiple package options
- **Shopping Cart**: Full cart functionality with quantity management and total calculation
- **Responsive Design**: Mobile-friendly interface with modern UI/UX

## Prerequisites

Before running this application, you need to have Node.js installed on your system.

### Installing Node.js

1. **Download Node.js**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Run the installer and follow the setup wizard
3. **Verify Installation**: Open a terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

## Installation & Setup

1. **Clone or Download**: Get the project files to your local machine

2. **Install Dependencies**: Open a terminal in the project directory and run:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Open in Browser**: The application will automatically open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with cart badge
│   ├── Header.css
│   ├── Home.js            # Main page with platform tiles
│   ├── Home.css
│   ├── ServiceModal.js    # Service selection modal
│   ├── ServiceModal.css
│   ├── CostingPage.js     # Pricing and package selection
│   ├── CostingPage.css
│   ├── Cart.js            # Shopping cart functionality
│   └── Cart.css
├── App.js                 # Main app component with routing
├── App.css               # App-specific styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features Overview

### 1. Platform Selection
- Click on any of the 4 platform tiles (YouTube, Instagram, TikTok, Facebook)
- Each platform has a unique color theme and description

### 2. Service Selection
- Modal popup shows 3 service options per platform
- Services include subscribers, views, likes, comments, shares, etc.
- Detailed descriptions for each service

### 3. Pricing & Packages
- Multiple quantity options for each service
- Real-time pricing display
- Delivery time estimates
- Package selection with visual feedback

### 4. Shopping Cart
- Add services to cart from pricing pages
- View all selected services
- Modify quantities with +/- buttons
- Remove items from cart
- Real-time total calculation
- Cart badge in header showing item count

### 5. Responsive Design
- Mobile-friendly interface
- Responsive grid layouts
- Touch-friendly buttons and interactions

## Technology Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **Context API** - State management for cart
- **Create React App** - Build tool and development environment

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- The app uses React Context for cart state management
- All styling is done with CSS (no external UI libraries)
- Responsive design uses CSS Grid and Flexbox
- Modal components use overlay click-to-close functionality
- Cart data persists during the session

## Future Enhancements

- Backend API integration
- User authentication
- Payment processing
- Order history
- Service tracking
- Admin dashboard
- Real-time notifications

## Troubleshooting

### Common Issues

1. **Node.js not recognized**: Make sure Node.js is properly installed and added to PATH
2. **Port 3000 in use**: The app will automatically try the next available port
3. **Dependencies not found**: Run `npm install` to install all required packages

### Getting Help

If you encounter any issues:
1. Check that Node.js is properly installed
2. Ensure all dependencies are installed with `npm install`
3. Clear npm cache with `npm cache clean --force`
4. Delete `node_modules` folder and run `npm install` again

## License

This project is created for educational and demonstration purposes.
