import React from 'react'

function Details({Listee, match}) {
    const x=Listee.find((elem) => (elem.id == match.params.id))
    return (
        <div>
            <h1>{x.title}</h1>
            <img src= {x.posterURL} alt={x.posterURL} />
            <h2>{x.description}</h2>
        </div>
    )
}

export default Details
