import React from 'react'

export default function Details(props) {
    const { details } = props
    return (
        <div>
            {details.map((char, idx) => {
                return (
                    <div className="container" key={idx}>
                        <h2>{char.name}</h2>
                        <p><strong>Born:</strong>{char.birth_year}</p>
                        <p><strong>Gender:</strong>{char.gender}</p>
                        <p><strong>Homeworld:</strong>{char.homeworld.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
