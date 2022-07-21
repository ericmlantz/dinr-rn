//imported 3rd party liraries
import React from 'react'
import { useFormikContext } from 'formik'

//imported from this repo
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

//create a component
const AppFormPicker = ({name, items, placeholder}) => {
  const {errors, setFieldValue, touched, values } = useFormikContext()
  //render 
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  )
}

//make this component available to the app
export default AppFormPicker