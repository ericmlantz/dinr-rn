//imported 3rd party libraries
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

//imported from this repo
import Screen from '../components/Screen'
import colors from '../config/colors'
import {AppFormField, AppForm, SubmitButton} from "../components/Forms";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

//create a component
const LoginScreen = (props) => {

  //render 
  return (
      <Screen style={styles.container}>
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
      </Screen>
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