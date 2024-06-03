import { NavLink } from 'react-router-dom';
import './menu.css';

export const Menu = () => {
    return (
        <div className="container">
            <ul className="nav-ul">
                <li className="element_li">
                    <NavLink
                        to="/home"
                        className="element_nav"
                    >
                        <p className="element_p">Домашня сторінка</p>
                    </NavLink>
                </li>
                <li className="element_li">
                    <NavLink
                        to="/project"
                        className="element_nav"
                    >
                        <p className="element_p">Проєкт</p>
                    </NavLink>
                </li>
                <li className="element_li">
                    <NavLink
                        to="/materials"
                        className="element_nav"
                    >
                        <p className="element_p">Джерела</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
