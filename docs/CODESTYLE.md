# Code Style

## React Memoization

Do not use or retain `useMemo`. The React Compiler is enabled and handles memoization automatically; prefer direct calculations in components.

## Code Implementation Guidelines

Follow these rules when you write code:

- Use early returns whenever possible to make the code more readable.
- Prefer DaisyUI classes for styling HTML elements. Use Tailwind utility classes next; avoid CSS or tags.
- Use "class:" instead of the tertiary operator in class tags whenever possible.
- Use descriptive variable and function/const names. Also, event functions should be named with a "handle" prefix, like "handleClick" for onClick and "handleKeyDown" for onKeyDown.
- Implement accessibility features on elements. For example, a tag should have a tabindex="0", aria-label, on:click, and on:keydown, and similar attributes.
- Use consts instead of functions, for example, "const toggle = () =>". Also, define a type if possible.