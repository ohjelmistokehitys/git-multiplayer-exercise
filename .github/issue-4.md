# Add a "Remember me" option

## Objective

Give users the option to indicate that they want their login session remembered on the current device.

## Requirements

- Add a checkbox to the existing login form.
- Label the checkbox clearly as `Remember me`.
- Give the control the name `remember` so its value can be submitted with the form.
- Keep the checkbox associated with its label and place it with the other login options.
- Do not implement cookies, session persistence, or backend behavior; this issue is limited to the HTML form control.

## Acceptance criteria

- The form contains an accessible checkbox with `name="remember"`.
- The visible label reads `Remember me`.
- The checkbox can be selected and cleared independently of the email and password fields.
- Its value is included when the form is submitted while selected.

## Verification

- Use the browser to toggle the checkbox and submit the form in both states.
- Inspect the submitted form data to confirm the `remember` field is present when selected.
- Check that the control is keyboard accessible.