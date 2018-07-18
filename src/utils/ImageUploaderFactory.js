import axios from 'axios'

function ImageUploaderFactory (uploadURL, fieldName) {
    return async (file) => {
        let form = new FormData()
        form.append(fieldName, file, file.name)

        return axios.post(uploadURL, form)
    }
}

export { ImageUploaderFactory }
