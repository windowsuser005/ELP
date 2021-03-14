import { connect } from 'react-redux';
import tableScreen from '../component/tableScreen';

const mapStateToProps = state => {

    //let error = state.form && state.form.RegistrationForm && state.form.RegistrationForm.syncErrors
    //console.log("error--->", error);
    return {
        initialValues: state.register
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(tableScreen);