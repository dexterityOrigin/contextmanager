import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {Consumer} from '../../Context';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
    state={
        showContactInfo: false
    };
    onDeleteClick= async (id,dispatch)=>{
       
        await  axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
       
        dispatch({type:'DELETE_CONTACT',payload:id})
    };
    
    render() {
        const {id,name,email,phone} = this.props.contact;
        const{showContactInfo}=this.state;


        return (

            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                        <h4>
                        {name}{''}
                            <i onClick={()=> this.setState({showContactInfo:!this.state.showContactInfo})}
                            //toggles 
                            className="fas fa-sort-down"
                            style={{cursor: 'pointer'}}
                            />
                            <i
                                className="fas fa-times" 
                                style={{
                                    cursor:'pointer',float:'right',color:'red'
                                }}
                                onClick={this.onDeleteClick.bind(
                                    this,id,dispatch
                                )}
                            />
                            <Link to={`contact/edit/${id}`}>
                                <i className="fas fa-pencil-alt"
                                style={{
                                    cursor:'pointer',
                                    float:'right',
                                    color:'black',
                                    marginRight:'1rem'
                                }}
                                />
                            </Link>
                          </h4>
                        {showContactInfo ? (
                            <ul>
                            <li className="list-group-item">Email:{email}</li>
                            <li className="list-group-item">Phone :{phone}</li>
                        </ul>
                        ):null}
                        
                    </div>
                    )
                }}
            </Consumer>
            
           
        );
    }
}
Contact.propTypes = {
    contact: Proptypes.object.isRequired,
    
   
}
export default Contact;
