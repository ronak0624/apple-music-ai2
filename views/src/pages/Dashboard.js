import { useState, useEffect } from "react"
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import Songs from '../components/search/Songs';
import Videos from '../components/search/Videos';


function Search(props) {
    return (
        <div {...props}>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <SearchIcon />
                </span>
                <input onChange={props.onChange} type="text" placeholder="Search..." className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" />
            </div>
            <button onClick={props.onSubmit} className="py-2 px-4 bg-blue-500 text-white rounded">Search</button>
        </div>
    )
}

function Albums(props) {
    const { resultList } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Albums</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {resultList && resultList.map(album => {
                    let artwork = album.artwork.replace("{w}", "600");
                    artwork = artwork.replace("{h}", "800");

                    return (
                        <div className="inline-block p-2">
                            <img src={artwork}></img>
                            <h4 className="font-semibold mt-2">{album.name}</h4>
                            <span className="text-sm text-gray-600">{album.genreNames.join(", ")}</span>
                            <p className="text-sm text-gray-600">Album</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Artists(props) {
    const { resultList } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold mb-3">Artists</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {resultList && resultList.map(artist => {

                    return (
                        <div className="inline-block p-2">
                            <h4 className="font-semibold mt-2">{artist.name}</h4>
                            <span className="text-sm text-gray-600">{artist.genreNames.join(", ")}</span>
                            <p className="text-sm text-gray-600">Artist</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Dashboard(props) {
    const [results, setResults] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const submitSearch = (e) => {
        axios.get("/api/search?term=" + searchTerm).then(res => {
            setResults(res.data);
        }).catch(err => {
            setResults(err.response.data);
        })
    }

    console.log(results.song)

    return (
        <div className="container w-3/4 mx-auto mt-5">
            <Search onSubmit={(e) => submitSearch(e)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {results.song && <Songs play={props.play} className="mt-5 border rounded p-5 border-gray-200" resultList={results.song} />}
            {results.artist && <Artists className="mt-5 border rounded p-5 border-gray-200" resultList={results.artist} />}
            {results.album && <Albums className="mt-5 border rounded p-5 border-gray-200" resultList={results.album} />}
            {results['music-video'] && <Videos play={props.play} className="mt-5 border rounded p-5 border-gray-200" resultList={results['music-video']} />}
        </div>
    )
}