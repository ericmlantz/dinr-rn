//imported 3rd party liraries
import { StyleSheet, View } from 'react-native'
import { useFormikContext } from 'formik'

//imported from this repo
import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

//create a component
const AppFormField = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  //render 
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  )
}

//styles
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default AppFormField