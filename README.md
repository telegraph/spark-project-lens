# Project Lens

## What is this

A project that is designed to consume the WorkFront API and display metrics that spark teams find useful.


## Requirements

List of requirements used in the project and installation instructions when
necessary.

## Start the project
We recommend using Yarn for this project. Simply `yarn install` in your terminal to install all dependencies. Once installed, start the local project server with `yarn start`

## Conventions

### JavaScript Coding style

The coding style should be enforced by `eslint`. To get a better understanding
of the coding style rules set up in `.eslintrc` you can check:

- [Felix Geisendörfer's node style guide](https://github.com/felixge/node-style-guide)
- [AirBnB's React style guide](https://github.com/airbnb/javascript/tree/master/react)


For `React` components, We prefer the usage of non-class based components. To gain access to class based component lifecycles methods, please use React hooks to achieve the same effect.

### Styling
TBC - Either styled components or css modules

## Folder architecture

### Frontend

The folder architecture should follow a **Component and Container based directory
structure**. All Dumb components should sit in the main Component folder. Any components that are connected to the store or use any logic should be placed inside the Container directory. This helps us differentiate between presentational components and logic components.

### Backend
***TBC***

## Workflow / Tasks
### Git
All code changes should follow the [git-flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) workflow where possible. All features should be placed in a new branch and then a PR to develop should be made. The PR must be approved by at least 1 developer before being merged.

#### Branch naming conventions
When working on the project, please use the following branch name conventions:

*FEATURE-name-of-feature
BUGFIX-name-of-bugfix
HOTFIX-name-of-hotfix*


When you create a new branch, please assign that new branch to the [trello board]. (https://trello.com/b/hvLQiVqE/project-lens) The name of the card should be identical to that of the branch.

## Tests
A TDD approach has been taken to this project, so if applicable all test should be written before writing any production code. The Red, Green, Refactor methodology should be used here (write a test that fails, make it pass and refactor). Test are ran in Jest. 

A good test will:

**Arrange:** Setup dependencies
**Act:** Execute production code in test
**Assert:** Checks that expectations are met

## Commands

### Frontend

- `yarn run build`: Build the project.
- `yarn start`: Starts the local project.


### Backend

TBC

## Deployment
TBC

## Documentation

TBC