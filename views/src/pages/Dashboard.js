import { useState, useEffect } from "react"
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import Songs from '../components/search/Songs';
import Videos from '../components/search/Videos';
import Albums from '../components/search/Albums';
import Artists from '../components/search/Artists';


function Search(props) {
    return (
        <div>
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
        <div className="container w-3/4 mx-auto mt-5 pb-60">
            <Search onSubmit={(e) => submitSearch(e)} onChange={(e) => setSearchTerm(e.target.value)} />
            {results.song && <Songs play={props.play} className="mt-5 border rounded p-5 border-gray-200" resultList={results.song} />}
            {results.artist && <Artists className="mt-5 border rounded p-5 border-gray-200" resultList={results.artist} />}
            {results.album && <Albums className="mt-5 border rounded p-5 border-gray-200" resultList={results.album} />}
            {results['music-video'] && <Videos play={props.play} className="mt-5 border rounded p-5 border-gray-200" resultList={results['music-video']} />}
        </div>
    )
}