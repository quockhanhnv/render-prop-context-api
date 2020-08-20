import React, { Component } from 'react';

export default class Counter extends Component {
   constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
   }

   componentDidMount() {
       this.timerId = setInterval(() => {
           this.setState({
               count: this.state.count + 1
           })
       }, 1000)
   }

   componentWillMount() {
       clearInterval(this.timerId);
   }

   render() {
    //    vesion 1
    //    return <div>
    //        { this.props.render(this.state.count) }
    //    </div>

    //    vesion 2
    //     return <div>
    //        { this.props.children(this.state.count) }
    //     </div>
        return <div>
                    { this.props.children(this.state) }
                </div>
   }
}
