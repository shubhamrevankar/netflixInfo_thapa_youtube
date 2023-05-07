import React from 'react'
import fetch from 'node-fetch'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'


const Movie = async () => {

  // const url = process.env.RAPID_KEY;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '541f859a7bmsh0d7db758b819557p18b289jsnb2db1183c3af',
  //     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  //   }
  // };

  // let data;
  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   // console.log(result);
  //   data = result.titles
  // } catch (error) {
  //   console.error(error);
  // }
  
  const data = [];

  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movie page</h1>
        <div className={styles.card_section}>
        {
          data.map((ele) => {
            return <MovieCard
              {...ele}
              key={ele}
            />
          })
        }
        </div>
      </div>
    </section>
    

    </>
  )
}

export default Movie