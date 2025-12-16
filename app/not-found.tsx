import Link from "next/link";

const NotFound = () => {
    return ( <article>
        <h1>Something went wrong</h1>
        <p>The dogs probably did it</p>
        <Link href="/" className="text-blue-500 underline">Go back home</Link>
    </article> );
}
 
export default NotFound;