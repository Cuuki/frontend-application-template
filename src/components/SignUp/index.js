import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  addField,
  clearFields,
  setFieldValidity,
} from '../../redux/signUp/reducer/signUp.reducer';
import {signUpSelector} from '../../redux/signUp/selectors';
import SignUp from './SignUp';

const mapDispatchToProps = dispatch => ({
  addField: field => dispatch(addField(field)),
  clearFields: () => dispatch(clearFields()),
  setFieldValidity: field => dispatch(setFieldValidity(field)),
});

const mapStateToProps = createStructuredSelector({
  fieldValues: signUpSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
