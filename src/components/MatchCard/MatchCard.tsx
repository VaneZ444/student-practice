import React from 'react';
import './MatchCard.css';

interface MatchCardProps {
  tournament: string;
  teams: [string, string];
}

export const MatchCard: React.FC<MatchCardProps> = ({ tournament, teams }) => {
  const handleMatchClick = () => {
    window.open('https://twitch.tv', '_blank');
  };

  return (
    <div className="match-card">
      <div className="match-header">{tournament}</div>
      <div className="match-body">
        <ul className="match-teams-list">
          <li>{teams[0]}</li>
          <li>{teams[1]}</li>
        </ul>
      </div>
      <button className="match-button" onClick={handleMatchClick}>
        Перейти на матч
      </button>
    </div>
  );
};