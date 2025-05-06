import { Input, Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  name?: string;
  error?: boolean;
}

export const TextField = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, helperText, errorText, optionalText, name, error, ...rest } =
      props;
    return (
      <ChakraField.Root ref={ref} {...rest} invalid={error}>
        {label && (
          <ChakraField.Label>
            {label}
            <ChakraField.RequiredIndicator fallback={optionalText} />
          </ChakraField.Label>
        )}
        <Input name={name} />
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    );
  },
);
