import { useState } from 'react';
import { Title, Field, Label, Control, Input, Textarea, Icon, Button, Notification, Delete } from 'rbx';
import { FaEnvelope, FaEdit, FaAddressCard, FaPhone } from 'react-icons/fa';
import { Formik, getIn } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required()
})


const FormLanding: React.FC = () => {
  const [openNotifi, setOpenNotifi] = useState(false);
  const [sendContact, setSendContact] = useState(false);
  const [initialValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  function handleSendContact(values, { setSubmitting }) {
    setOpenNotifi(true)
    //console.log(values)

    setSubmitting(false)

    setTimeout(() => {
      setSendContact(true)
    }, 2500)
  }
  
  function closeNotification() {
    setOpenNotifi(false)
    setSendContact(false)
  }
  return(
    <Formik initialValues={initialValues} onSubmit={handleSendContact} validationSchema={validations}>
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <>
        <div style={{textAlign: "center", marginBottom: 50, marginTop: 50}}>
          <Title size={3}>Fale Comigo</Title>
          <Title size={6} subtitle>
            Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entrarei em contato.
          </Title> 
        </div>

        <form style={{width: "90%", margin: "0 auto"}}>
          <Field horizontal style={{gap: 20}}>
            <Field>
              <Label>Seu nome</Label>
              <Control iconLeft iconRight>
                <Input
                  color={errors.name && touched.name ? 'danger' : ''}
                  type="text" 
                  placeholder="Digite seu nome..."
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Icon size="medium" align="left">
                  <FaAddressCard size={20}/>
                </Icon>
              </Control>
            </Field>

            <Field>
              <Label>E-mail</Label>
              <Control iconLeft iconRight>
                <Input
                  color={errors.email && touched.email ? 'danger' : ''}                
                  placeholder="email@exemplo.com"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Icon size="medium" align="left">
                  <FaEnvelope size={20}/>
                </Icon>
              </Control>
            </Field>
          </Field>

          <Field horizontal style={{gap: 20}}>
            <Field>
              <Label>Telefone</Label>
              <Control iconLeft iconRight>
                <Input
                  color={errors.phone && touched.phone ? 'danger' : ''} 
                  type="text" 
                  placeholder="(_ _)_ _ _ _ _ _ _ _" 
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <Icon size="medium" align="left">
                  <FaPhone size={18}/>
                </Icon>
              </Control>
            </Field>

            <Field>
              <Label>Assunto</Label>
              <Control iconLeft iconRight>
                <Input
                  color={errors.subject && touched.subject ? 'danger' : ''}
                  placeholder="Digite aqui o assunto..."
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
                <Icon size="medium" align="left">
                  <FaEdit size={20}/>
                </Icon>
              </Control>
            </Field>
          </Field>

          <Field>
            <Label>Mensagem</Label>
            <Control>
              <Textarea
                color={errors.message && touched.message ? 'danger' : ''}
                style={{minHeight: 100}} 
                placeholder="Digite sua mensagem..." 
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </Control>
          </Field>

          <Field style={{marginTop: 40}}>
            <Control style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
              <Button as="a" type="submit" onClick={handleSubmit} disabled={isSubmitting} color="link">Enviar contato</Button>
            </Control>
          </Field>

          <Field>
            <Control style={{minHeight: 50}}>
              { openNotifi && 
                <Notification color="success" style={{maxWidth: 220, float: "right"}}>
                  <Delete as="a" onClick={() => closeNotification()} />
                  <strong>{sendContact ? 'Enviado!' : 'Enviando contato...'}</strong>
                </Notification>
              }
            </Control>
          </Field>
        </form>
      </>
    )}

    </Formik>
  );
}

export default FormLanding;

