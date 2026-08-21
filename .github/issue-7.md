# Require login credentials

## Objective

Prevent the login form from being submitted without values for both required credentials.

## Requirements

- Add the boolean `required` attribute to the email input.
- Add the boolean `required` attribute to the password input.
- Preserve the existing input types, names, labels, and form structure.
- Use native browser validation; do not add custom JavaScript validation.

## Acceptance criteria

- Both the email and password inputs contain the `required` attribute.
- The browser prevents submission when either field is empty.
- The browser still applies any existing type-specific validation to the email field.
- No unrelated form behavior changes.

## Verification

- Submit the form with both fields empty and confirm that validation identifies a required field.
- Repeat with one field empty at a time.
- Confirm that the form can pass required-field validation when both fields contain values.
