import { useState } from 'react'
import {useRegister} from '../../../hooks/api/users/useRegister';

import Form from '../../../components/forms/Form';
import Text from '../../../components/Text';
import Field from '../../../components/forms/Field';
import Button from '../../../components/Button';
import ContainerWithImage from '../../../components/containers/ContainerWithImage';
import Image from '../../../components/images/Image';
import CustomLink from '../../../components/CustomLink';

const Register = (props) => {
    let customFormStyles = {
      margin: "5em",
    };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const { isLoading, isError, error, data , mutate } = useRegister(props)
  
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
        <Image type="regtangle" img="register-img"/>
        <Form onSubmit={onSubmit} style={customFormStyles}>
            <Text size="large" type="title">تسجيل جديد</Text>
            <Field onChange={(e) => setEmail(e.target.value)} name="email" icon="bi bi-person" placeholder="ادخل البريد الالكتروني"/>
            <Field type="password" onChange={(e) => setPassword(e.target.value)} name="password" icon="bi bi-person" placeholder="ادخل كلمة المرور"/>
            <CustomLink to="/login">لديك حساب؟ </CustomLink>
            <Button type="secondary">متابعة</Button>
        </Form>
      </ContainerWithImage>
    )
}

export default Register