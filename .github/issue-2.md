# Submit login data with POST

## Objective

The login form currently uses the `GET` method, which places submitted field values in the URL. Configure the form to submit its data with `POST` instead.

## Requirements

- Change the login form's `method` attribute to `POST`.
- Preserve the existing form action and fields.
- Do not implement a server endpoint or authentication flow; transport security is outside the scope of this exercise.

## Acceptance criteria

- The login form contains `method="POST"`.
- Submitting the form no longer appends the field values to the URL as query parameters.
- The existing login controls remain available and unchanged.

## Verification

- Inspect the form markup for the method attribute.
- Submit the form locally and confirm that its method is POST in the browser's network or developer tools.
- Review the diff for unrelated changes.