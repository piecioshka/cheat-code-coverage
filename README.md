# cheat-code-coverage

How to cheat code coverage calculations?

## Answer

Choose strategy:

* **typical**:

    ```bash
    npm run test:typical
    npm run coverage:typical
    ```

* **cheat**, which try to execute all members in `try..catch` block:

    ```bash
    npm run test:cheat
    npm run coverage:cheat
    ```

Result **is the same** in both strategies :warning:

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
