import { Component } from 'react';
import './Feed.css' ;
import SinglePost from '../SinglePost/SinglePost';
import SingleGroup from '../SingleGroup/SingleGroup';
import { MyContext } from '../MyContext' ;
import { Post } from '../../models/Post';
import { Group } from '../../models/Group';
import { hideLoader, showLoader } from '../AppLoader/AppLoader';
var FontAwesome = require('react-fontawesome');

class Feed extends Component{
    constructor(props:any){
        super(props) ;
        showLoader() ;
    }
    componentDidMount(){
        setTimeout(() => hideLoader(), 1500) ;
    }

    render(){
        return(
            <div className="wrapper flex-container">
                
                <div className="flex-item">
                    <div>
                        <div className="panel">
                            <div className="user-header disabled">
                                <div className="pdp-container small">
                                    <img src="assets/images/pdp/1.jpg" alt="Pdp" />
                                </div>
                                <span className="side-info name">Kiady Ralanto</span>
                            </div>
                            <h4 className="grey editable" onClick={() => {
                                this.context.newPostStatusHandler(true) ;
                            }}>Quelle est votre question?</h4>
                        </div>
                        { 
                            this.context.posts.slice(0).reverse().map((item:Post) => 
                                <SinglePost key={item.id} currentPost={item} maximize={false} />
                            )
                        }
                    </div>
                </div>
                
            </div>
        ) ;
    }
}

Feed.contextType = MyContext ;

export default Feed ;