1) commit vs push
commit - snapshot of the project with acommit message
       - it basically save the changes only in the local repository
       -git commit -m "msg"
push   -updates the remote repository with your latest commits.
       -Uploads committed changes to the remote GitHub repository.
       -git push origin main

2)what is a branch?
-independent copy of your project's code
-can make changes without affecting the main branch.
-Keeps the main branch stable and unaffected.
-Multiple branches can exist at the same time.
-Branches can later be merged into the main branch.
-git checkout -b thenewbranchname

3)what a Pull Request does?
-A request to merge changes from one branch into another
-Used to propose changes before merging.
Create a branch.
Make commits.
Push the branch.
Open a Pull Request.
Review and merge it into main.

4)What is the Staging Area?
-The staging area is a temporary place where you prepare changes before creating a commit.
-Holds selected changes before committing.
-Changes are added using git add.
-Files remain staged until you commit or unstage them.
-Helps create clean and meaningful commits.

5)What is .gitignore?
-A .gitignore file tells Git which files or folders should not be tracked or uploaded to the repository.
-Prevents unnecessary files from being committed.
-Keeps sensitive files (such as API keys or passwords) out of GitHub.
-Commonly ignores log files, cache files, and build folders.
examples are .log,.env etc