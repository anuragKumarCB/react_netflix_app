import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import useFetchMovie from '../hooks/useFetchMovies'


const Home = () => {

    const upcomingMovies = useFetchMovie("upcoming")
    const popularMovies = useFetchMovie("popular")
    const nowPlayingMovies = useFetchMovie("now_playing")
    const topRatedMovies = useFetchMovie("top_rated")



    return (
        <div>
            <Banner />
            <div className='flex flex-col gap-4 bg-gray-800 py-6'>
                {upcomingMovies && <Row title={"Upcoming Movies"} moviesArray={upcomingMovies} />}
                {popularMovies && < Row title={"Popular on netflix"} moviesArray={popularMovies} />}
                {nowPlayingMovies && <Row title={"Now Playing"} moviesArray={nowPlayingMovies} />}
                {topRatedMovies && <Row title={"Top Rated"} moviesArray={topRatedMovies} />git }
            </div>
        </div>
    )
}

export default Home