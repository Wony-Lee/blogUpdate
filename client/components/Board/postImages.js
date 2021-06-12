import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import ImagesZoom from "../ImageZoom";
import { backURL } from "../../config/config";

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1) {
        return (
            <>
                <img
                    role="presentation"
                    src={`${backURL}/${images[0].src}`}
                    alt={images[0].src}
                    style={{ width: "220px", margin: "5px" }}
                    onClick={onZoom}
                />
                {showImagesZoom && (
                    <ImagesZoom images={images} onClose={onClose} />
                )}
            </>
        );
    }
    if (images.length === 2) {
        return (
            <>
                <img
                    role="presentation"
                    src={`${backURL}/${images[0].src}`}
                    alt={images[0].src}
                    onClick={onZoom}
                    style={{
                        width: "220px",
                        margin: "5px",
                        display: "inline-block",
                    }}
                />
                <img
                    role="presentation"
                    src={`${backURL}/${images[1].src}`}
                    alt={images[1].src}
                    onClick={onZoom}
                    style={{
                        width: "220px",
                        margin: "5px",
                        display: "inline-block",
                    }}
                />
                {showImagesZoom && (
                    <ImagesZoom images={images} onClose={onClose} />
                )}
            </>
        );
    }
    return (
        <>
            <div>
                <img
                    role="presentation"
                    src={`${backURL}/${images[0].src}`}
                    alt={images[0].src}
                    onClick={onZoom}
                    style={{ width: "220px", margin: "5px" }}
                />
                <div
                    role="presentation"
                    style={{
                        display: "inline-block",
                        width: "220px",
                        textAlign: "center",
                        verticalAlign: "middle",
                    }}
                    onClick={onZoom}
                >
                    <br />
                    {images.length - 1}개의 이미지 더보기
                </div>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
