import _AuthForm from "./AuthForm";
import Title from "./FormTitle";
import Input from "./FormInput";
import Button from "./FormButton";
import ProviderList from "./ProviderList";

const AuthForm = Object.assign(_AuthForm, {
  Title,
  Input,
  Button,
  ProviderList,
});

export default AuthForm;
