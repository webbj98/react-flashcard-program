import { useState } from 'react';
import './card.css';

interface CardParams {
  frontText: string;
  backText: string;
}
export default function Card({ frontText, backText }: CardParams) {
  const [showingFront, setShowingFront] = useState(true);

  return (
    <div className="card">
      {showingFront && frontText}
      {!showingFront && backText}
      <button type="button" onClick={() => setShowingFront(!showingFront)}>
        {' '}
        Flip Over{' '}
      </button>
    </div>
  );
}
