import React, { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const HeroBanner = () => {
    const navigate = useNavigate()
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    const searchQueryHandler = () => {
        if (query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            searchQueryHandler()
        }
    }

    return (
        <div className='heroBanner'>
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacityLayer">
                
            </div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Where imagination meets reality, and every frame tells a story.</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for a movie or TV show...'
                            onKeyUp={handleKeyUp}
                            onChange={(e) => setQuery(e.target.value)} />
                        <button onClick={searchQueryHandler}>
                            Search
                        </button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner
