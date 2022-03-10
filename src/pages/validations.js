import * as yup from 'yup'
const fullnameMinLength = 5
const subjectMinLength = 5
const messageMinLength = 25
const validations = yup.object().shape({
    email: yup.string().email('Must be a valid e-mail.').required('E-mail is a required field.'),
    fullname: 
    yup.string()
    .min(fullnameMinLength, `Name must be at least ${fullnameMinLength} characters.`)
    .required('Name is a required field.'),
    subject: 
    yup.string()
    .min(subjectMinLength, `Subject must be at least ${subjectMinLength} characters.`)
    .required('Subject is a required field.'),
    message: 
    yup.string()
    .min(messageMinLength, `Message must be at least ${messageMinLength} characters.`)
    .required('Message is a required field.'),
    
})

export default validations