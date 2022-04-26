import './Colors.scss'
import {useState} from "react";

const Colors = ({colors, size}) => {

  return (
    <div className="colors">
      <ul className="colors__list">
        {colors && colors.map((color, id) => (
          <li key={id}
              className="colors__item"
              style={color === "#fff" ? {
                "backgroundColor": color,
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "#d1d1d1"
              } : {"backgroundColor": color}}/>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
