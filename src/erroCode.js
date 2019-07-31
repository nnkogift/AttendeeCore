let errorCode = {
    NO_FOLDER_CODE : 100,
    NO_FOLDER_MESSAGE : "Project folder does not exist",
    INIT_PROJECT_CODE : 101,
    INIT_PROJECT_MESSAGE : "Project fails to be initialized",
    DOMAIN_ALL_CODE: 102,
    DOMAIN_ALL_MESSAGE: "Fails to get all the domains available",
    DOMAIN_CREATE_CODE: 103,
    DOMAIN_GET_CODE: 104,
    DOMAIN_GET_MESSAGE: "Can't get you a domain you request",
    REPO_ALL_CODE: 105,
    REPO_ALL_MESSAGE: "Failed to get all the repository available",
    REPO_GET_CODE: 106,
    REPO_GET_MESSAGE: "Failed to get a domain you request",
    GIT_DELETE_FOLDER_LOCAL_CODE: 107,
    GIT_DELETE_FOLDER_LOCAL_MESSAFE: "Fail to delete local project folder",
    GIT_PULL_CODE: 108,
    GIT_PULL_MESSAGE: "Fail to update project from git",
    GIT_REMOTE_ADD_CODE: 109,
    GIT_REMOTE_ADD_MESSAGE: "Fail to add remote repository",
    GIT_REMOTE_GET_CODE: 200,
    GIT_REMOTE_GET_MESSAGE: "Fail to get remote repository",
    GIT_REMOTE_DELETE_CODE: 201,
    GIT_REMOTE_DELETE_MESSAGE: "Fail to delete remote repository",
    GIT_REMOTE_PUSH_CODE: 202,
    GIT_REMOTE_PUSH_MESSAGE: "Fail to push to remote repository"
}

module.exports = errorCode;
