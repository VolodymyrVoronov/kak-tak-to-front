import styled, { css } from "styled-components";

import { colors } from "../../styles/colorPalette";

interface RegistrationFormContainerProps {
  isValid: boolean;
}

const RegistrationFormContainer = styled.div<RegistrationFormContainerProps>`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 100%;
  /* justify-content: center; */
  align-items: center;
  /* align-content: center; */

  height: 100vh;

  padding-left: 5rem;

  background: ${(props) =>
    props.isValid
      ? css`linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(26, 148, 197, 0.4598214285714286) 100%);`
      : css`linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(229,107,111,0.4962359943977591) 100%);`};
`;

const RegistrationFormBody = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
`;

const RegistrationFormTitle = styled.h2`
  display: block;

  font-size: 32px;
  line-height: 36px;
  font-weight: 500;

  text-decoration: underline;
`;

const RegistrationFormFields = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegistrationFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegistrationFormFieldLabel = styled.label`
  display: flex;

  margin-top: 67px;

  font-size: 26px;
  line-height: 30px;
  font-weight: 500;
`;

const RegistrationFormFieldError = styled.p`
  display: flex;

  font-size: 16px;
  line-height: 18px;
  font-weight: 500;

  color: ${colors.primaryRed};
`;

const RegistrationFormFieldInputPassword = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;

  input {
    padding-right: 46px;
  }
`;

const RegistrationFormFieldInputShowPasswordButton = styled.span`
  position: absolute;
  display: flex;

  top: 18px;
  right: 0;

  padding: 0 10px;

  font-size: 26px;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    color: ${colors.primaryBlue};

    transition: 250ms ease;
  }
`;

const RegistrationFormFieldInput = styled.input`
  display: flex;

  width: 100%;

  margin-top: 10px;
  padding: 5px;

  font-size: 24px;
  line-height: 28px;
  font-weight: 500;

  border: none;
  border-bottom: 1px solid ${colors.primaryLightBlack};

  outline: none;

  transition: 250ms ease;

  &:hover {
    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }

  &:focus {
    background-color: ${colors.blackOpacity01};
  }
`;

const RegistrationFormButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  grid-template-areas:
    "a a b b"
    "c c c c";

  margin-top: 70px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;

  padding: 10px 0;

  font-size: 22px;
  line-height: 26px;
  font-weight: 500;

  border: 1px solid ${colors.blackOpacity04};
  border-radius: 50px;

  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    background-color: ${colors.blackOpacity01};

    transition: 250ms ease;
  }

  &:disabled {
    cursor: default;

    border: 1px solid ${colors.blackOpacity03};

    background-color: transparent;
  }
`;

const RegistrationFormButtonLogin = styled(Button)`
  grid-area: a;
`;

const RegistrationFormButtonClear = styled(Button)`
  grid-area: b;
`;

const RegistrationFormButtonBack = styled(Button)`
  grid-area: c;
`;

export {
  RegistrationFormContainer,
  RegistrationFormBody,
  RegistrationFormTitle,
  RegistrationFormFields,
  RegistrationFormField,
  RegistrationFormFieldLabel,
  RegistrationFormFieldError,
  RegistrationFormFieldInputPassword,
  RegistrationFormFieldInputShowPasswordButton,
  RegistrationFormFieldInput,
  RegistrationFormButtons,
  RegistrationFormButtonLogin,
  RegistrationFormButtonClear,
  RegistrationFormButtonBack,
};
