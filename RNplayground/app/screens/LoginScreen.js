//imported 3rd party liraries
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

//imported from this repo
import MySafeAreaView from '../components/MySafeAreaView'
import AppTextInput from '../components/AppTextInput'
import MyButton from '../components/MyButton'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

//create a component
const LoginScreen = (props) => {

  //render 
  return (
      <MySafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

        <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
          <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              name='email'
              placeholder='Email'
              textContentType='emailAddress'  //allows iOS to import from Keychain
            />
            <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              keyboardType='default'
              name='password'
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <SubmitButton title='Login'/>
        </AppForm>
      </MySafeAreaView>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

//make this component available to the app
export default LoginScreen