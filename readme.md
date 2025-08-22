# Git "multiplayer" practice

This repository consists of a simple HTML and CSS application that displays a login form, but does not include any actual functionality.

The goal of this exercise is to make minor modifications to the codebase and practice using Git in a collaborative environment.

Each change is to be made in a separate short-lived branch. It is vital to continuously integrate changes back into the main branch to avoid complex conflicts and ensure a smooth workflow.

Each task in this exercise is designed to be completed by a different team member, promoting collaboration and communication.


## Tasks

Issue | Branch         | Description                                  | Priority | Category
------|----------------| ---------------------------------------------|----------|------
[#1]  | type-password  | Change the password input type to "password" | High     | Security
[#2]  | method-post    | Change the form method to "POST"             | High     | Security
[#3]  | pico-css       | Add Pico.css for styling                     | Medium   | UI/UX
[#4]  | remember-me    | Add a "Remember me" checkbox                 | Medium   | Authentication
[#5]  | forgot-password| Add a "forgot password" link                 | Medium   | Authentication
[#6]  | type-email     | Change the email input type to "email"       | Low      | UI/UX
[#7]  | required-input | Make both email and password inputs required | Low      | UI/UX

[#1]: /../../issues/1
[#2]: /../../issues/2
[#3]: /../../issues/3
[#4]: /../../issues/4
[#5]: /../../issues/5
[#6]: /../../issues/6
[#7]: /../../issues/7


## How to complete a task

1. Create a new branch for your task:
   ```
   git checkout -b <your-branch-name>
   ```

2. Make the necessary changes to the codebase.

3. Test your changes to ensure they work as expected.

4. Commit your changes:
   ```
   git add <files>
   git commit -m "Describe your changes"
   ```

5. Push your branch to the remote repository:
   ```
   git push -u origin <your-branch-name>
   ```

6. Create a pull request to merge your changes into the main branch.


## Notes

- Always pull the latest changes from the main branch before starting a new task.
- Keep your branches focused on a single task to make code reviews easier.
- Write clear and descriptive commit messages.
- When there are changes in the main branch, rebase your branch onto the latest main branch.
