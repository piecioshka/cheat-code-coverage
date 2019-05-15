# cheat-code-coverage

[![dependencies](https://david-dm.org/piecioshka/cheat-code-coverage.svg)](https://github.com/piecioshka/cheat-code-coverage)
[![travis](https://img.shields.io/travis/piecioshka/cheat-code-coverage.svg)](https://travis-ci.org/piecioshka/cheat-code-coverage)
[![coveralls](https://coveralls.io/repos/github/piecioshka/cheat-code-coverage/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/cheat-code-coverage?branch=master)
[![snyk](https://snyk.io/test/github/piecioshka/cheat-code-coverage/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/cheat-code-coverage?targetFile=package.json)

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

Result is the same in both strategies.

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019