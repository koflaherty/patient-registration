import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { Checkbox, DatePicker, Input, Select, SelectOption, Textarea } from "../../forms/fields/fields";

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 14,
            offset: 6
        }
    }
};

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component {...input} {...rest} children={children} />
        </FormItem>
    );
};


const RegistrationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <h2>Patient Information</h2>
            <Field label="First Name" name="firstName" component={Input} hasFeedback />
            <Field label="Last Name" name="lastName" component={Input} hasFeedback />
            <Field label="Date of Birth" name="dateOfBirth" component={DatePicker} />
            <Field label="Email" name="email" component={Input} type="email" />
            <Field label="Address" name="address" component={Input} />

            <h2>Medical History</h2>

            <Field label="Family History" name="familyHistory" component={Textarea} />
            <Field label="Medications" name="medications" component={Textarea} />
            <Field label="Diseases" name="diseases" component={Textarea} />
            <Field label="Allergies" name="allergies" component={Textarea} />

            <Field label="Agree" name="agree" component={Checkbox} type="checkbox" />

            <FormItem {...tailFormItemLayout}>
                <Button type="primary" disabled={submitting} htmlType="submit" style={{ marginRight: "10px" }}>
                    Submit
                </Button>
            </FormItem>
        </Form>
    );
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    }

    return errors;
};

export default reduxForm({
    form: "registration",
    validate
})(RegistrationForm);
