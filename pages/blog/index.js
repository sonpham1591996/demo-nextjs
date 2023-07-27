import axios from "axios";
import { useEffect } from "react";

export default function BlogPage(props) {

    useEffect(() => {
        console.log("Go to useEffect");
    }, []);

    return (
        <>
            {/* <nav>
                {
                    props.menus.map((m, index) => {
                        return (
                            <a key={index}>{m}</a>
                        )
                    })
                }
            </nav> */}
            {
                props.posts.map((post, index) => {
                    return (
                        <h4 key={index}>{post.id} - {post.title}</h4>
                    )
                })
            }
            <h1>BLOG PAGE</h1>
        </>

    )
}


// export async function getStaticProps() {
//     const res = await axios.get('http://localhost:8080/menus');
//     console.log(JSON.stringify(res.data));
//     const menus = res.data;

//     return {
//         props: {
//             menus: menus
//         }
//     }
// }

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:8080/posts');
    console.log(JSON.stringify(res.data));
    const posts = res.data;
    return {
        props: {
            posts: posts
        }
    }
}