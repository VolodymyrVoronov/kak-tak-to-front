import React from "react";
import { useRouter } from "next/router";

import { HiEye, HiEyeOff } from "react-icons/hi";

import {
  LoginFormContainer,
  LoginFormBody,
  LoginFormTitle,
  LoginFormFields,
  LoginFormField,
  LoginFormFieldLabel,
  LoginFormFieldInputPassword,
  LoginFormFieldInputShowPasswordButton,
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
  const loginInput = React.useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);

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
    setShowPassword(false);
  };

  const onBackButtonClick = () => {
    router.push("/");
  };

  const onShowPasswordClick = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  React.useEffect(() => {
    if (loginInput && loginInput.current) {
      loginInput.current.focus();
    }
  }, []);

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
              ref={loginInput}
            />
          </LoginFormField>

          <LoginFormField>
            <LoginFormFieldLabel htmlFor="password">Пароль:</LoginFormFieldLabel>
            <LoginFormFieldInputPassword>
              <LoginFormFieldInput
                onChange={onFormInputChange}
                value={formData.password}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
              />
              <LoginFormFieldInputShowPasswordButton onClick={onShowPasswordClick}>
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </LoginFormFieldInputShowPasswordButton>
            </LoginFormFieldInputPassword>
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
