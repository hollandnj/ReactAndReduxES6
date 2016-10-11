import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const CourseForm = (course, allAuthors, onSave, onChange, loading, errors) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="Title" label="Title" onChange={onChange}/>
      <SelectInput name="Author" label="Author" onChange={onChange} options={allAuthors}/>
      <TextInput name="Category" label="Category" onChange={onChange}/>
      <TextInput name="Length" label="Length" onChange={onChange}/>
      <div>Save</div>
    </form>
  );
};

CourseForm.propTypes={
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;