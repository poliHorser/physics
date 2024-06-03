import { Menu } from 'components/Menu/Menu';
import img from '../../components/img/pluton.png';

import './StartedPage.css';
const StartedPage = () => {
    return (
        <div>
            <Menu />
            <div className="start_div">
                <h1 className="start_title">
                    «Космічні дослідження об’єктів Сонячної системи»
                </h1>
                <div className="p_div">
                    <p className="start_p">
                        {' '}
                        Роботу виконувала
                        <span> Лінінг Поліна</span>{' '}
                    </p>
                    <p className="start_p"> 11-Д5</p>
                </div>
            </div>
            <div className="img-div">
                <img src={img} alt="" className="img-home" />
            </div>
        </div>
    );
};

export default StartedPage;
