import { useState } from 'react'
import {useLogin} from '../../../hooks/api/users/useLogin';

import Button from '../../../components/Button';
import Field from '../../../components/forms/Field';
import Text from '../../../components/Text';
import Image from '../../../components/images/Image';
import ContainerWithImage from '../../../components/containers/ContainerWithImage';
import Form from '../../../components/forms/Form';
import CustomLink from '../../../components/CustomLink';

const Login = (props) => {
  let customFormStyles = {
    margin: "5em",
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isLoading, isError, error, data, mutate } = useLogin(props);

  const onSubmit = (e) => { 
    e.preventDefault()
    e.currentTarget.disabled = true;

    mutate({
      email,
      password
    })
  }

  return (
    <ContainerWithImage>
      <Form onSubmit={onSubmit} style={customFormStyles}>
          <Text size="large" type="title">تسجيل دخول</Text>
          <Field onChange={(e) => setEmail(e.target.value)} name="email" icon="bi bi-person" placeholder="ادخل البريد الالكتروني"/>
          <Field onChange={(e) => setPassword(e.target.value)} name="password" icon="bi bi-person" placeholder="ادخل كلمة المرور"/>
          <CustomLink to="/register">ليس لديك حساب؟ سجل الان!</CustomLink>
          <Button type="secondary">تسجيل الدخول</Button>
      </Form>
      <Image hide={true} type="square" img="login-img"/>
    </ContainerWithImage>
  )
}

export default Login