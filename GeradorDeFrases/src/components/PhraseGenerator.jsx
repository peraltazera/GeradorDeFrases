import Phrase from "./Phrase"
import axios from "axios"
import { useState } from "react"

function PhraseGenerator() {
    const [phrase, setPhrase] = useState({ content: "", author:"" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getRandomPhrase = async () => {
        const response = await axios.get("https://api.api-ninjas.com/v2/randomquotes", {
        headers:{
            "X-Api-Key": "3tK5o02hLFMGM7BIM8vhow==5kbnHrcXBbJZVgsd"
        }
        })
        console.log(response.data)
    }

    if(loading){
        return(
            <div className="min-h-20">
                <p className="text-lg">Loading...</p>
            </div>
        )
    }

    if(error){
        return(
            <div className="min-h-20">
                <p className="text-lg">{error}</p>
            </div>
        )
    }

    return (
        <div className="min-h-20 flex flex-col gap-4 items-start">
                <Phrase text="Meu texto" author="Meu author"/>
                <button className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white"
                onClick={getRandomPhrase}>
                    Nova Frase
                </button>
        </div>
    )
}

export default PhraseGenerator