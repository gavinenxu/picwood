import React from 'react'
import { Button, Segment, Image, Header } from "semantic-ui-react";


export const FavoritesList = ({ favorites, removeFromFav }) =>
    favorites.map(picture => {
        const {url, title} = picture;
        return (
            <Segment key={url} compact style={{margin: 60}}>
                <Image src={ picture.url } alt="" style={{boxShadow: '4px 4px 5px #888888'}}/>
                <Header as='h3' content={ title} textAlign='center' color='teal'/>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                <Button primary onClick={() => removeFromFav(picture)}>
                    Remove
                </Button>
                </div>
            </Segment>            
        )
    });