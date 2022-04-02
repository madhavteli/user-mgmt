import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = props => {

    const [username, setUsername]   = useState('');
    const [age, setAge]             = useState('');
    const [error, setError]         = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

   const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const addUserSubmitHandler = event => {
        event.preventDefault();
        if(0 === username.trim().length || 0 === age.trim().length){
            setError({
                modalTitle: 'Invalid Input',
                errorMessage: 'User name and Age Required'
            })
            return;
        }
        if(+age < 1) {
            setError({
                modalTitle: 'Invalid Age',
                errorMessage: 'Age should be greater than 1'
            })
            return;
        }
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal 
                            modalTitle={error.modalTitle} 
                            errorMessage={error.errorMessage} 
                            onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserSubmitHandler}>
                    <label htmlFor="username">User name</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={username} 
                        onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;