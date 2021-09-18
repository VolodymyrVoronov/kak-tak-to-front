import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import Loader from "react-loader-spinner";

import { HiEye, HiEyeOff } from "react-icons/hi";

import {
  LoginFormContainer,
  LoginFormBody,
  LoginFormTitle,
  LoginFormFields,
  LoginFormField,
  LoginFormFieldLabel,
  LoginFormFieldError,
  LoginFormFieldInputPassword,
  LoginFormFieldInputShowPasswordButton,
  LoginFormFieldInput,
  LoginFormButtons,
  LoginFormButtonLogin,
  LoginFormButtonClear,
  LoginFormButtonBack,
} from "./LoginForm.styled";

import { colors } from "./../../styles/colorPalette";

interface FormData {
  userLogin: string;
  password: string;
}

interface Error {
  userNotFound?: string;
  wrongCredentials?: string;
}

const initialFormState = {
  userLogin: "",
  password: "",
};

const USER_LOGIN_MUTATION = gql`
  mutation login($userLogin: String!, $password: String!) {
    login(userLogin: $userLogin, password: $password) {
      id
      userLogin
      createdAt
      token
    }
  }
`;

const LoginForm = (): React.ReactElement => {
  const router = useRouter();

  const loginInput = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = React.useState<FormData>(initialFormState);
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = React.useState<Error>({});

  const [loginUser, { loading }] = useMutation(USER_LOGIN_MUTATION, {
    update(_, { data: { login: userData } }) {
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

  const onLoginButtoCick = () => {
    loginUser();
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

  const isLoginButtonDisabled = formData.userLogin.length === 0 || formData.password.length === 0;

  const isClearButtonDisabled = formData.userLogin.length === 0 && formData.password.length === 0;

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <LoginFormContainer isValid={isFormValid}>
      <LoginFormBody>
        <LoginFormTitle>Авторизация</LoginFormTitle>
        <LoginFormFields>
          <LoginFormField>
            <LoginFormFieldLabel htmlFor="userLogin">Логин:</LoginFormFieldLabel>

            <LoginFormFieldError>{errors?.userNotFound}</LoginFormFieldError>

            <LoginFormFieldInput
              onChange={onFormInputChange}
              value={formData.userLogin}
              type="text"
              id="userLogin"
              name="userLogin"
              ref={loginInput}
            />
          </LoginFormField>

          <LoginFormField>
            <LoginFormFieldLabel htmlFor="password">Пароль:</LoginFormFieldLabel>

            <LoginFormFieldError>{errors?.wrongCredentials}</LoginFormFieldError>

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
          <LoginFormButtonLogin onClick={onLoginButtoCick} disabled={isLoginButtonDisabled || loading} type="button">
            {loading ? (
              <Loader type="ThreeDots" color={colors.primaryBlue} height={10} width={50} timeout={0} />
            ) : (
              "Вход"
            )}
          </LoginFormButtonLogin>
          <LoginFormButtonClear onClick={onClearButtonClick} disabled={isClearButtonDisabled || loading} type="button">
            Очистить
          </LoginFormButtonClear>
          <LoginFormButtonBack onClick={onBackButtonClick} disabled={loading} type="button">
            Назад
          </LoginFormButtonBack>
        </LoginFormButtons>
      </LoginFormBody>
    </LoginFormContainer>
  );
};

export default LoginForm;
