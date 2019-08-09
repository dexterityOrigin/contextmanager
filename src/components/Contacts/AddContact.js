import React, { Component } from 'react'
import {Consumer} from '../../Context';
import TextInputGroup from '../Layout/TextInputGroup';
import axios from 'axios';


class AddContact extends Component {
    state ={
        name:'',
        email:'',
        phone:'',
        errors:{}

    };

    onSubmit= async (dispatch,e)=>{ //onsubmit method
        e.preventDefault();
        console.log(this.state);

        const {name,email,phone} = this.state;

        const newContact={
            
            name,
            email,
            phone
        };

        const res = await axios.post('http://jsonplaceholder.typicode.com/users',newContact);
        dispatch({type:'ADD_CONTACT', payload:res.data})
            
         //check errors
       if(name===''){
        this.setState({errors:{
            name:'Name is required'
        }});
        return;
    }
     if(email ===''){
         this.setState({errors:{
             email:'Email is required'
         }});
         return;
     }
     if(phone ===''){
         this.setState({errors:{
             phone:'Phone is required'
         }});
         return;
     }


       
        this.setState({ //clear state
            name:'',
            email:'',
            phone:'',
            errors:{}
        });
        this.props.history.push('/'); //redirect
    };

    onChange =(e)=> this.setState({[e.target.name]:
        e.target.value});//getter

    render() {
        
        const {name,email,phone,errors}=this.state;

       
        return(
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return (
                        
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                        <TextInputGroup 
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                        />
                                       
                                         <TextInputGroup 
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                        />
                                         <TextInputGroup 
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                        />

                                        
                                        <input type="submit"
                                        value="Add Contact"
                                        className="btn btn-success btn-block"></input>

                                        
                                    </form>
                                </div>
                        </div>
                    )
                }}
            </Consumer>
        )


        
    }
}

export default  AddContact;