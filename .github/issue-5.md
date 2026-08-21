# Add a password recovery link

## Objective

Make the password recovery option visible to users who cannot sign in.

## Requirements

- Add a link with the visible text `Forgot password?` to the login form area.
- Place the link below the login button.
- Use a placeholder destination for now because a recovery page is not part of this exercise.
- Do not implement password reset, account lookup, or backend functionality.

## Acceptance criteria

- The link is clearly visible below the login button.
- The link text is exactly `Forgot password?` and communicates its purpose without additional context.
- The link has a valid placeholder `href` and can be activated with keyboard or pointer input.
- The existing login form controls and button remain functional.

## Verification

- Open the page and confirm the link's position relative to the login button.
- Activate the link and confirm that the placeholder destination is used.
- Check the link's focus state with keyboard navigation.