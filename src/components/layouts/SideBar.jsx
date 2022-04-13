import {React} from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
      <nav>
       <ul>
           {
               props.items.map((item , index) => (
                  <li className="d-flex flex-column" key={index}>
                  <div className="col d-flex flex-row">
                   <div className={`icon ${item.icon}`}></div>
                    <div>
                    <Link 
                      to={item?.url} 
                      onClick={() =>  localStorage.setItem('location', item.text)} >
                     {item.text}
                     </Link>
                    </div>
                   
                   </div>
                </li>
               ))
           }
        </ul> 
    </nav>
    )
  };

export default SideBar;
