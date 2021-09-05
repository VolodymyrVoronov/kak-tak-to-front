import React from "react";
import { useRouter } from "next/router";

import {
  LoginFormContainer,
  LoginFormBody,
  LoginFormTitle,
  LoginFormFields,
  LoginFormField,
  LoginFormFieldLabel,
  LoginFormFieldInput,
  LoginFormButtons,
  LoginFormButtonLogin,
  LoginFormButtonClear,
  LoginFormButtonBack,
} from "./LoginForm.styled";

interface FormData {
  login: string;
  password: string;
}

const initialFormState = {
  login: "",
  password: "",
};

const LoginForm = (): React.ReactElement => {
  const router = useRouter();

  const [formData, setFormData] = React.useState<FormData>(initialFormState);

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onLoginButtoCick = () => {
    console.log(`Login`);
  };

  const onClearButtonClick = () => {
    setFormData(initialFormState);
  };

  const onBackButtonClick = () => {
    router.push("/");
  };

  const isLoginButtonDisabled = formData.login.length === 0 || formData.password.length === 0;
  const isClearButtonDisabled = formData.login.length === 0 && formData.password.length === 0;

  return (
    <LoginFormContainer>
      <LoginFormBody>
        <LoginFormTitle>Авторизация</LoginFormTitle>
        <LoginFormFields>
          <LoginFormField>
            <LoginFormFieldLabel htmlFor="login">Логин:</LoginFormFieldLabel>
            <LoginFormFieldInput
              onChange={onFormInputChange}
              value={formData.login}
              type="text"
              id="login"
              name="login"
            />
          </LoginFormField>

          <LoginFormField>
            <LoginFormFieldLabel htmlFor="password">Пароль:</LoginFormFieldLabel>
            <LoginFormFieldInput
              onChange={onFormInputChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
            />
          </LoginFormField>
        </LoginFormFields>
        <LoginFormButtons>
          <LoginFormButtonLogin onClick={onLoginButtoCick} disabled={isLoginButtonDisabled} type="button">
            Вход
          </LoginFormButtonLogin>
          <LoginFormButtonClear onClick={onClearButtonClick} disabled={isClearButtonDisabled} type="button">
            Очистить
          </LoginFormButtonClear>
          <LoginFormButtonBack onClick={onBackButtonClick} type="button">
            Назад
          </LoginFormButtonBack>
        </LoginFormButtons>
      </LoginFormBody>
    </LoginFormContainer>
  );
};

export default LoginForm;
