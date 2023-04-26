import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import styles from '@/styles/PhotoGrid.module.css';

export default function PhotoGrid(props) {

    const IMAGES = [
        "https://images.unsplash.com/photo-1551815470-2a7a8ce73ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
        "https://images.unsplash.com/photo-1600030809033-db73e1ff7a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
        "https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80",
        "https://images.unsplash.com/photo-1625806571384-2830e3ba80d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
        "https://images.unsplash.com/photo-1538367999111-0d6c7fb0299f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1612908088749-3cfbde2eaefa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3884&q=80",
        "https://images.unsplash.com/photo-1571766280138-1ba739fcc856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1596550782892-01e5f0229ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1603153481478-9fc3e3b055dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
        "https://images.unsplash.com/photo-1548704806-0c20f7ea6474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        "https://images.unsplash.com/photo-1563673708858-3a0680eaf5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        "https://images.unsplash.com/photo-1596570630094-43ddbe073a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1555310607-a58606109e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
    ];

    function openImageViewer(image) {
        setCurrentImage(IMAGES.indexOf(image));
        setIsViewerOpen(true);
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    let currentIndex = 0;
    let photoGridArray = [[],[],[]];
    IMAGES.forEach(image => {
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
                    src={ IMAGES }
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