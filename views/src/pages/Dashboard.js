import { useState, useEffect } from "react"
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';

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

function Songs(props) {
    const { list } = props;

    return (
        <div {...props}>
            <h3 className="text-xl font-bold">Songs</h3>
            {list && list.map(song => {
                let artwork = song.artwork.replace("{w}", "600");
                artwork = artwork.replace("{h}", "800");
                
                return(
                    <div>
                        <img src={artwork}></img>
                        <h4>{song.name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default function Dashboard() {
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
            <Songs className="mt-5" list={results.song} />
        </div>
    )
}