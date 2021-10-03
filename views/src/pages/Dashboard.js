import { useState } from "react"
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import Songs from '../components/search/Songs';
import Videos from '../components/search/Videos';
import Albums from '../components/search/Albums';
import Artists from '../components/search/Artists';
import Stations from '../components/search/Stations';
import Playlists from '../components/search/Playlists';


function Search(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <SearchIcon />
                    </span>
                    <input onChange={props.onChange} type="text" placeholder="Search..." className="px-3 py-3 flex-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring pl-10" />
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded ml-2 flex-none">Search</button>
                </div>
            </form>
        </div>
    )
}

export default function Dashboard(props) {
    const [loading, toggleLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Playlists and the state for search queries is stored in the top level component 
    // so that it is saved when the page changes
    const { playlists, addToPlaylist, play, searchResults, setSearchResults } = props;
    const results = searchResults;

    const submitSearch = (e) => {
        e.preventDefault();
        toggleLoading(true);
        axios.get("/api/search?term=" + searchTerm).then(res => {
            toggleLoading(false);
            setSearchResults(res.data);
        }).catch(err => {
            toggleLoading(false);
            console.log(err);
        })
    }

    return (
        <div className="container mx-auto mt-5 pb-60 px-3 md:px-1">
            <h1 className="text-3xl font-bold my-5 ml-2">Browse media</h1>
            <Search onSubmit={(e) => submitSearch(e)} onChange={(e) => setSearchTerm(e.target.value)} />
            {loading ?
                <div class="animate-pulse flex space-x-4 absolute right-1/2 top-1/2">
                    <div class="rounded-full bg-blue-400 h-12 w-12"></div>
                </div>
                :
                <div>

                    {results.song &&
                        <Songs playlists={playlists} addSong={addToPlaylist} play={play} className="mt-5 border rounded p-5 border-gray-200" resultList={results.song} />
                    }

                    {results.artist &&
                        <Artists className="mt-5 border rounded p-5 border-gray-200" resultList={results.artist} />
                    }

                    {results['music-video'] &&
                        <Videos playlists={playlists} addVideo={addToPlaylist} play={play} className="mt-5 border rounded p-5 border-gray-200" resultList={results['music-video']} />
                    }

                    {results.album &&
                        <Albums className="mt-5 border rounded p-5 border-gray-200" resultList={results.album} />
                    }

                    {results.station && results.station.length > 0 &&
                        <Stations className="mt-5 border rounded p-5 border-gray-200" resultList={results.station} />
                    }

                    {results.playlists && results.playlists.length > 0 &&
                        <Playlists className="mt-5 border rounded p-5 border-gray-200" resultList={results.playlists} />
                    }
                </div>
            }
        </div>
    )
}