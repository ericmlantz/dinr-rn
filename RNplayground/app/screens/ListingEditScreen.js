//imported 3rd party libraries
import React from 'react'
import * as Yup from 'yup'

//imported from this repo
import Screen from '../components/Screen'
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/Forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import AppFormImagePicker from '../components/Forms/AppFormImagePicker'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.')
})

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' }
]
//create a component
const ListingEditScreen = () => {
  const location = useLocation()

  //render
  return (
    <Screen>
      <AppForm
        initialValues={ {
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        } }
        onSubmit={ (values) => console.log(location) }
        validationSchema={ validationSchema }
      >
        <AppFormImagePicker name='images' />
        <AppFormField maxLength={ 255 } name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={ 8 }
          name="price"
          placeholder="Price"
          width={ 120 }
        />
        <AppFormPicker
          items={ categories }
          name="category"
          numberOfColumns={ 3 }
          PickerItemComponent={ CategoryPickerItem }
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={ 255 }
          multiline
          name="description"
          numberOfLines={ 3 }
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

//make this component available to the app
export default ListingEditScreen
