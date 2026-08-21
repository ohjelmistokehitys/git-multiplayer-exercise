# Add Pico.css styling

## Objective

Use Pico.css to give the login page a consistent baseline style without adding a local CSS framework dependency.

## Requirements

- Add the Pico.css classless stylesheet to the document head.
- Load the stylesheet from a CDN, using the versioned URL documented at [Pico.css classless](https://picocss.com/docs/classless).
- Do not add framework-specific classes for the login form.
- Do not download or copy the framework into the repository.

## Acceptance criteria

- The page includes a stylesheet link for Pico.css version 2's classless build.
- The link loads from the jsDelivr CDN.
- The login form remains functional and is represented with semantic HTML.
- Existing application styles are not unnecessarily rewritten.

## Verification

- Open the page with network access and confirm that the Pico.css stylesheet loads.
- Check the rendered page for the expected Pico.css baseline styling.
- Confirm that the HTML remains readable without relying on Pico-specific classes.
