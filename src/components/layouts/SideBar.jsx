import {React, useState} from 'react';
import Expand from 'assets/images/svg/expand_more.svg';
import { Link } from 'react-router-dom';

const SideBar = () => {

   const ItemsBar = [
      {
          url: '/',
          icon: 'home',
          text: 'Главная'
      },]

    return (
      <nav>
       <ui>
           {
               ItemsBar.map((item , index) => (
               
                <li className="d-flex flex-column" key={index}>
                    <Link to={item?.url}>
                        <div className='col d-flex flex-row'>
                            <div className='icon home'></div>
                            <span>{item?.text}</span>
                        </div>
                        
                    </Link>
                </li>
               ))
           }
        </ui> 
     
    </nav>
    )
  };
/*
<ul>
       <li className="d-flex flex-column activeNav" id="li-0">
          <div className="col d-flex flex-row" onClick="changePage('/admin/index', 0)">
             <div className="icon home"></div>
             <div><a onClick="event.preventDefault();">Главная</a></div>
          </div>
       </li>
       <li className="d-flex flex-column" id="li-1">
          <img src={Expand}/>
          <div className="col d-flex flex-row" onClick="submenu('li-1','s-person')">
             <div className="icon person"></div>
             <div><a onClick="event.preventDefault();">Пользователи</a></div>
          </div>
          <div className="col submenu" id="s-person">
             <ul>
                <li onClick="changePage('/admin/users/all', 1)">
                   <div className="icon"></div>
                   <div> <a onClick="event.preventDefault();">Все</a></div>
                </li>
             </ul>
          </div>
       </li>
       <li className="d-flex flex-column" id="li-2">
          <img src={Expand}/>
          <div className="col d-flex flex-row" onClick="submenu('li-2','s-corporate')">
             <div className="icon corporate"></div>
             <div><a onClick="event.preventDefault();">Организации</a></div>
          </div>
          <div className="col submenu" id="s-corporate">
             <ul>
                <li onClick="changePage('/admin/corporate/all', 2)">
                   <div className="icon"></div>
                   <div> <a onClick="event.preventDefault();">Все</a></div>
                </li>
             </ul>
          </div>
       </li>
       <li className="d-flex flex-column" id="li-3">
          <img src={Expand}/>
          <div className="col d-flex flex-row" onClick="submenu('li-3','s-modules')">
             <div className="icon modules"></div>
             <div><a onClick="event.preventDefault();">Модули</a></div>
          </div>
          <div className="col submenu" id="s-modules">
             <ul>
                <li onClick="changePage('/admin/modules/all', 3)">
                   <div className="icon"></div>
                   <div> <a onClick="event.preventDefault();">Все</a></div>
                </li>
             </ul>
          </div>
       </li>
       <li className="d-flex flex-column" id="li-4">
          <img src={Expand} />
          <div className="col d-flex flex-row" onClick="submenu('li-4','s-groups')">
             <div className="icon groups"></div>
             <div><a onClick="event.preventDefault();">Группы</a></div>
          </div>
          <div className="col submenu" id="s-groups">
             <ul>
                <li onClick="changePage('/admin/groups/all', 4)">
                   <div className="icon"></div>
                   <div> <a onClick="event.preventDefault();">Все</a></div>
                </li>
             </ul>
          </div>
       </li>
       <li className="d-flex flex-column" id="li-5">
          <img src={Expand} />
          <div className="col d-flex flex-row" onClick="submenu('li-5','s-settings')">
             <div className="icon settings"></div>
             <div><a onClick="event.preventDefault();">Настройки</a></div>
          </div>
          <div className="col submenu" id="s-settings">
             <ul>
                <li onClick="changePage('/admin/settings/syncing', 5)">
                   <div className="icon"></div>
                   <div> <a onClick="event.preventDefault();">Синхронизация приложений</a></div>
                </li>
             </ul>
          </div>
       </li>
    </ul>

*/
/*const ItemsBar = [
    {
        url: '/',
        icon: 'home',
        text: 'Главная'
    },
]
const SideBar = () => {

  return (
    <nav>
       <ui>
           {
               ItemsBar.map((item , index) => (
               
                <li className="d-flex flex-column" key={index}>
                    <Link to={item?.url}>
                        <div className='col d-flex flex-row'>
                            <div className='icon home'></div>
                            <span>{item?.text}</span>
                        </div>
                        
                    </Link>
                </li>
               ))
           }
        </ui> 
     
    </nav>
  )
};
*/

export default SideBar;
