import Modal from 'react-modal';
import { useState } from 'react';

const Gallery = ({ list }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentTitle, setContentTitle] = useState([]);
    const [contentDescription, setContentDescription] = useState([]);

    const url = 0;
    const mediaType = 1;
    const title = 2;
    const description = 3;

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white" }}><strong>Gallery</strong></h1><br/>
            <div className="flex-container">
                {list.map((item, index) => (
                    <div key={index}>
                        {item[mediaType] === "image" 
                        ? <img src={item[url]}
                            onDoubleClick={() => { 
                            setIsOpen(true); 
                            setContentTitle(item[title]); 
                            setContentDescription(item[description]) }} 
                            className="gallery"></img> 
                        : <iframe src={item[url]} 
                            onDoubleClick={() => { 
                            setIsOpen(true); 
                            setContentTitle(item[title]); 
                            setContentDescription(item[description]) }} 
                            className="gallery"></iframe>}
                    </div>)
                )}
            </div>

            <Modal isOpen={isOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        height: '350px',
                        overflow: 'auto'
                    },
                    content: {
                        borderRadius: '20px',
                    }
                }}
            >
                <p>{ contentTitle }</p><br/>
                <span>{ contentDescription }</span>
                <br/><br />
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export default Gallery;
