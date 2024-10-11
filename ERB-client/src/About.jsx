import { useRef } from "react"
import { postPhoto } from "./api"

const About = () => {
    const fileInputRef = useRef(null)
    const handleSubmitPhoto = async (e) => {
        e.preventDefault()
        const fileData = new FormData()
        const file = fileInputRef.current.files[0]
        fileData.append('image', file)

        await postPhoto(fileData)

    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmitPhoto(e)} encType="multipart/form-data">
                image: <input type="file" name="image" ref={fileInputRef} />
            <button type="submit">add photo</button>
            </form>
        </div>
    )
}

export default About