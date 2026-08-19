import colors from '@/constants/Colors';
import React, { forwardRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    type EnterKeyHintTypeOptions,
    type FocusEvent,
    type InputModeOptions,
    type KeyboardTypeOptions,
    type StyleProp,
    type TextStyle,
    type ViewStyle,
} from 'react-native';

interface TextInputCompProps {
  placeholder?: string;
  value?: string;
  testID?: string;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  left?: () => React.JSX.Element;
  right?: () => React.JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  required?: boolean;
  editable?: boolean;
  inputStyles?: StyleProp<TextStyle>;
  handleTextChange: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
  enterKeyHint?: EnterKeyHintTypeOptions;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  maxLength?: number | undefined;
}
export const TextInputComp = forwardRef<TextInput, TextInputCompProps>(
  (
    {
      label,
      hasError = false,
      errorMessage,
      left,
      right,
      containerStyle,
      inputContainerStyle,
      required = false,
      editable = true,
      inputStyles,
      handleTextChange,
      keyboardType,
      inputMode,
      enterKeyHint,
      onBlur,
      onFocus,
      maxLength,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    return (
      <View style={[containerStyle, styles.container]}>
        {label && (
          <Text style={styles.label}>
            {label}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
        )}

        <View style={styles.inputContainer}>
          {!!left && <View style={styles.left}>{left()}</View>}
          <View
            style={[
              styles.inputContent,
              focused && styles.focused,
              (errorMessage || hasError) && styles.error,
              !editable && styles.disabled,
              inputContainerStyle,
            ]}
          >
            <TextInput
              ref={ref}
              {...props}
              editable={editable}
              style={[styles.input, inputStyles]}
              onFocus={(event) => {
                setFocused(true);
                onFocus?.(event);
              }}
              onBlur={(event) => {
                setFocused(false);
                onBlur?.(event);
              }}
              keyboardType={keyboardType}
              onChangeText={handleTextChange}
              enterKeyHint={enterKeyHint}
              inputMode={inputMode}
              allowFontScaling
              maxLength={maxLength}
            />
          </View>
          {!!right && <View style={styles.right}>{right()}</View>}
        </View>
        {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    );
  },
);

TextInputComp.displayName = 'TextInputComp';

export default TextInputComp;

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
  },

  required: {
    color: colors.error,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 12,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    flex: 1,
  },
  focused: {
    borderColor: colors.info,
  },

  error: {
    borderColor: colors.error,
  },

  disabled: {
    opacity: 0.5,
  },

  input: {
    minHeight: 50,
    fontSize: 16,
  },

  left: {
    marginRight: 8,
  },

  right: {
    marginLeft: 8,
  },

  errorText: {
    marginTop: 5,
    fontSize: 12,
    color: colors.error,
  },
});
