import { Component } from "react";

class ClassTimer extends Component {
    state = { count: 1 }
    constructor(props) {
        super(props)
        console.log("Constructor")

    }
    componentDidMount() {
        console.log("Mounted..")
        setInterval(this.changeHandler, 800)
    }
    changeHandler = () => {
        this.setState({ count: this.state.count + 1 });

    }
    render = () => {
        return (
            <>
                Count:{this.state.count}
            </>
        )
    }
}
export default ClassTimer;
