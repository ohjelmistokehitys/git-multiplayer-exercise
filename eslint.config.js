import html from "@html-eslint/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // lint html files
    {
        files: ["**/*.html"],
        plugins: {
            html,
        },
        language: "html/html",
        rules: {
            "html/require-lang": "error",
            "html/require-img-alt": "error",
            "html/require-doctype": "error",
            "html/require-title": "error",
            "html/no-multiple-h1": "error",
            "html/no-extra-spacing-attrs": "error",
            "html/no-duplicate-id": "error",
            "html/require-li-container": "error",
            "html/quotes": "error",
            "html/no-obsolete-tags": "error",
            "html/no-obsolete-attrs": "error",
            "html/require-closing-tags": "error",
            "html/no-duplicate-attrs": "error",
            "html/use-baseline": "error",
            "html/no-duplicate-in-head": "error",
        },
    }
]);
