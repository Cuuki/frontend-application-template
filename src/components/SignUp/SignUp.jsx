import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  addField,
  removeField,
  setFieldValidity,
} from '../../redux/signUp/reducer/signUp.reducer';
import {signUpSelector} from '../../redux/signUp/selectors';
import {SignUpAddressGroupStyled} from './SignUp.styles';
import Form from '../UI/Form';
import FormField from '../UI/FormField';
import FormLabel from '../UI/FormLabel';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import TextArea from '../UI/TextArea';

const nameMinLength = 2;
const addressMinLength = 4;
const zipLength = 5;
const zipPattern = '\\d{5}';
const emailPattern = '\\S+@\\S+\\.\\S+';
const passwordMinLength = 6;
const passwordPattern = '^(?=.*[a-z])(?=(?:.*[0-9]){2}).*';

const SignUp = ({fieldValues, addField, removeField, setFieldValidity}) => {
  const [isAddressHidden, setAddressVisibility] = useState(false);
  const addFieldCallback = useCallback(
    (name, customValidity = true) => event => {
      const {target} = event;

      addField({
        name,
        value: target.value,
        isValid: target?.validity?.valid && customValidity,
      });
    },
    [addField],
  );
  const getErrors = useCallback(
    () =>
      Object.keys(fieldValues).filter(
        fieldKey => !fieldValues[fieldKey]?.isValid,
      ),
    [fieldValues],
  );

  return (
    <Form
      handleSubmit={event => {
        event.preventDefault();
        alert('Your data was sent to the server.');
      }}
    >
      <FormField
        labelComponent={<FormLabel describes="firstname">Firstname</FormLabel>}
      >
        <TextInput
          id="firstname"
          minLength={nameMinLength}
          isRequired={true}
          initialValue={fieldValues.firstname?.value || ''}
          isValid={!!fieldValues.firstname?.isValid}
          handleChange={addFieldCallback('firstname')}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="lastname">Lastname</FormLabel>}
      >
        <TextInput
          id="lastname"
          minLength={nameMinLength}
          isRequired={true}
          initialValue={fieldValues.lastname?.value || ''}
          isValid={!!fieldValues.lastname?.isValid}
          handleChange={addFieldCallback('lastname')}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="nickname">Nickname</FormLabel>}
      >
        <TextInput
          id="nickname"
          initialValue={fieldValues.nickname?.value || ''}
          isValid={!!fieldValues.nickname?.isValid}
          handleChange={addFieldCallback('nickname')}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="email">Email</FormLabel>}
      >
        <TextInput
          id="email"
          type="email"
          isRequired={true}
          pattern={emailPattern}
          initialValue={fieldValues.email?.value || ''}
          isValid={!!fieldValues.email?.isValid}
          handleChange={addFieldCallback('email')}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="password">Password</FormLabel>}
      >
        <TextInput
          id="password"
          type="password"
          minLength={passwordMinLength}
          pattern={passwordPattern}
          isRequired={true}
          initialValue={fieldValues.password?.value || ''}
          isValid={!!fieldValues.password?.isValid}
          handleChange={event => {
            const hasPasswordMatch =
              event.target.value === fieldValues.repeatPassword?.value;

            setFieldValidity({
              name: 'repeatPassword',
              isValid: hasPasswordMatch,
            });
            addFieldCallback('password', hasPasswordMatch)(event);
          }}
        />
      </FormField>

      <FormField
        labelComponent={
          <FormLabel describes="repeatPassword">Repeat password</FormLabel>
        }
      >
        <TextInput
          id="repeatPassword"
          type="password"
          minLength={passwordMinLength}
          pattern={passwordPattern}
          isRequired={true}
          initialValue={fieldValues.repeatPassword?.value || ''}
          isValid={!!fieldValues.repeatPassword?.isValid}
          handleChange={event => {
            const hasPasswordMatch =
              event.target.value === fieldValues.password?.value;

            setFieldValidity({name: 'password', isValid: hasPasswordMatch});
            addFieldCallback('repeatPassword', hasPasswordMatch)(event);
          }}
        />
      </FormField>

      <CheckBox
        id="checkboxField"
        label="Show address"
        isChecked={!isAddressHidden}
        handleChange={() =>
          setAddressVisibility(previousVisibility => !previousVisibility)
        }
      />

      <SignUpAddressGroupStyled hidden={isAddressHidden}>
        <FormField
          labelComponent={<FormLabel describes="street">Street</FormLabel>}
        >
          <TextInput
            id="street"
            minLength={addressMinLength}
            isRequired={true}
            initialValue={fieldValues.street?.value || ''}
            isValid={!!fieldValues.street?.isValid}
            handleChange={addFieldCallback('street')}
          />
        </FormField>

        <FormField
          labelComponent={
            <FormLabel describes="apartment">Apartment</FormLabel>
          }
        >
          <TextInput
            id="apartment"
            isRequired={true}
            initialValue={fieldValues.apartment?.value || ''}
            isValid={!!fieldValues.apartment?.isValid}
            handleChange={addFieldCallback('apartment')}
          />
        </FormField>

        <FormField labelComponent={<FormLabel describes="zip">ZIP</FormLabel>}>
          <TextInput
            id="zip"
            minLength={zipLength}
            maxLength={zipLength}
            pattern={zipPattern}
            isRequired={true}
            type="text"
            initialValue={fieldValues.zip?.value || ''}
            isValid={!!fieldValues.zip?.isValid}
            handleChange={addFieldCallback('zip')}
          />
        </FormField>

        <FormField
          labelComponent={<FormLabel describes="city">City</FormLabel>}
        >
          <TextInput
            id="city"
            isRequired={true}
            minLength={addressMinLength}
            initialValue={fieldValues.city?.value || ''}
            isValid={!!fieldValues.city?.isValid}
            handleChange={addFieldCallback('city')}
          />
        </FormField>
      </SignUpAddressGroupStyled>

      <FormField
        labelComponent={
          <FormLabel describes="additionalInformation">
            Additional information
          </FormLabel>
        }
      >
        <TextArea
          id="additionalInformation"
          initialValue={fieldValues.additionalInformation?.value || ''}
          isValid={!!fieldValues.additionalInformation?.isValid}
          handleChange={addFieldCallback('additionalInformation')}
        />
      </FormField>

      <Button type="submit" isDisabled={getErrors().length > 0}>
        Sign up now!
      </Button>
    </Form>
  );
};

SignUp.propTypes = {
  fieldValues: PropTypes.objectOf(
    PropTypes.exact({
      value: PropTypes.string,
      isValid: PropTypes.bool,
    }),
  ),
  addField: PropTypes.func.isRequired,
  removeField: PropTypes.func.isRequired,
  setFieldValidity: PropTypes.func.isRequired,
};
SignUp.defaultProps = {
  fieldValues: {},
};

const mapDispatchToProps = dispatch => ({
  addField: field => dispatch(addField(field)),
  removeField: fieldName => dispatch(removeField(fieldName)),
  setFieldValidity: field => dispatch(setFieldValidity(field)),
});

const mapStateToProps = createStructuredSelector({
  fieldValues: signUpSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
