import { Menu } from 'components/Menu/Menu';
import { SideBare } from 'components/SideBare/SideBare';
import pl1 from '../img/церера.png';
import pl2 from '../img/pluton.png';
import pl3 from '../img/хаумеа.png';
import pl4 from '../img/макемаке.png';
import pl5 from '../img/ерида.png';

import './Project.css';

export const Project = () => {
    return (
        <div>
            <Menu />
            <SideBare />
            <div className="project_div">
                <section>
                    <h3>План Роботи</h3>
                    <ol className="project_ul" start="1">
                        <li>
                            <p>Плутон був планетою</p>
                        </li>
                        <li>
                            <p>Перехід Плутону до карликових планет</p>
                        </li>
                        <li>
                            <p>Обговорння отриманої інформації</p>
                        </li>
                        <li>
                            <p>Висновок</p>
                        </li>
                    </ol>
                </section>
                <section>
                    <h3>Виконання роботи</h3>

                    <p>
                        Плутон було відкрито в 1930 році. Наступні 76 років його
                        вважали планетою, але в 2006 році його статус було
                        змінено.
                    </p>
                    <h4>Причини втрати статутсу планети.</h4>
                    <p>
                        24 серпня 2006 року Сергій Драчук Прага заявив, що у
                        сонячній системі поменшало на одну планету, їх
                        залишилось вісім. Основною причиною стало те, що Плутон
                        не відповідає новому визначенню слова планета.
                        <p>
                            <span>
                                За новим визначенням, планета – це тіло, що
                                обертається навколо Сонця, має достатню масу,
                                щоби під впливом власного тяжіння досягти «форми
                                гідростатичної рівноваги» (тобто майже кулястої
                                форми), і звільнило власну орбіту від інших тіл.{' '}
                            </span>
                        </p>
                        Причиною не попадання в групу є невиконання Плутоном
                        останньої умови, адже він обертається у так званому
                        поясі Койпера разом із багатьма іншими об’єктами.
                        Натомість він потрапляє під нове визначення карликової
                        планети: вона відрізняється від просто планети саме тим,
                        що не звільнила свою орбіту, і при цьому не є супутником
                        іншого небесного тіла. Після переходу Плутону до
                        карликових планет їх стало троє. Це – Плутон, об’єкт
                        2003 UB313(Ерида) і великий об’єкт із поясу астероїдів
                        поміж Марсом і Юпітером, що зветься Церера. В даний час
                        МАС розпізнає 5 карликових планет в нашій Сонячній
                        системі: Церера, Плутон, Хаумеа, Макемаке і Ерида.
                    </p>
                    <div className="photodiv">
                        <ul className="photoul">
                            <li>
                                <img src={pl1} width="300" />
                                <p>Церера</p>
                            </li>
                            <li>
                                <img src={pl2} width="300" />
                                <p>Плутон</p>
                            </li>
                            <li>
                                <img src={pl3} />
                                <p>Хаумеа</p>
                            </li>
                            <li>
                                <img src={pl4} width="600" />
                                <p>Макемаке</p>
                            </li>
                            <li>
                                <img src={pl5} width="550" />
                                <p>Ерида</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h4>Висновок</h4>
                    <p>
                        Дослідивши питання, яке мене цікавило я прийшла до
                        власного висновку.
                    </p>
                    <p>
                        Я вважаю, що рішення про перехід Плутону до карликових
                        планет було правильним. По-перше, на момент відкриття
                        Плутону, як планети не була відома така кількість
                        карликів. По-друге, лише з розвитком косміних наук вчені
                        змогли обгрунтувати чим відрізняються одні космічні
                        об,єкти від інших. У нашому випадку мова йде про
                        звичайні та карликові планети. Залишати Плутон в
                        планетах в той час, коли існує декілька планет зі
                        схожими характеристиками було б нерозумно.{' '}
                    </p>
                </section>
            </div>
        </div>
    );
};