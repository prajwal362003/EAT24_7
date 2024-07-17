import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    // Create State over here
    // older version to use state
    // Now it is used as
    // const [count] = useState(0);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // API Calls are done in useEffect Hook in functional based components
  // Similarly...
  componentDidMount() {
    // API Calls here in class based components
    //  This method is called when the component is first added
    console.log("componentDidMount");
  }
  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <p>This is a class based component</p>
        <h2>Name:{this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            // We do not mutate state directly
            // i.e never do this.state.something
            this.setState({
              count: 2,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ProfileClass;
