# Git "multiplayer" exercise

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


## How to start working on this repository

1. Clone the repository to your local machine or open it in a web-based IDE such as GitHub Codespaces:

   ```
   git clone <repository-url>
   ```

> [!TIP]
> Using a development container or Codespace is optional. You are not expected to install any dependencies or run any scripts during this exercise. The focus is on using Git to manage changes in a collaborative environment.

## How to complete a task

1. Create a new branch for your task:
   ```
   git checkout -b <your-branch-name>
   ```

2. Make the necessary changes to the codebase.

3. Test your changes to ensure they work as expected.

   While running a local http server is not required, you may use a simple http server to test your changes. For example, you can use Python's built-in http server:

   ```
   python3 -m http.server src
   ```

   Microsoft has also published a [live server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension for VS Code, which can be used to run a local http server and automatically reload the page when changes are made.

4. Commit your changes:

   ```
   git status           # see which files have changed
   git add <files>      # add changes to the staging area
   git commit -m "Describe your changes"
   ```

   It is also recommended to include the issue number in your commit message. GitHub will automatically link the issue with your commit, which makes it easier to track progress. Also, consider using the "Fixes #issue-number" syntax in your commit message to automatically close the issue when the pull request is merged:

   ```
   git commit -m "Change password input type to 'password'. Fixes #1."
   ```

   You can read more about [closing issues via commit messages in the GitHub blog](https://github.blog/news-insights/product-news/closing-issues-via-commit-messages/).

5. Push your branch to the remote repository:
   ```
   git push -u origin <your-branch-name>
   ```
   The `-u` flag sets the upstream for your branch, so in the future you can just use `git push` without specifying the branch.

6. Create a pull request to merge your changes into the main branch. Either use the GitHub website or the GitHub CLI.


## Notes

- Always pull the latest changes from the main branch before starting a new task.
- Keep your branches focused on a single task to make code reviews easier.
- Write clear and descriptive commit messages.
- When there are changes in the main branch, rebase your branch onto the latest main branch.


## About the exercise

This exercise has been created by Teemu Havulinna and is licensed under the [Creative Commons BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/4.0/).

AI tools such as ChatGPT and GitHub Copilot have been used in the implementation of the task description, source code, data files and tests.
