import { connect } from 'react-redux';
import RegistrationForm from '../component/registration.form';
import { submitRegistration, getRegistration } from '../../../redux/actions/registration.action';


const mapStateToProps = state => {

    //let error = state.form && state.form.RegistrationForm && state.form.RegistrationForm.syncErrors
    //console.log("error--->", error);
    return {
        initialValues: state.register
    }
}
const mapDispatchToProps = {
    submitRegistration: () => submitRegistration(),
    getRegistration: () => getRegistration()
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);