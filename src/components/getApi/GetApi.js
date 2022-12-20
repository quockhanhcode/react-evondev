import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.scss"

const GetApis = () => {

    return axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


const GetApi = () => {
    // dùng useState để hiện dữ liệu ra 
    const [randomApi, setRandomApi] = useState([]);

    const [Page, setPage] = useState(3);

    const showMore = () => {
        setPage((prevValue) => prevValue + 3);
    }

    useEffect(() => {
        GetApis().then((url) => {
            console.log(url);
            setRandomApi(url);
        });
    }, []);

    // Khi click vào button thì sẽ load thêm

    return (

        // {/* dùng json để biến thành json string */}
        // {/* {JSON.stringify(randomApi)} */}

        <div className='container'>
            <div className='flex'>
                {randomApi.length > 0 && randomApi.slice(0, Page).map((item, index) => (
                    <div key={item.id} className='box'>
                        <div className='stt'>{item.id}</div>
                        <h4>{item.title}</h4>
                        <div className='img'>
                            <img src={item.url} />
                        </div>
                    </div>
                ))}
            </div>
            {/* load more */}
            <button onClick={showMore}>
                Load more
            </button>
        </div>
    )
}

export default GetApi