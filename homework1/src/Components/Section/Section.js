import './Section.css';

const Section = (props) => {
   return (
      <div className="section_wrapper" id={props.id}>
         {props.children}
      </div>
   );
};

export default Section;
