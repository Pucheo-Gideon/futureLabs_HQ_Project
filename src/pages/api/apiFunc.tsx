import axios from "axios"

export const commentApi = async (comment:object) => await axios("https://articletest.pythonanywhere.com/doc/")
.then(response => {
    return response.data
}).catch(error => {
    // throw new Error("message:", error)
    console.log(error)
})  