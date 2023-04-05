import Form from '../../../components/forms/Form'
import Text from '../../../components/Text'
import Field from '../../../components/forms/Field'
import Button from '../../../components/Button'

const EditProfile = (props) => {
  let customFormStyles = {
    margin: 'auto',
    marginBottom: '1em'
  }
  
  // on Submit take user Id and submit
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(props.user._id)
  }
  return (
    <Form onSubmit={onSubmit} style={customFormStyles}>
      <Text size="large" type="title">بيانات الحساب</Text>
      <Field defaultValue={props.user.personalInformation.name} onChange={console.log("h")} name="name" icon="bi bi-person" placeholder="ادخل الاسم"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Field defaultValue={props.user.personalInformation.description} onChange={console.log("h")} name="description" icon="bi bi-person" placeholder="ادخل الوصف"/>
      <Button type="secondary">المتابعة</Button>
    </Form>
  )
}

export default EditProfile