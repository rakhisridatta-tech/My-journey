# Git Basics

Git is a distributed version control system that helps developers track changes, collaborate with teams, and manage different versions of a project. It allows multiple developers to work on the same project efficiently without losing previous work.

---

# 1. git clone

## Purpose
Creates a copy of an existing GitHub repository on your local computer.

### Key Points

- Downloads the complete repository, including all files and commit history.
- Creates a local working copy where you can make changes.
- Connects your local repository to the remote GitHub repository.
- Used when starting work on an existing project.
- Example: git clone https://github.com/username/repository-name.git

# 2. git status

## Purpose
Displays the current state of your local repository.

### Key Points

- Shows which files have been modified.
- Identifies newly created (untracked) files.
- Indicates which files are staged and ready to commit.
- Helps verify your changes before committing.
- Example: git status

# 3. git add

## Purpose
Moves selected files to the staging area before creating a commit.

### Key Points

- Stages changes that you want to include in the next commit.
- Can stage a single file or all modified files.
- Does not save changes permanently; it prepares them for committing.
- Allows you to choose exactly what changes to commit.
- Example:git add .
  git add filename.md

# 4. git commit

## Purpose
Saves the staged changes as a new version in the local Git repository.

### Key Points

- Creates a permanent snapshot of your staged files.
- Every commit should include a meaningful message describing the changes.
- Helps maintain a clear history of the project.
- Commits are stored locally until they are pushed to GitHub.
- Example:git commit -m "Added Git basics notes"

# 5. git push

## Purpose
Uploads your local commits to the remote GitHub repository.

### Key Points

- Sends committed changes from your local repository to GitHub.
- Updates the remote repository with your latest work.
- Makes your changes available to collaborators.
- Usually performed after every successful commit.
- Example:git push origin main or git push origin master
  
