import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import AppLayout from 'src/layouts/AppLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error, client }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })
  console.log(client)

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <AppLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="name" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="name" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </AppLayout>
  )
}

export default ContactPage
