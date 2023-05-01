import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import styles from '@/styles/PhotoGrid.module.css';

export default function PhotoGrid(props) {

    function openImageViewer(image) {
        setCurrentImage(props.images.indexOf(image));
        setIsViewerOpen(true);
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    let currentIndex = 0;
    let photoGridArray = [[],[],[]];
    props.images.forEach(image => {
        photoGridArray[currentIndex].push(image);
        currentIndex = currentIndex < photoGridArray.length - 1 ? currentIndex + 1 : 0;
    });

    return (
        <>
            <div className={styles.photoGrid}>
                {photoGridArray.map(column => (
                    <div key={column}>  
                        {column.map(image => (
                            <img key={image} src={image} onClick={() => openImageViewer(image)}/> 
                        ))}
                    </div>
                ))}
            </div>
            {isViewerOpen &&
                <ImageViewer
                    src={ props.images }
                    currentIndex={ currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={ () => setIsViewerOpen(false) }
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                />
            }
        </>
    )
}