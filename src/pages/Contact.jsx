import { Container, makeStyles, Grid, Typography, TextField, Button } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons'
import { useFormik } from 'formik'
import validations from './validations'

const useStyle = makeStyles((theme) => ({
  container: {

  },
  helperTextClass: {
    color: "red"
  },
  textField: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "100%",
  },
  form: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5),
      width: "50%",
    }
  }
}))

const Contact = () => {
  const classes = useStyle()
  const { handleSubmit, handleChange, values, touched, handleBlur, errors } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: validations
  })
  return (
    <Container className={classes.container}>
      <Grid container rowspacing={1} direction='row' justifyContent='center' alignItems='center'>
        <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
          <div>
            <TextField
              className={classes.textField}
              id="outlined-error-helper-text"
              name="fullname"
              label="Your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
              FormHelperTextProps={{ className: classes.helperTextClass }}
              helperText={errors.fullname && touched.fullname && (errors.fullname)} />
          </div>
          <div>
            <TextField
              className={classes.textField}
              id="outlined-error-helper-text"
              name="email"
              label="E-Mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              FormHelperTextProps={{ className: classes.helperTextClass }}
              helperText={errors.email && touched.email && (errors.email)}
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              id="outlined-error-helper-text"
              name="subject"
              label="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              FormHelperTextProps={{ className: classes.helperTextClass }}
              helperText={errors.subject && touched.subject && (errors.subject)}
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              multiline
              rows={4}
              name="message"
              label="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              FormHelperTextProps={{ className: classes.helperTextClass }}
              helperText={errors.message && touched.message && (errors.message)}
            />
          </div>
          <br />
          <Button style={{ float: "right", textAlign: "center" }} type="submit" variant="contained" endIcon={<SendIcon />} size="large">Send Message</Button>
        </form>
      </Grid>
    </Container>
  )
}

export default Contact

/*

<input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email} />
            <br />
            {/*errors.email && touched.email && (
              <div style={{ color: "red" }}>{errors.email}</div>
            )*/
