import { createContext, useContext, useState } from 'react'

const tempUrl = "https://www.youtube.com/watch?v=07d2dXHYb9"
const VideoContext = createContext()

export const VideoProvider = ({ children }) => {
    const [videoUrl, setVideoUrl] = useState(tempUrl)
    const values = { videoUrl, setVideoUrl }

    return <VideoContext.Provider value={values}>{ children }</VideoContext.Provider>
}

export const useVideoUrl = () => useContext(VideoContext)