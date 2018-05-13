import React from 'react'
import { List, Segment, Transition, Image } from "semantic-ui-react";

const CategoryList = ({categories, searchText}) => {

    return (
        <Transition.Group
            as={List}
            duration={200}
            animation="fade down"
            divided
            selection
            verticalAlign="middle"
        >
            {categories.length === 0 
            ? (
                <Segment basic>Category Not Found...</Segment>
            ) 
            : (
                categories.map(category => {
                    var key = category.split(' ')[0].toLowerCase();
                    return (
                        <List.Item key={key} as='a' href={`/pictures/random/${key}`}>
                            <Image avatar src={`/${key}.png`}/>
                            <List.Content>
                                <List.Header>{category}</List.Header>
                            </List.Content>
                        </List.Item>
                    );
                })
            )}
        </Transition.Group>
    )
}

export default CategoryList