import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { MatchCard } from '../../components/MatchCard/MatchCard';
import './Main.css';

export const MainPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRatingClick = () => {
    navigate('rating');
  };

  const handleTeamClick = (teamId: number) => {
    navigate(`teams/${teamId}`);
  };

  const handleHeaderClick = () => {
    navigate('/');
  };

  return (
    <div className="portal-container">
      <header className="portal-header" onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>
        <h1 className="portal-title">Cyber Sports Portal</h1>
      </header>

      <main className="portal-main">
        <section className="news-section">
          <div className="widget-header">
            <div className="news-header-content">
              <div className="news-header-item">
                <span>Новое за последнее время</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#202020"><path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z"/></svg>
              </div>
              <div className="news-header-item">
                <span className="current-time">{currentTime}</span>
              </div>
            </div>
          </div>
          <div className="widget-content">
            <div className="news-grid">
              {[1, 2, 3, 4].map((_, idx) => (
                <NewsCard
                  key={idx}
                  id={idx}
                  title="Nigma Galaxy проиграла AVULUS и покинула FISSURE Universe: Episode 5"
                  text="Nigma Galaxy встретилась с AVULUS на групповом этапе FISSURE Universe: Episode 5 по Dota 2. Команда Джанна Ghost Чана проиграла оппоненту со счётом 0:2 и вылетела из соревнования."
                  imageUrl="/student-practice/article.png"
                />
              ))}
            </div>
          </div>
        </section>

        <aside className="sidebar">
          <div className="widget full-height">
            <div className="widget-header">
              <div className="widget-header-content">
                <span>Матчи LIVE</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#202020"><path d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/></svg>
              </div>
            </div>
            <div className="widget-content">
              <div className="widget-body">
                <MatchCard 
                  tournament="FISSURE UNIVERSE EPISODE 5" 
                  teams={['Aurora', 'AVULUS']} 
                />
                <MatchCard 
                  tournament="FISSURE UNIVERSE EPISODE 5" 
                  teams={['Heroic', 'Liquid']} 
                />
              </div>
            </div>
          </div>

          <div className="widget full-height">
            <div className="widget-header" onClick={handleRatingClick} style={{ cursor: 'pointer' }}>
              <div className="widget-header-content">
                <span>Рейтинг ESL</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#202020"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>
              </div>
            </div>
            <div className="widget-content">
              <ul className="ranking-list">
                {[
                  { id: 1, name: 'PARIVISION', rating: 23745, icon: '/student-practice/parivision.webp' },
                  { id: 2, name: 'BetBoom', rating: 14760, icon: '/student-practice/betboom.webp' },
                  { id: 3, name: 'Spirit', rating: 12500, icon: '/student-practice/spirit.webp' },
                  { id: 4, name: 'Falcons', rating: 10625, icon: '/student-practice/falcons.webp' },
                ].map((team, index) => (
                  <li 
                    key={index} 
                    className="ranking-item" 
                    onClick={() => handleTeamClick(team.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="ranking-team">
                      <img src={team.icon} alt={team.name} className="team-icon" />
                      <div className="team-info">
                        <div className="team-name">{team.name}</div>
                        <div className="team-rating">{team.rating}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};