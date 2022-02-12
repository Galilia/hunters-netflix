import React from 'react';
import './show.css';
import { useNavigate } from 'react-router';

const Show = ({showData}) => {
  const navigate = useNavigate();

  let openInfoPage = () => {
    navigate(`/${showData.id}`, { state: {id: showData.id }});
  }

  return (
    <div key={ showData.id } className="show" onClick={() => openInfoPage()}>
      <img className="show-img" src={showData.image.medium} alt="Card image cap" />
      <h2> Rating: {showData.rating.average} </h2>
    </div>
  );
};


export default Show;