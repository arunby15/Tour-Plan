import { useState } from "react";

function Card({ id, name, image, price, info,removeTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  
  return (
    <div className="Card">

      <img src={image} className="image" alt=""></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="readmore" onClick={readmoreHandler}>
            {readmore ? `show Less` : `Read  More`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={()=>removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
