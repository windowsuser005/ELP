import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Test from './test';



export default class Template extends React.Component {

    constructor(props) {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.input.onChange(value);
    }

    // handleClick=()=>{
    //     alert(1);
    // }

    render() {
        let { children, header, footer } = this.props;
        return (<div className="form-group" onClick={ this.handleClick }>
            <Test><Test.Header><div>testing</div></Test.Header></Test>
            {header && <Header headerName={"Header Part"} />}
            <div>{children}</div>
            {footer && <Footer footerName={"Footer Part"} />}
        </div>)
    }
}

