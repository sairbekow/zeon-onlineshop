import './Wrapper.scss'

const Wrapper = ({children, title, center, subtitle}) => {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title title"
          style={center ? {"textAlign" : "center"} : null}>
        {title}
      </h2>
      <p className="wrapper__subtitle">{subtitle}</p>
      <ul className="wrapper__content">
        {children}
      </ul>
    </div>
  );
};

export default Wrapper;
