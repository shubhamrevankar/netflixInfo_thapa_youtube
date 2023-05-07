import React from 'react'
import herostyles from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'
import { Mulish } from 'next/font/google';
import Image from 'next/image';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


function Hero({title,imageurl}) {
  return (
    <main className={herostyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={herostyles.hero_content}>
                        <h1>{title}</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                </div>
                <div className={herostyles.hero_image}>
                    <Image src={imageurl} alt="watching netflix" width={500} height={500}/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero