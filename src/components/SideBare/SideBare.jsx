import './SideBare.css';
import img from '../../components/img/pluton.png';

export const SideBare = () => {
    return (
        <div>
            <div className="sidebare">
                <div>
                    <h2>Опис проєкту</h2>
                </div>
                <div className="sideBar_content">
                    <ul className="sideBar_ul">
                        <li>
                            <h3>Тема</h3>
                            <p>Дослідження шляху Плутону, як планети.</p>
                        </li>
                        <li>
                            <h3>Питання</h3>
                            <p>Чи заслуговує Плутон називатись планетою ?</p>
                        </li>
                        <li>
                            <h3>Мета</h3>
                            <p>
                                Відвісти на питання проєкту шляхом вивчення
                                різних джерел інформації.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="img-div-sidebare">
                <img src={img} alt="" className="img" />
            </div>
        </div>
    );
};
