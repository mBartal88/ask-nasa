const Home = ({ today, setDay, data}) => {

    return (
        <main className="Home">         
            <h1>Astronomy Picture of the Day</h1>
            <p>{today}</p><br />
            <input
                type="date"
                onChange={(e) => setDay(e.target.value)}
            /><br /><br /><br />
            <span>{data.title}</span>
            {data.media_type === "image" ? <img className="baseImage" src={data.url}></img> : <iframe className="baseImage" src={data.url}></iframe>}<br />
            <p className="explanation"><strong>Explanation:</strong>{data.explanation}</p>           
        </main>
    );
}

export default Home;
