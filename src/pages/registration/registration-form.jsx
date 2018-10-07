import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { Checkbox, DatePicker, Input, Textarea } from "../../forms/fields/fields";
import moment from 'moment';

const RegistrationForm = props => {
    const { handleSubmit, submitting } = props;
    return (
        <Form onSubmit={handleSubmit} layout="vertical">
            <h2>Patient Information</h2>

            <Field label="First Name" name="firstName" component={Input} required />
            <Field label="Last Name" name="lastName" component={Input} required />
            <Field label="Date of Birth" name="dateOfBirth"
                   component={DatePicker}
                   onBlur={e => e.preventDefault()}
                   onFocus={e => e.preventDefault()}
                   hasFeedback
                   required
            />
            <Field label="Email (optional)" name="email" component={Input} type="email" />
            <Field label="Home Address" name="homeAddress" component={Input} required />

            <h2>Medical History (optional)</h2>

            <Field label="Family History" name="familyHistory" component={Textarea} />
            <Field label="Medications" name="medications" component={Textarea} />
            <Field label="Diseases" name="diseases" component={Textarea} />
            <Field label="Allergies" name="allergies" component={Textarea} />

            <h2>Terms and Conditions</h2>
            <Field label="Agree" name="agree" component={Checkbox} type="checkbox" hasFeedback required />

            <Button type="primary" disabled={submitting} htmlType="submit" style={{ marginRight: "10px" }}>
                Submit
            </Button>
        </Form>
    );
};

const validate = values => {
    const errors = {};
    if (values.dateOfBirth && values.dateOfBirth.diff(moment()) > 0) {
        errors.dateOfBirth = "Date of Birth can not be in the future";
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Date of Birth is required";
    }

    return errors;
};

export default reduxForm({
    form: "registration",
    validate
})(RegistrationForm);
