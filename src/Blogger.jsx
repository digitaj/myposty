
import Nav from "./blogger_components/Nav";
import Header from "./blogger_components/Header";
import Main from "./blogger_components/Main";
import Footer from "./blogger_components/Footer";
import { useEffect, useState } from "react";


const Blogger = () => {

          const [loading, setLoadding] =  useState(true)

           const [posts, setPosts] = useState([]);

           const [error, setError] = useState(false)



      function fetch_all_posts(){
             fetch("https://jsonplaceholder.typicode.com/posts")
             .then(function(res){
               return res.json()
             }).then(function(data){
                    setLoadding(false)
                    setError(false)
                    setPosts(data)
             }).catch(function(error){
                    setLoadding(false)
                    setError(true)
                    setPosts([])
             })
      }
    useEffect(()=>{
        fetch_all_posts()
    }, []);

    return (
        <>
            <Nav />
            <Header />
            <Main posts={posts} loading={loading} error={error}/>
            <Footer /> 
        </>
    )
}

export default Blogger;