import React, { useState } from 'react';

// Input card components
const Card1 = () => <div>Card 1 - Input fields here</div>;
const Card2 = () => <div>Card 2 - Input fields here</div>;
const Card3 = () => <div>Card 3 - Input fields here</div>;

const DynamicForm = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handlePrevCard = () => {
    setActiveCard(prev => (prev === 1 ? 1 : --prev));
  };

  const handleNextCard = () => {
    setActiveCard(prev => (prev === 3 ? 3 : ++prev));
  };

  return (
    <div>
      {/* Display the current active card */}
      {activeCard === 1 && <Card1 />}
      {activeCard === 2 && <Card2 />}
      {activeCard === 3 && <Card3 />}

      {/* Left and Right arrow buttons */}
      <button onClick={handlePrevCard}>Prev</button>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default DynamicForm;
