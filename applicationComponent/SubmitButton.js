import React from 'react';
import { connect } from 'react-redux';
import {
    getFormValues,
    getFormInitialValues,
    getFormSyncErrors,
    getFormMeta,
    getFormAsyncErrors,
    getFormSyncWarnings,
    getFormSubmitErrors,
    getFormError,
    getFormNames,
    isDirty,
    isPristine,
    isValid,
    isInvalid,
    isSubmitting,
    hasSubmitSucceeded,
    hasSubmitFailed
} from 'redux-form'
import { FormName } from 'redux-form'

class Submit extends React.Component {


    render() {
        let { name, onClick, formName, state } = this.props;

        //console.log("------>", getFormSyncErrors(formName)(state));

        return (<button onClick={onClick} type="button" className="btn btn-primary mr-2">{name}</button>)
    }
}
const mapStateToProps = state => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);

