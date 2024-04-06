import React, {useState} from "react";

export default function ImageViewer({ imageArray }){
    const [selectedPhoto, setSelectedPhoto] = useState(imageArray[0]);

    const handlePhotoClick = (photo) => {
      setSelectedPhoto(photo);
    };

    return (
        <div className="photo-gallery">
            <div className="main-photo">
                <img src={selectedPhoto} alt="Selected" />
            </div>
            <div className="thumbnail-container">
                { imageArray && imageArray.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Thumbnail ${index + 1}`}
                      className={selectedPhoto === photo ? 'selected' : ''}
                      onClick={() => handlePhotoClick(photo)}
                    />
                ))}
            </div>
        </div>
    );
}