import React from 'react';
import Navbar from './components/Navbar.jsx';
import PromoBanner from './components/PromoBanner.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import InsightCard from './components/InsightCard.jsx';
import AIStrip from './components/AIStrip.jsx';
import ChatWidget from './components/ChatWidget.jsx';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <PromoBanner />
      <Hero />
      <Products />
      <InsightCard />
      <AIStrip />
      <ChatWidget />
    </div>
  );
}
