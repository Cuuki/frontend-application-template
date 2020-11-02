import React, {useState} from 'react';
import Form from '../UI/Form';
import FormField from '../UI/FormField';
import FormLabel from '../UI/FormLabel';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import TextArea from '../UI/TextArea';
import {SignUpAddressGroupStyled} from './SignUp.styles';

const formFields = {
  firstname: {},
  lastname: {},
  nickname: {},
  email: {},
  password: {},
  repeatPassword: {},
  street: {},
  apartment: {},
  zip: {},
  city: {},
  additionalInformation: {},
};
const nameMinLength = 2;
const addressMinLength = 4;
const zipLength = 5;
const emailPattern = '\\S+@\\S+\\.\\S+';
const passwordMinLength = 6;
const passwordPattern = '\\d{2,}';

const SignUp = () => {
  const [isAddressHidden, setAddressVisibility] = useState(false);

  return (
    <Form
      handleSubmit={event => {
        event.preventDefault();
        console.log('form submitted');
      }}
    >
      <FormField
        labelComponent={<FormLabel describes="firstname">Firstname</FormLabel>}
      >
        <TextInput
          id="firstname"
          minLength={nameMinLength}
          isRequired={true}
          handleChange={event => console.log(event)}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="lastname">Lastname</FormLabel>}
      >
        <TextInput
          id="lastname"
          minLength={nameMinLength}
          isRequired={true}
          handleChange={event => console.log(event)}
        />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="nickname">Nickname</FormLabel>}
      >
        <TextInput id="nickname" handleChange={event => console.log(event)} />
      </FormField>

      <FormField
        labelComponent={<FormLabel describes="email">Email</FormLabel>}
      >
        <TextInput
          id="email"
          type="email"
          isRequired={true}
          pattern={emailPattern}
          handleChange={event => console.log(event)}
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
          handleChange={event => console.log(event)}
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
          handleChange={event => console.log(event)}
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
            handleChange={event => console.log(event)}
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
            handleChange={event => console.log(event)}
          />
        </FormField>

        <FormField labelComponent={<FormLabel describes="zip">ZIP</FormLabel>}>
          <TextInput
            id="zip"
            minLength={zipLength}
            maxLength={zipLength}
            isRequired={true}
            type="number"
            handleChange={event => console.log(event)}
          />
        </FormField>

        <FormField
          labelComponent={<FormLabel describes="city">City</FormLabel>}
        >
          <TextInput
            id="city"
            isRequired={true}
            minLength={addressMinLength}
            handleChange={event => console.log(event)}
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
          handleChange={event => console.log(event)}
        />
      </FormField>

      <Button type="submit">Sign up now!</Button>
    </Form>
  );
};

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
