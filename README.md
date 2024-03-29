# TestGrid Cypress CLI

[![npm version](https://badge.fury.io/js/testgrid-cypress-cli.svg)](https://badge.fury.io/js/testgrid-cypress-cli)

> **Note**: Running Cypress tests on TestGrid is now in public beta. Learn more [here](https://testgrid.com/automate/cypress)
>
> If you are looking for a getting started guide, and a more up-to date documentation, check out the [TestGrid Cypress documentation](https://testgrid.com/docs/automate/cypress)

The `testgrid-cypress-cli` is TestGrid's command-line interface (CLI) which
allows you to run your Cypress tests on TestGrid.

-   [Quick Start](#quick-start)
-   [Documentation](#documentation)
-   [Getting Help](#getting-help)
-   [License](#license)

## Quick Start

Running your first Cypress test suite on TestGrid is super easy - just install our CLI, configure the test run settings and start testing. Here’s a quick start guide to help you get started.

### Step 1: Install the CLI

First, install the TestGrid - Cypress CLI via `npm`:

```bash
# Install the TestGrid Cypress CLI
$ npm install -g testgrid-cypress-cli
```

### Step 2: Configure

Next, set up your TestGrid credentials and configure the browsers that you want to run your tests on. Use the `init` command to generate a sample `testgrid.json` file, or alternatively create one from scratch.

```bash
# Create a sample configuration file for configurations and capabilities
$ testgrid-cypress init
```

Fill in the `auth`, `browsers`, `run_settings` values in the `testgrid.json` file to be able to run your tests. Refer to the [configuration options](https://testgrid.com/docs/automate/cypress#configure-test-run-settings) to learn more about all the options you can use in `testgrid.json` and the possible values that you can mention.

Make sure you also specify the `npm` packages that your tests need to run using the `npm_dependencies` option in `run_settings`.

### Step 3: Run your tests

After you specify the required run settings, you can run your tests on TestGrid:

```bash
$ testgrid-cypress run
```

After the tests are successfully submitted, you can access the test results on the [TestGrid Automate dashboard](https://automate.testgrid.com/dashboard/v2)

To learn more about the different options the CLI supports - like running tests in parallel, running  tests on `localhost` URLs etc., refer to the [TestGrid Cypress documentation](https://testgrid.com/docs/automate/cypress)

## Documentation

Here are a few important links to get you started and help you  successfully integrate the CLI into your CI/CD pipelines.

-   [List of supported browsers & OS](https://testgrid.com/list-of-browsers-and-platforms?product=cypress_testing)
-   [Tutorial with the Kitchen Sink sample app](https://testgrid.com/docs/automate/cypress#sample-tutorial)
-   [Run Tests in Localhost / Dev / Staging Environments](https://testgrid.com/docs/automate/cypress#run-tests-in-dev-environments)
-   [Run Tests in Parallel](https://testgrid.com/docs/automate/cypress#run-tests-in-parallel)
-   [Run Tests in CI/CD](https://testgrid.com/docs/automate/cypress#run-tests-in-cicd)
-   [CLI Reference](https://testgrid.com/docs/automate/cypress#cli-reference)

## Getting Help

If you need any help, want to share feedback or report issues while running the tests, reach out to us on support@testgrid.com.

## License

This project is released under MIT License. Please refer the
[LICENSE.md](LICENSE.md) for more details.
