import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs'

export const useFeatchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImage = await getGifs(category);
      setImages(newImage);
      setIsLoading(false);
    }
 
    useEffect(() => {
      getImages(category);
    }, [])

    return{
        images,
        isLoading
    }
}