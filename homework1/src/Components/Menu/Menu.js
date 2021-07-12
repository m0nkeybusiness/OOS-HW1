import './Menu.css';

const Menu = (props) => {
   return (
      <div className="list_wrapper">
         <ul className="list">
            <li className="list_item">
               <a href={`#${props.anchor[0]}`}>Главная</a>
            </li>
            <li className="list_item">
               <a href={`#${props.anchor[1]}`}>Статьи</a>
            </li>
            <li className="list_item">
               <a href={`#${props.anchor[2]}`}>О нас</a>
            </li>
            <li className="list_item">
               <a href={`#${props.anchor[3]}`}>Контакты</a>
            </li>
         </ul>
      </div>
   );
};

export default Menu;
