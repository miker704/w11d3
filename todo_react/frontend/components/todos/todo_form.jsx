

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.todo;
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {

    }



    render() {
        return (

            <form onSubmit={console.log("hi")}>



            </form>


        )
    }


}
export default TodoForm;