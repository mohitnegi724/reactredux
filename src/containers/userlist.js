import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectUser } from '../actions';

class Userlist extends Component {
    createListItem = ()=>{
        return this.props.users.map(user=>{
            return(
                    <li key={user.id} onClick={()=>{this.props.selectUser(user)}}> {user.userId}</li>
            )
        });
    }
    render(){
        return(
            <ul>
                {this.createListItem()}
            </ul>
        );
    };
};
function mapStateToProps(state) {
    return {
        users: state.users
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser})
}
export default connect(mapStateToProps, matchDispatchToProps)(Userlist);