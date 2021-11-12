import React from 'react'
import { useState, useEffect } from 'react'    
import { Card, CardGroup } from 'react-bootstrap'
import Loading from './Loading'

export default function Photo() {
    const [photos, setphotos] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchphotos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        console.log(data)
        setphotos(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchphotos()
    }, [])

    return (
        <div className="container-fluid">
              <div className="text-center text-primary" style={{fontSize:50}}>Display Photos</div>
                <div className="row m-2"> 
                    
           {loading ? <Loading /> : 
      
           photos.map(photo => ( 
           
            <CardGroup className="col-lg-3" key={photo.id}>
                <Card>
                    <Card.Body className="text-light bg-dark">
                        <Card.Img src={photo.thumbnailUrl} alt="user" />
                        <Card.Title className="text-success">{photo.title}</Card.Title>
                        <Card.Text>
                           {photo.url}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
     
              ))}
                     </div>
        </div>
    )
           
}
