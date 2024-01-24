import React from 'react';
import './tooltip.css';

function Tooltip(props) {
  const { text, tipClass, children } = props;
  return (
    <div className="tooltip">
      {children}
      <span className={tipClass} >{text}</span>
    </div>
  );
}

export default Tooltip;