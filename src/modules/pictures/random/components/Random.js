import React, {Component} from "react";
import { connect } from "react-redux";
import { Segment, Header } from "semantic-ui-react";

//import actions
import { getRandomPictureWithCategory, 
         getRandomPicture  
        } from '../actions/randomAction'
        
import { addToFav, 
        removeFromFav
        } from '../../favorites/actions/favoritesAction'

import Picture from '../../components/picture'

class Random extends Component {

    getRandomPicture = () => {
        const { category, getPictureWithCategory, getPicture } = this.props;
        if(category) {
            getPictureWithCategory(category);
        } else {
            getPicture();
        }
    }

    toggleFav = () => {
        const { picture, 
               addToFav,            /*pass function here to bind with Random state */
             removeFromFav 
        } = this.props;
    
        //console.log("toggle: " + picture.isFav);

        if (picture.isFav) {
          removeFromFav(picture);
        } else {
          addToFav(picture);
        }
    } 

    render() {

        const { category, picture } = this.props;

        const title = category ? category.toUpperCase() : 'RANDOM PICTURE';

        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
            <Segment size='large' style={{width: 700}}>
                <Header as='h2' color='teal' textAlign="center">
                    {title}
                </Header>
                <Picture
                    picture={picture}
                    onClick={this.getRandomPicture}
                    toggleFav={this.toggleFav}
                />
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      picture: state.pictureReducer,
      //loading: state.loading.dog,
      //error: state.error.dog
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getPictureWithCategory: (category) => {
        dispatch( getRandomPictureWithCategory(category) );
      },
      getPicture: () => {
        dispatch(getRandomPicture());
      },
      addToFav: picture => {
        dispatch(addToFav(picture));
      },
      removeFromFav: picture => {
        dispatch(removeFromFav(picture));
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Random)