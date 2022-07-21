//imported 3rd party libraries
import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

//imported from this repo
import MySafeAreaView from '../components/MySafeAreaView'

import { 
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/Forms'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  description: Yup.object().required().nullable().label('Category')
})

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
]
//create a component
const ListingEditScreen = () => {

  //render 
  return (
    <MySafeAreaView>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
      <AppFormField
        maxLength={255}
        name='title'
        placeholder='Title'
      />
      <AppFormField
        keyboardType='numeric'
        maxLength={8}
        name='price'
        placeholder='Price'
      />
      <AppFormPicker
        items={categories}
        name='category'
        placeholder="Category"
      />
      <AppFormField
        maxLength={255}
        multiline
        name="description"
        numberOfLines={3}
        placeholder='Description'
      />
      <SubmitButton title='Post'/>
      </AppForm>
    </MySafeAreaView>
  )
}

//styles
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default ListingEditScreen