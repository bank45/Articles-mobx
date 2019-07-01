import * as React from 'react';
import NewNews from './new-news';
import InteresNews from './interes-news'
//import './articles.css'

class Articles extends React.Component {
    render(){
        return (
            <div className="content">
                <InteresNews />
                <NewNews />
            </div>
        )
    }
}

export default Articles;
