import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';


async function Page({params}) {

  // const id = params.id;

  // const url = `https://netflix54.p.rapidapi.com/title/details/?lang=en&ids=${id}`;
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
  //   data = result[0].details;
  // } catch (error) {
  //   console.error(error);
  // }


  return (
    <div className={styles.container}>
        <h2 className={styles.movie_title}>   Netflix \ <span> {data.type} </span> </h2>
        <div className={styles.card_section}>
            <div>
                <Image src={data.backgroundImage.url} alt={data.title} width={600} height={300} />
            </div>
            <div>
                <h1>{data.title}</h1>
                <p>{data.synopsis}</p>
            </div>
        </div>
    </div>
  )
}

export default Page