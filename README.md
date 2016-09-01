# sass-theme-boilerplate

Simple starter project for SASS based templates and themes.

## Prerequisites

Node.js and npm are needed to setup the boilerplate. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

## Create a new project based on the boilerplate

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/lenilsondc/sass-theme-boilerplate.git  my-proj
cd my-proj
```

You can discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo (if you like)

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install dependencies

Install the npm packages.

```bash
npm install
```

## Run

Start up gulp tasks.

```bash
npm start
```
