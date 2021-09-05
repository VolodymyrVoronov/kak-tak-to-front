import React from "react";
import { useRouter } from "next/router";

import { HiEye, HiEyeOff } from "react-icons/hi";

import {
  RegistrationFormContainer,
  RegistrationFormBody,
  RegistrationFormTitle,
  RegistrationFormFields,
  RegistrationFormField,
  RegistrationFormFieldLabel,
  RegistrationFormFieldInputPassword,
  RegistrationFormFieldInputShowPasswordButton,
  RegistrationFormFieldInput,
  RegistrationFormButtons,
  RegistrationFormButtonLogin,
  RegistrationFormButtonClear,
  RegistrationFormButtonBack,
} from "./RegistrationForm.styled";

interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
}

const initialFormState = {
  login: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = (): React.ReactElement => {
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

  const onRegistrationButtoCick = () => {
    console.log(`Registration`);
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

  const isRegistrationButtonDisabled =
    formData.login.length === 0 || formData.password.length === 0 || formData.confirmPassword.length === 0;

  const isClearButtonDisabled =
    formData.login.length === 0 && formData.password.length === 0 && formData.confirmPassword.length === 0;

  return (
    <RegistrationFormContainer>
      <RegistrationFormBody>
        <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
        <RegistrationFormFields>
          <RegistrationFormField>
            <RegistrationFormFieldLabel htmlFor="login">Логин:</RegistrationFormFieldLabel>
            <RegistrationFormFieldInput
              onChange={onFormInputChange}
              value={formData.login}
              type="text"
              id="login"
              name="login"
              ref={loginInput}
            />
          </RegistrationFormField>

          <RegistrationFormField>
            <RegistrationFormFieldLabel htmlFor="password">Пароль:</RegistrationFormFieldLabel>
            <RegistrationFormFieldInputPassword>
              <RegistrationFormFieldInput
                onChange={onFormInputChange}
                value={formData.password}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
              />
              <RegistrationFormFieldInputShowPasswordButton onClick={onShowPasswordClick}>
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </RegistrationFormFieldInputShowPasswordButton>
            </RegistrationFormFieldInputPassword>
          </RegistrationFormField>

          <RegistrationFormField>
            <RegistrationFormFieldLabel htmlFor="confirmPassword">Подтвердите пароль:</RegistrationFormFieldLabel>
            <RegistrationFormFieldInputPassword>
              <RegistrationFormFieldInput
                onChange={onFormInputChange}
                value={formData.confirmPassword}
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
              />
              <RegistrationFormFieldInputShowPasswordButton onClick={onShowPasswordClick}>
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </RegistrationFormFieldInputShowPasswordButton>
            </RegistrationFormFieldInputPassword>
          </RegistrationFormField>
        </RegistrationFormFields>
        <RegistrationFormButtons>
          <RegistrationFormButtonLogin
            onClick={onRegistrationButtoCick}
            disabled={isRegistrationButtonDisabled}
            type="button"
          >
            Регистрация
          </RegistrationFormButtonLogin>
          <RegistrationFormButtonClear onClick={onClearButtonClick} disabled={isClearButtonDisabled} type="button">
            Очистить
          </RegistrationFormButtonClear>
          <RegistrationFormButtonBack onClick={onBackButtonClick} type="button">
            Назад
          </RegistrationFormButtonBack>
        </RegistrationFormButtons>
      </RegistrationFormBody>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
