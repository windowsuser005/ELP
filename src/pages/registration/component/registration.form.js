import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputText from '../../../../applicationComponent/InputText';
import Form from '../../../../applicationComponent/Form';
import Submit from '../../../../applicationComponent/SubmitButton';
import { Required } from '../../../../applicationComponent/ErrorMessage';
import { InterStialHandler } from '../../../../applicationComponent/InterstialHandler';



class Registration extends React.Component {

    componentDidMount = async () => {
        await InterStialHandler(() => {
            return this.props.getRegistration();
        });

    }

    onSubmit = async (values) => {
        await InterStialHandler(() => {
            return this.props.submitRegistration();
        });
    }


    handleClick=()=>{
        alert(1);
    }

    render() {
        let { handleSubmit } = this.props;
        return (
            <Form name="RegistrationForm" >
                <Field
                    onClick={()=> this.handleClick() }
                    component={InputText}
                    name="inputName"
                    type="text"
                    label="Hi I am Label"
                    validate={[Required]}
                />
                <Submit onClick={handleSubmit(this.onSubmit)} name={"submit"} formName={"RegistrationForm"} />
            </Form>
        );
    }
}

const RegistrationForm = reduxForm({
    form: 'RegistrationForm',
    enableReinitialize: true
})(Registration);


export default RegistrationForm;





