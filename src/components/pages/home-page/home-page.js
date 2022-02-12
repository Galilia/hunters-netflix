import React from "react";
import Show from "../../show/show";
import './home-page.css';
import useFetch from "../../../hooks/useFetch";

const HomePage = () => {
  const res = useFetch(`https://api.tvmaze.com/shows`, {});

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const showsList = res.response;
  const getGenre = () => {
    const allFilmsGenreList = [];
    showsList.map(data => {
      allFilmsGenreList.push(...data.genres)
    })
    const genreTitleList = allFilmsGenreList.filter((item, index) => allFilmsGenreList.indexOf(item) === index);

    return genreTitleList;
  }

  const getShowList = (genreTitle) => {
    return showsList
      .filter(data => {
        return data.genres.includes(genreTitle);
      })
      .sort((a, b) => b.rating.average-a.rating.average)
      .slice(0, 9)
      .map((data) => (<Show showData={data}/>))
  }

  return (
    <div className='home-page'>
      {
        getGenre().map(genreTitle => (
          <div className='genreList'>
            <h2> Top 10 {genreTitle}</h2>
            <div className='showsList'>
              {getShowList(genreTitle)}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage;