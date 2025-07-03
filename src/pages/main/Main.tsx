import './Main.css';

import cat from './images/cat.gif';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="title-with-cat">
                <div className="example-cat-as-background"/>
                <img alt="" src={cat} className="dancing-cat"/>
                Задание для студентов
            </div>
        </div>
    );
};
