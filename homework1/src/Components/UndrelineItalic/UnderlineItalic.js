import './UnderlineItalic.css';

const UnderlineItalic = (props) => {
   return (
      <div className={props.className}>
         <u>
            <i>{props.children}</i>
         </u>
      </div>
   );
};

export default UnderlineItalic;
