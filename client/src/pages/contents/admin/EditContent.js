import Form from '../../../components/forms/Form'
import Text from '../../../components/Text'
import Field from '../../../components/forms/Field'
import Button from '../../../components/Button'

const EditContent = (props) => {
  let customFormStyles = {
    margin: 'auto',
    marginBottom: '1em'
  }
  return (
    <Form style={customFormStyles}>
      <Text size="large" type="title">بيانات الحساب</Text>
      <Field onChange={console.log("h")} name="name" icon="bi bi-person" placeholder=""/>
      <Field onChange={console.log("h")} name="description" icon="bi bi-person" placeholder=""/>
      <Button type="secondary">المتابعة</Button>
    </Form>
  )
}

export default EditContent