import { useParams } from "react-router-dom"

export default function SinglePost() {
    const params = useParams();
    console.log(params)

    return(
        <>
            <h1>a</h1>
        </>
    )
}