import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      // .then((response) => {
      //   return response.json(); // .json()으로 변환 작업을 해주고
      //   // 프로미스를 반환해준다.
      // .then((data) => {
      // }) then 대신 async와 await

      // 현재 사용중인 API는 오류가 생겼을 때 json을 전송하지 않는
      // json의 존재 여부로 오류 발생 여부를 확인할 수 있다.
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);

      // 추가적인 then 구역을 생성, 데이터 변환 작업이
      // 끝날 때 작동하게 됨.
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  // useCallback 뒤에도 의존성 배열 추가해야 무한루프에 빠지지 않음.

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // 의존성 배열에 fetchMoviesHandler를 추가하면 함수이기 때문에
  // 무한루프에 빠짐. 그래서 useCallback을 사용하기로.
  // 또한 fetchMoviesHandler가 전체 코드를 파싱하기 전에
  // 함수를 호출하기 때문에 오류가 발생.
  // 따라서 fetchMoviesHandler 다음으로 순서를 변경함.

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
