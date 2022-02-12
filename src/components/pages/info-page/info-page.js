import React from "react";
import './info-page.css';
import { useLocation } from 'react-router';
import useFetch from "../../../hooks/useFetch";

const InfoPage = () => {
  const {state} = useLocation();
  const { id } = state;
  const res = useFetch(`https://api.tvmaze.com/shows/${id}`, {});
  if (!res.response) {
    return <div>Loading...</div>;
  }

  const {name, summary, image, rating} = res.response;

  return (
    <div className='info-page-container'>
      <h2>{name}</h2>
      <div className='infoPage'>
        <div className='showInfo'>
          <h3>Rating: {rating.average}</h3>
          <h3>Summary</h3>
          {summary}
        </div>
        <div className='showImg'>
          <img src={image.medium} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default InfoPage;