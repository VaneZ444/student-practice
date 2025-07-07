import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

interface NewsCardProps {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ id, title, text, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/nigma-lost-avulus-fissure-5`); //заглушка
  };

  return (
    <div className="news-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="news-text-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-text">{text}</p>
      </div>
      <img
        src={imageUrl}
        alt="Новость"
        className="news-image"
      />
    </div>
  );
};