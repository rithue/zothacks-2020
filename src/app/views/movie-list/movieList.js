import React, {Component} from 'react'

//generates list of movieListItem components

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //todos is movies
            todos: []
        }
    }
    componentDidMount() {
        //this will be the movie controller
        //findAll method is filter
        controller.findAll(this.done);
    }

    done = (todos) => {
        //this is returned callback (list of key value pairs with movie info)
        this.setState({ todos: todos });
    }

    render() {
        //this should display the given info
        return (
            <div className="user-list">
                {/*users is movies*/}
                {(users || []).map(function (user, index) {
                    return <UserCard user={user} key={index} number={index}/>;
                })}
            </div>
        )
    }
}