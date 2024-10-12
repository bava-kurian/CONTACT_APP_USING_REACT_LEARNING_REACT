import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui container">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Number</label>
                        <input type="text" name="Number" placeholder="Number"/>
                    </div>
                    <input type="button" value="Add" className="ui button" />
                </form>
            </div>
        )
    }
}

export default AddContact