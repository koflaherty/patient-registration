import React, { Component } from "react";
import {
    Checkbox as CheckboxAnt,
    Input as InputAnt,
    Form as FormAnt,
    Radio as RadioAnt,
    Select as SelectAnt,
} from "antd";

const FormItem = FormAnt.Item;

const defaultFormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

const makeField = Component => ({ input, meta, children, hasFeedback, label, formItemLayout = defaultFormItemLayout, ...rest }) => {
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

export const Checkbox = makeField(CheckboxAnt);
export const Input = makeField(InputAnt);
export const RadioGroup = makeField(RadioAnt.Group);
export const Radio = RadioAnt;
export const Select = makeField(SelectAnt);
export const SelectOption = SelectAnt.Option;