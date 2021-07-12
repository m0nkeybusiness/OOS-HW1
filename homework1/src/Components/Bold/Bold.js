import './Bold.css';

function Bold(props) {
   // return <div className="bold_text">{props.children}</div>;
   return (
      <div className={`bold_text ${props.className}`}>{props.children}</div>
   );
}

export default Bold;
