import React from "react";
import { useRouter } from "next/router";

import {
  RegistrationFormContainer,
  RegistrationFormBody,
  RegistrationFormTitle,
  RegistrationFormFields,
  RegistrationFormField,
  RegistrationFormFieldLabel,
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

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegistrationButtoCick = () => {
    console.log(`Login`);
  };

  const onClearButtonClick = () => {
    setFormData(initialFormState);
  };

  const onBackButtonClick = () => {
    router.push("/");
  };

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
            />
          </RegistrationFormField>

          <RegistrationFormField>
            <RegistrationFormFieldLabel htmlFor="password">Пароль:</RegistrationFormFieldLabel>
            <RegistrationFormFieldInput
              onChange={onFormInputChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
            />
          </RegistrationFormField>

          <RegistrationFormField>
            <RegistrationFormFieldLabel htmlFor="confirmPassword">Подтвердите пароль:</RegistrationFormFieldLabel>
            <RegistrationFormFieldInput
              onChange={onFormInputChange}
              value={formData.confirmPassword}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
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
