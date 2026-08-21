# Protect the password input

## Objective

The password field currently displays entered characters in plain text. Update the login form so passwords are obscured while they are being entered.

## Requirements

- Change the password input's `type` attribute to `password`.
- Keep the existing field name, label, and form structure unchanged.
- Do not add backend authentication or password-storage functionality.

## Acceptance criteria

- The password input has `type="password"`.
- Characters entered into the field are not visible as plain text in the browser.
- The field remains associated with its existing label and can still be submitted with the form.

## Verification

- Open the page in a browser and enter a sample password.
- Confirm that the browser masks the entered characters.
- Review the diff to ensure this branch contains only the password-input change.