import React, {Component} from "react";
import { Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

//import action
import { removeFromFav } from '../actions/favoritesAction'

import { FavoritesList } from './favoritesList'

class Favorites extends Component {
    
    removeFromFav = picture => {
        const {removeFromFav} = this.props;
        removeFromFav(picture);
    }

    render() {
        const { favorites } = this.props;
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
            <Segment size='large' style={{width: 700}}>
                <Header as='h2' color='teal' textAlign="center">
                    FAVORITES
                </Header>
                <FavoritesList favorites={favorites} removeFromFav={this.removeFromFav}/>
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      favorites: state.favorites
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      removeFromFav: picture => {
        dispatch(removeFromFav(picture));
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Favorites)