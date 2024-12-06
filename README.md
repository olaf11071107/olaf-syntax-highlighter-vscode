# Olaf Syntax Highlighter

This VSCode extension provides syntax highlighting, IntelliSense, and advanced tools for the Olaf programming language.

## Features

- Syntax highlighting
- IntelliSense (code completion and hover tips)
- Code formatting
- Predefined snippets
- Olaf-specific color theme
- Error diagnostics

## Installation

1. Clone this repo.
2. Open in VSCode.
3. Run `npm install`.
4. Press `F5` to test in a new VSCode instance.

## Olaf Syntax Example

```olaf
class Person:
    build constructor(name):
        snowball this.name = name
    end

    build greet:
        say "Hello, " + this.name
end
```
