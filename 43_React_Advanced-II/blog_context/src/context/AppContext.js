import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";


// 1:-Create and export Context
export const AppContext = createContext();


// 2:-Create Provider
export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    // Data Filling 
    async function fetchBlogPosts(page= 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(err){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }



    // Context
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    //Page Change
    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    //3:-Create Consumers by returning AppContext
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}


