import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import {
  Checkbox,
  TextField,
} from 'redux-form-material-ui'

const style = {
  checkbox: {
    marginTop : 16
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [ 'title' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
};

const EditItem = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
    <div style={{ padding : 20, 'padding-top' : 0}}>
      <Field
        name="title"
        floatingLabelText="Title"
        fullWidth={true}
        component={TextField}
      />
      <Field
        name="description"
        floatingLabelText="Description"
        component={TextField}
        multiLine={true}
        rows={1}
        fullWidth={true}
      />
    <Field
      name="starred"
      component={Checkbox}
      checkedIcon={<Star />}
      uncheckedIcon={<StarBorder />}
      label="Starred"
      style={style.checkbox}
      />
    </div>
    <Divider style={{ marginBottom: 20 }}/>
      <div>
        <RaisedButton
          type="submit"
          disabled={pristine || submitting}
          label="Save"
          primary={true}
          style={{ marginLeft : 20 }}
        />
        <FlatButton
          label="Cancel"
          onClick={props.onCancelClick}
          style={{ marginLeft : 12}}
        />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'edit_item',
  validate
})(EditItem);
