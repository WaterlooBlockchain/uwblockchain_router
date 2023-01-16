# Table of content
1. [Project architecture & Design choices](#project-architecture-and-design-choices)
    - [Design Patterns](#design-patterns)
    - [Technology Stack](#technology-stack)
2. [Environment Setup](#environment-setup)
    - [Local](#dependencies-for-running-the-project-locally)
    - [With DevContainers](#prerequesites-for-dev-containers)
3. [OpenZeppelin](#openzeppelin)
    - [What is OpenZeppelin?](#what-is-openzeppelin)
    - [What is OpenZeppelin Defender?](#what-is-openzeppelin-defender)
    - [What is OpenZeppelin Tenderly?](#what-is-openzeppelin-tenderly)

## Project Architecture and Design Choices
## Design Patterns
## Technology Stack
- React.js
- Solidity + Hardhat
## Environment Setup
In order to simplify the developer experience, we will be using devcontainers.

### Dependencies for running the project locally
1. Install Node.js on your machine
    - [Windows](https://nodejs.org/en/download/)
    - [MacOS](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
    - [Linux](https://nodejs.org/en/download/package-manager/) (Make sure to select the right package manager for your distro)

### How to launch the project locally
1. From the root project folder:
    - Frontend:
        - ```cd frontend/```
        - ```npm install && npm run dev```
    - Hardhat:
        - ```cd hardhat/```
        - ```npm install```

### Prerequesites for Dev Containers
1. Install Docker on your machine
    - [Windows](https://docs.docker.com/desktop/install/windows-install/)
    - [Mac OS](https://docs.docker.com/desktop/install/mac-install/)
    - [Linux](https://docs.docker.com/desktop/install/linux-install/) (Make sure to follow the specific instructions for your distro)
2. Install [VSCode](https://code.visualstudio.com/docs/setup/setup-overview)
3. Install Devcontainer extension
    - [Tutorial](https://code.visualstudio.com/docs/editor/extension-marketplace) for installing extensions
    - Make sure that the extension id is: ```ms-vscode-remote.remote-containers```

### How to launch the project locally using Dev Containers
1. Open the project in VSCode
2. Quick start: Open an existing folder in a container ([Tutorial](https://code.visualstudio.com/docs/devcontainers/containers))
    - Start VS Code, run the ```Dev Containers: Open Folder in Container...``` command (or something similar) from the Command Palette (F1 or Command-Shift-P for Mac users) or quick actions Status bar item, and select the project folder you would like to set up the container for.
3. After the container has started, from the root project folder:
    - Frontend:
        - ```cd frontend/```
        - ```npm install && npm run dev```
    - Hardhat:
        - ```cd hardhat/```
        - ```npm install```

## OpenZeppelin
## What is OpenZeppelin

## What is OpenZeppelin Defender

## What is OpenZeppelin Tenderly
