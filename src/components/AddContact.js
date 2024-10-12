import React from "react";
class AddContact extends React.Component{

    state={
        name:'',
        email:'',
        };
    render(){
        return(
            <div className="ui container main">
                <br />
                <br />
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="text" name="Number" placeholder="Number" 
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>
                    <input type="button" value="Add" className="ui button blue" />
                </form>
            </div>
        )
    }
}

export default AddContact