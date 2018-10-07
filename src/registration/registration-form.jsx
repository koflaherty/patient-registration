import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { Checkbox, Input, Radio, RadioGroup, Select, SelectOption } from "../forms/fields/fields";

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
            <Field label="First Name" name="firstName" component={Input} placeholder="First Name" hasFeedback />

            <Field label="Last Name" name="lastName" component={Input} placeholder="Last Name" />

            <Field label="Email" name="email" component={Input} type="email" placeholder="Email" />

            <Field label="Sex" name="sex" component={RadioGroup} value="male">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
            </Field>

            <Field label="Favoraite Color" name="favoriteColor" component={Select}>
                <SelectOption value="ff0000">Red</SelectOption>
                <SelectOption value="00ff00">Green</SelectOption>
                <SelectOption value="0000ff">Blue</SelectOption>
            </Field>

            <Field label="Employed" name="employed" id="employed" component={Checkbox} type="checkbox" />

            <Field label="Notes" name="notes" component={Input} />

            <FormItem {...tailFormItemLayout}>
                <Button type="primary" disabled={pristine || submitting} htmlType="submit" style={{ marginRight: "10px" }}>
                    Submit
                </Button>

                <Button disabled={pristine || submitting} onClick={reset}>
                    Clear Values
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
