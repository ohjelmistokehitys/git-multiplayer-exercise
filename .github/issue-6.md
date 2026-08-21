# Enable email address validation

## Objective

Use the browser's built-in validation for the email field so users receive immediate feedback when the value is not in email address format.

## Requirements

- Change the email input's `type` attribute to `email`.
- Preserve the existing field name, label, and form layout.
- Do not add custom JavaScript validation or a backend validation implementation.

## Acceptance criteria

- The email input has `type="email"`.
- The browser identifies an invalid email value when the form is submitted.
- Valid email-shaped input can pass the browser's built-in constraint validation.
- The password field and other form controls are unaffected.

## Verification

- Submit the form with an invalid email value and confirm that the browser displays a validation message.
- Submit it with a valid email-shaped value and confirm that email validation does not block submission.
- Review the diff for unrelated validation changes.
