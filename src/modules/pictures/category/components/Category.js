import React, {Component} from "react";
import { connect } from "react-redux";
import { Segment, Input, Loader, Header } from "semantic-ui-react";

import CategoryList from './CategoryList'
//import actions
import { getCategoriesAction, setCategorySearchTextAction } from '../actions/categoryAction'


class Category extends Component {

    getPicCategories = () => {
        console.log("get categories");
        const { getCategories } = this.props;
        getCategories();
    }

    componentDidMount() {
        const { categories } = this.props;
        
        if (categories.length === 0) {
          this.getPicCategories();
        }
    }
    

    filterCategory = (categories, searchText) => {
        const text = searchText.toLowerCase();
        return categories.filter(
            category => category.toLowerCase().includes(text)
        );
    } 

    render() {

        const {
            categories,
            //error,
            loading,
            categorySearchText,
            setCategorySearchText
        } = this.props;

        const filteredCategories = this.filterCategory(categories, categorySearchText);
        

        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
            <Segment size='large' style={{width: 600}}>
                <Header as='h2' color='teal' textAlign='center'>
                     CATEGORIES
                </Header>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                <Input
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search...'
                    onChange={e => setCategorySearchText(e.target.value)}
                    value={categorySearchText} 
                />
                </div>
                {loading ? (
                    <Segment basic style={{ paddingTop: "10em" }}>
                        <Loader active> Fetching Picture Category </Loader>
                    </Segment>
                ) : (
                    <CategoryList categories={filteredCategories} searchText={categorySearchText} />    
               )}
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        categorySearchText: state.categorySearchText,
        //error: state.error.categories,
        //loading: state.loading.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: categories => {
            dispatch( getCategoriesAction() );
        },
        setCategorySearchText: text => {
            dispatch( setCategorySearchTextAction(text) );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)