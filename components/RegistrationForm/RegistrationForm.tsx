import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

import { HiEye, HiEyeOff } from "react-icons/hi";

import {
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
} from "./RegistrationForm.styled";

import { colors } from "./../../styles/colorPalette";

interface FormData {
  userLogin: string;
  password: string;
  confirmPassword: string;
}

interface Error {
  userLoginLength?: string;
  confirmPassword?: string;
  userLogin?: string;
}

const initialFormState = {
  userLogin: "",
  password: "",
  confirmPassword: "",
};

const USER_REGISTRATION_MUTATION = gql`
  mutation registration($userLogin: String!, $password: String!, $confirmPassword: String!) {
    registration(registrationInput: { userLogin: $userLogin, password: $password, confirmPassword: $confirmPassword }) {
      id
      userLogin
      createdAt
      token
    }
  }
`;

const RegistrationForm = (): React.ReactElement => {
  const router = useRouter();

  const loginInput = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = React.useState<FormData>(initialFormState);
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState<Error>({});

  const [registerUser, { loading }] = useMutation(USER_REGISTRATION_MUTATION, {
    update(_, { data: { registration: userData } }) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
      router.replace("/posts");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors[0].extensions?.errors);
    },
    variables: formData,
  });

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({});
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegistrationButtoCick = () => {
    registerUser();
  };

  const onClearButtonClick = () => {
    setFormData(initialFormState);
    setShowPassword(false);
    setErrors({});
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
    formData.userLogin.length === 0 || formData.password.length === 0 || formData.confirmPassword.length === 0;

  const isClearButtonDisabled =
    formData.userLogin.length === 0 && formData.password.length === 0 && formData.confirmPassword.length === 0;

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <RegistrationFormContainer isValid={isFormValid}>
      <motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <RegistrationFormBody>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationFormFields>
            <RegistrationFormField>
              <RegistrationFormFieldLabel htmlFor="userLogin">Логин:</RegistrationFormFieldLabel>
              <RegistrationFormFieldError>{errors?.userLoginLength || errors?.userLogin}</RegistrationFormFieldError>
              <RegistrationFormFieldInput
                onChange={onFormInputChange}
                value={formData.userLogin}
                type="text"
                id="userLogin"
                name="userLogin"
                ref={loginInput}
              />
            </RegistrationFormField>

            <RegistrationFormField>
              <RegistrationFormFieldLabel htmlFor="password">Пароль:</RegistrationFormFieldLabel>
              <RegistrationFormFieldError>{errors?.confirmPassword}</RegistrationFormFieldError>
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
              <RegistrationFormFieldError>{errors?.confirmPassword}</RegistrationFormFieldError>
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
              disabled={isRegistrationButtonDisabled || loading}
              type="button"
            >
              {loading ? (
                <Loader type="ThreeDots" color={colors.primaryBlue} height={10} width={50} timeout={0} />
              ) : (
                "Регистрация"
              )}
            </RegistrationFormButtonLogin>
            <RegistrationFormButtonClear
              onClick={onClearButtonClick}
              disabled={isClearButtonDisabled || loading}
              type="button"
            >
              Очистить
            </RegistrationFormButtonClear>
            <RegistrationFormButtonBack onClick={onBackButtonClick} disabled={loading} type="button">
              Назад
            </RegistrationFormButtonBack>
          </RegistrationFormButtons>
        </RegistrationFormBody>
      </motion.div>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
