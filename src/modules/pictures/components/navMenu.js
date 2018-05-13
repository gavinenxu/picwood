import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {

    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.context.router.push('/pictures/'+name);
    }
  
    render() {
      const { activeItem } = this.state
      const props = this.props
  
      return (
        <Menu {...props}>
          <Menu.Item>
            <img src='/logo.jpg' alt='logo'/>
          </Menu.Item>
  
          <Menu.Item
            as={Link}
            to='/pictures/category'
            name='category'
            active={activeItem === 'category'}
            onClick={this.handleItemClick}
          >
            Category
          </Menu.Item>
  
          <Menu.Item
            as={Link}
            to='/pictures/random'
            name='random'
            active={activeItem === 'random'}
            onClick={this.handleItemClick}
          >
            Random
          </Menu.Item>
  
          <Menu.Item
            as={Link}
            to='/pictures/favorites'
            name='favorites'
            active={activeItem === 'favorites'}
            onClick={this.handleItemClick}
          >
            Favorites
          </Menu.Item>
        </Menu>
      )
    }
}

