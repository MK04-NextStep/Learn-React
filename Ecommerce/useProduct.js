import axios from "axios";
import { useEffect, useState } from "react"

function useProduct(id){

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios
        .get("https://dummyjson.com/products/"+id)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            setError("Error");
        })

    },[])

    return {data, loading, error}
}

export default useProduct