import React from "react"
import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID afd459254a1e32f8b5bccbc6132aed303e1d3effad51b620cfe707bafa6a8630'
    }
});
