# empty-bins

> Generated by SALT [UI5 Kickstarter](https://swugit1.salt-solutions.de/ui5/generator-ui5)

## Features

- Deployment
- Linting
- Minifing and building e.g. `Component-preload.js` for production usage
- Auto completion in Visual Studio Code

## How-to

### Deploying via GitLab (Best Practice)

Check settings in ui5.yaml file (package, bspContainer, bspContainerText and transport settings).
Create the following keys to their corresponding values in [GitLab](https://swugit1.salt-solutions.de).
There are two ways to do that:

- Create the variables at project level (`Groups` → `YourGroup` → `Settings` → `Pipelines`)
- Create the variables on a group level (`Projects` → `YourProject` → `Settings` → `Pipelines`)

If you have more than one project in your group with the same deployment settings then it makes more sense to use the group specific variables.

For more information about the deployment settings check out the [ui5-task-nwabap-deployer](https://github.com/pfefferf/ui5-nwabap-deployer/blob/master/packages/ui5-task-nwabap-deployer/README.md#configuration-options-in-yourappui5yaml).

#### Environment Variables

| Environment Variable               | Description              | Example                                  |
|------------------------------------|--------------------------|------------------------------------------|
| UI5_TASK_NWABAP_DEPLOYER__USER     | SAP User username        | xyz                                      |
| UI5_TASK_NWABAP_DEPLOYER__PASSWORD | SAP User password        | myPassword                               |


Be careful, currently you can't use a `$` char as a environment variable ([issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/27436)).

### Deploying local (if gitlab is not available) 
Check settings in ui5.yaml file (package, bspContainer, bspContainerText and transport settings). 

Maintain your credential in a file named ".env" in the root of your project:
```
UI5_TASK_NWABAP_DEPLOYER__USER=xyz
UI5_TASK_NWABAP_DEPLOYER__PASSWORD=myPassword
```

After that you can deploy via `npm run deploy`

#### View version

To get the actual version which was deployed, open the `version.txt` instead of the `index.html`. This file contains the last Git commit info, date and author.

### Requirements

- Netweaver 7.40+
- Activated SICF path `/sap/bc/adt`
- Authorization to use the ADT Services and to create/modify BSP applications

## Development toolchain

### `npm start`

This will start a local development server with auto reload functionality. All requests to the files which does not exist locally will be proxied through the proxy which is configured in the [ui5.yaml](ui5.yaml) ui5-middleware-proxy-basicauth customMiddleware.

### `npm run build`

With this command you can create a bundled version for the production use case in the `dist` folder. For the continuous integration the same routine will be used.

## Visual Studio Code

### Extensions

Once you open the project, there is a notification in the bottom right that there are extensions recommending for this repository, just click on "Install all".

### Auto completion

- Install the packages by using npm (`npm install`)
- Restart [Visual Studio Code](https://code.visualstudio.com)
- Now it's working, try e.g. `new sap.m.` and press `STRG` + `Space bar`

## Folder structure

The folder structure is the same as in the SAP Web IDE Full-Stack except that all controllers will inherit from the [project-controller](./webapp/salt/project-controller.js). This controller does inherit from the [salt-controller](./webapp/salt/salt-controller.js), which should not be modified, because it can be updated. For documenation check [this](https://swugit1.salt-solutions.de/ui5/generator-ui5/wikis/salt-controller.js) link out. For all project specific methods, use the project-controller.

## Contributing

For adding new features, fixing bugs and so on, just create a merge request on the main [repository](https://swugit1.salt-solutions.de/ui5/generator-ui5).