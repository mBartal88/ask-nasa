import { useState, useEffect } from 'react';
import Layout from './Layout';
import Home from './Home';
import Gallery from './Gallery';
import Moment from 'moment';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [data, setData] = useState({});
    const [date, setDate] = useState(Moment().format("YYYY-MM-DD"));
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=C85tS7kq4xLTxW1Uwe8PAYF9c6rziAiL42cOLslb&date=${date}`;
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw Error('Did not receive expected data!');
                const listItems = await response.json();
                setData(listItems);

                const imageList = [...list, [listItems.url, listItems.media_type, listItems.title, listItems.explanation]];
                setList(imageList);

            } catch (err) {
                console.log(err.message);
            }
        }

        (async () => await fetchItems())();

    }, [date]);

    return (
        <Routes>
            <Route path="/" element={<Layout
            />}>
                <Route index element={<Home
                    today={date}
                    setDay={setDate}
                    data={data}
                />} />
                <Route path="gallery">
                    <Route index element={<Gallery
                        list={list}
                    />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
