import './ProductDetailColors.scss'

const ChooseColors = ({colors}) => {

  return (
    <div className="colors">
      <div className="colors__list">
        {colors && colors.map((color, id) => (
          <label key={id}>
            <div className="colors__item"
                 style={color === "#fff" ? {
                   "backgroundColor": color,
                   "borderWidth": 1,
                   "borderStyle": "solid",
                   "borderColor": "#d1d1d1"
                 } : {"backgroundColor": color}}/>
            <input type="radio" className=""/>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailColors;
