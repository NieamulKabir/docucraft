'use client'

import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";


const Search = () => {
    const [searchResult,setSearchResult]=useState([])
    const [term,setTerm]=useState("")
    return (
        <div>
            search
        </div>
    );
};

export default Search;