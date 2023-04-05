import Form from '../../../components/forms/Form'
import Text from '../../../components/Text'
import Field from '../../../components/forms/Field'
import Button from '../../../components/Button'
import { useState } from 'react';
import {useCreateContent} from '../../../hooks/api/contents/useCreateContent';


const CreateContent = (props) => {
  let customFormStyles = {
    margin: 'auto',
    marginBottom: '1em'
  }
  const { isLoading, isError, error, data, mutate } = useCreateContent(props);

  const onSubmit = (e) => { 
    e.preventDefault()
    e.currentTarget.disabled = true;
    
    mutate({
      title: e.target.title.value,
      body: {
        text: e.target.text.value
      },
      points: e.target.points.value,
      tags: e.target.tags.value.split(',')
    })
  }

  return (
    <Form onSubmit={onSubmit} style={customFormStyles}>
      <Text size="large" type="title">منشور جديد</Text>
      <Field name="title" icon="bi bi-person" placeholder="عنوان المنشور"/>
      <Field name="text" type="text" icon="bi bi-person" placeholder="وصف المنشور"/>
      <Field name="points" type="text" icon="bi bi-person" placeholder="النقاط"/>
      <Field name="tags" type="text" icon="bi bi-person" placeholder="tags"/>
      <Button type="secondary">المتابعة</Button>
    </Form>
  )
}

export default CreateContent