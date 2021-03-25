import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const getCloudinaryImageUrl = ({ name }) =>
  `https://res.cloudinary.com/djdctouse/image/upload/v1616708424/portfolio/${name}`

const CloudinaryImage = ({ name }) => {
  const url = getCloudinaryImageUrl({ name })
  console.log(url)
  return (
    <LazyLoadImage
      style={{
        marginBottom: "0",
        borderRadius: `5px`,
        marginRight: `1rem`,
        height: `100%`,
        maxWidth: `455px`,

        //@media (max-width: 720px) {
        // height: 100%;
        //}
      }}
      alt={name}
      src={url}
      effect="blur"
    />
  )
}

export default CloudinaryImage

//https://res.cloudinary.com/djdctouse/image/upload/v1616708424/portfolio/IMG_1.jpg

// w_${size},h_${size}
