import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {SignUpAddressGroupStyled} from './SignUp.styles';
import Form from '../UI/Form';
import FormField from '../UI/FormField';
import FormLabel from '../UI/FormLabel';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import TextArea from '../UI/TextArea';

const NAME_MIN_LENGTH = 2;
const ADDRESS_MIN_LENGTH = 4;
const ZIP_LENGTH = 5;
const ZIP_PATTERN = '\\d{5}';
const EMAIL_PATTERN = '\\S+@\\S+\\.\\S+';
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_PATTERN = '^(?=.*[a-z])(?=(?:.*[0-9]){2}).*';

const SignUp = ({fieldValues, addField, clearFields, setFieldValidity}) => {
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
        clearFields();
        alert('Your data was sent to the server.');
      }}
    >
      <FormField
        labelComponent={
          <FormLabel isRequired={true} describes="firstname">
            Firstname
          </FormLabel>
        }
        isValid={fieldValues.firstname?.isValid}
        message={
          fieldValues.firstname?.isValid === false
            ? `Firstname should be at least ${NAME_MIN_LENGTH} characters long.`
            : ''
        }
      >
        <TextInput
          id="firstname"
          minLength={NAME_MIN_LENGTH}
          isRequired={true}
          initialValue={fieldValues.firstname?.value || ''}
          isValid={fieldValues.firstname?.isValid}
          handleChange={addFieldCallback('firstname')}
        />
      </FormField>

      <FormField
        labelComponent={
          <FormLabel isRequired={true} describes="lastname">
            Lastname
          </FormLabel>
        }
        isValid={fieldValues.lastname?.isValid}
        message={
          fieldValues.lastname?.isValid === false
            ? `Lastname should be at least ${NAME_MIN_LENGTH} characters long.`
            : ''
        }
      >
        <TextInput
          id="lastname"
          minLength={NAME_MIN_LENGTH}
          isRequired={true}
          initialValue={fieldValues.lastname?.value || ''}
          isValid={fieldValues.lastname?.isValid}
          handleChange={addFieldCallback('lastname')}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="nickname">Nickname</FormLabel>}
      >
        <TextInput
          id="nickname"
          initialValue={fieldValues.nickname?.value || ''}
          isValid={fieldValues.nickname?.isValid}
          handleChange={addFieldCallback('nickname')}
        />
      </FormField>

      <FormField
        labelComponent={
          <FormLabel isRequired={true} describes="email">
            Email
          </FormLabel>
        }
        isValid={fieldValues.email?.isValid}
        message={
          fieldValues.email?.isValid === false
            ? `Field needs to be a valid email address (i.E. test@example.com).`
            : ''
        }
      >
        <TextInput
          id="email"
          type="email"
          isRequired={true}
          pattern={EMAIL_PATTERN}
          initialValue={fieldValues.email?.value || ''}
          isValid={fieldValues.email?.isValid}
          handleChange={addFieldCallback('email')}
        />
      </FormField>

      <FormField
        labelComponent={
          <FormLabel isRequired={true} describes="password">
            Password
          </FormLabel>
        }
        isValid={fieldValues.password?.isValid}
        message={
          fieldValues.password?.isValid === false
            ? `Password should be at least ${PASSWORD_MIN_LENGTH} characters long, have at least two digits and match the "Repeat Password" field.`
            : ''
        }
      >
        <TextInput
          id="password"
          type="password"
          minLength={PASSWORD_MIN_LENGTH}
          pattern={PASSWORD_PATTERN}
          isRequired={true}
          initialValue={fieldValues.password?.value || ''}
          isValid={fieldValues.password?.isValid}
          handleChange={event => {
            const {target} = event;
            const hasPasswordMatch =
              target.value === fieldValues.repeatPassword?.value;

            setFieldValidity({
              name: 'repeatPassword',
              isValid: hasPasswordMatch && target?.validity?.valid,
            });
            addFieldCallback('password', hasPasswordMatch)(event);
          }}
        />
      </FormField>

      <FormField
        labelComponent={
          <FormLabel isRequired={true} describes="repeatPassword">
            Repeat password
          </FormLabel>
        }
        isValid={fieldValues.repeatPassword?.isValid}
        message={
          fieldValues.repeatPassword?.isValid === false
            ? `Should be at least ${PASSWORD_MIN_LENGTH} characters long, have at least two digits and match the "Password" field.`
            : ''
        }
      >
        <TextInput
          id="repeatPassword"
          type="password"
          minLength={PASSWORD_MIN_LENGTH}
          pattern={PASSWORD_PATTERN}
          isRequired={true}
          initialValue={fieldValues.repeatPassword?.value || ''}
          isValid={fieldValues.repeatPassword?.isValid}
          handleChange={event => {
            const {target} = event;
            const hasPasswordMatch =
              target.value === fieldValues.password?.value;

            setFieldValidity({
              name: 'password',
              isValid: hasPasswordMatch && target?.validity?.valid,
            });
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
          labelComponent={
            <FormLabel isRequired={true} describes="street">
              Street
            </FormLabel>
          }
          isValid={fieldValues.street?.isValid}
          message={
            fieldValues.street?.isValid === false
              ? `Street should be at least ${ADDRESS_MIN_LENGTH} characters long.`
              : ''
          }
        >
          <TextInput
            id="street"
            minLength={ADDRESS_MIN_LENGTH}
            isRequired={true}
            initialValue={fieldValues.street?.value || ''}
            isValid={fieldValues.street?.isValid}
            handleChange={addFieldCallback('street')}
          />
        </FormField>

        <FormField
          labelComponent={
            <FormLabel describes="apartment" isRequired={true}>
              Apartment
            </FormLabel>
          }
          isValid={fieldValues.apartment?.isValid}
          message={
            fieldValues.apartment?.isValid === false
              ? `Apartment is required. Please fill in this field with your apartment number.`
              : ''
          }
        >
          <TextInput
            id="apartment"
            isRequired={true}
            initialValue={fieldValues.apartment?.value || ''}
            isValid={fieldValues.apartment?.isValid}
            handleChange={addFieldCallback('apartment')}
          />
        </FormField>

        <FormField
          labelComponent={
            <FormLabel describes="zip" isRequired={true}>
              ZIP
            </FormLabel>
          }
          isValid={fieldValues.zip?.isValid}
          message={
            fieldValues.zip?.isValid === false
              ? `ZIP code has to be ${ZIP_LENGTH} digits long.`
              : ''
          }
        >
          <TextInput
            id="zip"
            minLength={ZIP_LENGTH}
            maxLength={ZIP_LENGTH}
            pattern={ZIP_PATTERN}
            isRequired={true}
            type="text"
            initialValue={fieldValues.zip?.value || ''}
            isValid={fieldValues.zip?.isValid}
            handleChange={addFieldCallback('zip')}
          />
        </FormField>

        <FormField
          labelComponent={
            <FormLabel describes="city" isRequired={true}>
              City
            </FormLabel>
          }
          isValid={fieldValues.city?.isValid}
          message={
            fieldValues.city?.isValid === false
              ? `City should be at least ${ADDRESS_MIN_LENGTH} characters long.`
              : ''
          }
        >
          <TextInput
            id="city"
            isRequired={true}
            minLength={ADDRESS_MIN_LENGTH}
            initialValue={fieldValues.city?.value || ''}
            isValid={fieldValues.city?.isValid}
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
          isValid={fieldValues.additionalInformation?.isValid}
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
  clearFields: PropTypes.func.isRequired,
  setFieldValidity: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  fieldValues: {},
};

export default SignUp;
