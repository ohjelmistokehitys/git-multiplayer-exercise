Add a "Remember me" checkbox to the login form. This checkbox should allow users to stay logged in on the device.

You don't need to worry about any backend functionality, the HTML will do just fine. Maybe something like this could do?

```html
<fieldset>
    <label>
        <input type="checkbox" name="remember" checked />
        Remember me
    </label>
</fieldset>
```