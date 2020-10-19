# react-redux-starter-template

---

## Contribution Guidelines

A lot of people complain about redux having too much boilerplate which makes them uncomfortable when they are about to start a new project. <br />

This project is centered around creating all the boiler plate you need to get you up and running as soon as you can. Please feel free to contribute. Cheers!
<br /> <br />
We will be building a simple counter App which implements redux in both **class component** and **functional component**, Please check the issues for more info

-   ## I am not familiar with redux. Can i still contribute?

    Yes you can. You don't have to be familiar with redux, all you need is to be ready to learn, This will get you started on time. Go to [react redux](https://react-redux.js.org/) to get started and come back to pick the issue you feel you can work on.

-   ## Should I commit to main branch directly
    No! checkout to a branch before you start any contribution.
    The name of the branch should be similar to the issue you are working on.
    E.G Say you are working on **comment** issue the name of your branch will be **comment**
    <br />
    ### NB:
    ```
    All PR sent to main branch will be considered invalid
    ```
    ```
    Before working on any issue, please check to confirm if it has not been assigned to anyone.
    ```
-   ## What about CSS Library?

    Only CSS or it's preprocessor (SASS) will be allowed for this project. We want to make it more flexible in such a way that the user can decide on which design component they would like to use for their product.

## Instructions-

-   Fork this Repository using the button at the top
-   Clone your forked repository to your pc ( git clone `https://github.com/joshtom/react-redux-starter-template.git`)
-   Create a new branch for your modifications (ie. `git branch new-user` and check it out `git checkout new-user` and `git checkout -b new-user`)
-   Run `npm` from inside the cloned project and run `npm start` after the previous command execution.
-   See the issues from the https://github.com/indeplot/indeplot/issues and comment and ask for working
-   After your assigned work do the following
-   Add your files (`git add -A`), commit (`git commit -m "added myself"`) and push (`git push origin new-user`)
-   Create a pull request to the `main` branch and your pull request title must contain your work short title
-   Star this repository

#### If your branch is not fully updated with the develop branch please follow the below instructions before making any PR

> CAUTION: Synch up your local repo with [original repo](https://github.com/joshtom/react-redux-starter-template) (Upstream) before pushing your commits.
> This avoids unnecessary conflicts during the merge.

> NOTE: You can do so by adding a [remote handler](https://www.atlassian.com/de/git/tutorials/syncing) reference to the original repo and pull the changes from the respective branch.
> Resolve the [merge-conflicts](https://www.atlassian.com/de/git/tutorials/using-branches/merge-conflicts) if any.

> ```bash
> #Add upstream repo
> git remote add upstream https://github.com/joshtom/react-redux-starter-template.git
>
> #Disable accidental push to the upstream
> git remote set-url --push upstream DISABLE
>
> #List the remote repo and fetch references
> git remote -v && git fetch upstream
>
> #Check for any new commits in the upstream branch
> git log HEAD..upstream/main #No output indicates, upstream has not moved ahead
>
> #See the patch difference between local and upstream branch
> git diff -p HEAD..upstream/main
>
> ```

> CAUTION: If the upstream has moved ahead, rebase your commit and resolve conflicts if any. [Skip otherwise]
>
> ```bash
> git rebase upstream/main
> ```

**7.** Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [react-redux-starter-template](https://github.com/joshtom/react-redux-starter-template) project.

## Installation

Before you begin contributing, you should install all the dependencies <br />

```
npm install
```

This will allow you to get the dependecies being used on this project.

## Ground Rules

Breaking any of these rules will result in your pull request being closed. Please follow these guidelines above all else:

-   **Always be polite and respectful to others and try to follow the advice of the moderators/collaborators/owners.**
-   **Only modify the file / folder the issue you are working on is being labelled with**
-   **Notify the moderator if you want to add more issues / Enhancement**

## Do you feel like this Readme is incomplete?

Please feel free to notify me in the issue created for this to add more. :)
