import React from "react";
import {
  Button,
  Segment,
  Image,
  Responsive,
  Icon,
  Header
} from "semantic-ui-react";

const ToggleFavButton = ({ isFav, toggleFav, ...props }) => (
    <Button floated="left" onClick={toggleFav} {...props}>
      <Icon name="favorite" />
      {isFav ? "Remove from favorites" : "Add to favorites"}
    </Button>
);

const FetchButton = ({ onClick, ...props }) => (
    <Button content='Another Picture' 
            floated="right" 
            onClick={onClick} 
            {...props}
    />
);
  

const Picture = ({picture, onClick, toggleFav}) => {
    //const { imageUrl, imageTitle } = picture;
    const isFav = picture.isFav;
    console.log(picture.isFav);
    return (
        <Segment>
            <Segment basic>
                <Image src={ picture.url } alt="" style={{boxShadow: '4px 4px 5px #888888'}}/>
                <Header as='h3' content={ picture.title} textAlign='center' color='teal'/>
            </Segment>
            <Responsive minWidth={768} as={Segment} basic clearing>
                <ToggleFavButton
                    isFav={isFav}
                    toggleFav={toggleFav}
                    //isLoading={loading}
                    size="large"
                />
                <FetchButton 
                    onClick={onClick} 
                    size="large"  
                    icon='right arrow'
                    labelPosition='right'
                />
            </Responsive> 
        </Segment>
    )
}

export default Picture