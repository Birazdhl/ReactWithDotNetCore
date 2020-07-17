import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { FormFieldProps, Form, Label } from 'semantic-ui-react'
import { DateTimePicker } from 'react-widgets'

interface IProps extends FieldRenderProps<Date, any>, FormFieldProps { }

export const DateInput: React.FC<IProps> = ({
    input,
    widht,
    placeholder,
    date = false,
    time = false,
    meta: { touched, error },
    ...rest
}) => {
    return (
        <Form.Field error={touched && !!error}>
            <DateTimePicker
                placeholder={placeholder}
                value={input.value || null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                onKeyDown={(e) => e.preventDefault()}
                date={date}
                time={time}
            // {...rest}
            />
            {touched && error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    )
}
