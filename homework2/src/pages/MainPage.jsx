import { useEffect, useState } from "react"
import styles from './MainPage.module.css'
import axios from 'axios'

const MainPage = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(res => setData(res.data.post))
    },[])

    return (
        <div className={styles.main}>
            {data?.map(el => <div key={el?.id}>{el?.title}</div>)}
        </div>
    )
}

export default MainPage