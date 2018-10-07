import React from "react";
import {
    Checkbox as CheckboxAnt,
    DatePicker as DatePickerAnt,
    Input as InputAnt,
    Form as FormAnt,
    Radio as RadioAnt,
    Select as SelectAnt,
} from "antd";

const FormItem = FormAnt.Item;

const makeField = Component => ({ input, meta, children, hasFeedback, label, formItemLayout = {}, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    input.value = input.value || undefined;

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
export const DatePicker = makeField(DatePickerAnt);
export const Input = makeField(InputAnt);
export const RadioGroup = makeField(RadioAnt.Group);
export const Radio = RadioAnt;
export const Select = makeField(SelectAnt);
export const SelectOption = SelectAnt.Option;
export const Textarea = makeField(InputAnt.TextArea);