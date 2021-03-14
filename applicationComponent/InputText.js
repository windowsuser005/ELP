import React from 'react';

export default class InputText extends React.Component {

    constructor(props) {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.input.onChange(value);
    }

    render() {
        let { input, label, type, meta: { touched, error, warning } } = this.props;

        return (<div class="form-group col-sm-3">
            <label >{label}</label>
            <input value={input.value} onChange={this.onChange} className="form-control" type={type} />
            <div>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
        </div>)
    }
}

