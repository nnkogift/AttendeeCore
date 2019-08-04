'use strict'

var file = require('fs');
var path = require('path');
var nodeGit = require('nodegit');
var errCode = require('../erroCode');
var GitController = require('./GitController').GitController;

let gitController = new GitController();

module.exports.ProjectController = class{

    /**
     * Bootsrap project follder
     * @param {replace: string} options 
     */
    initializeProject(options){
       return  gitController.clone(options);
    }

    /**
     * Get if project folder exist
     */
    getProjectFolder(){
        return new Promise((resolve, reject)=>{
            file.readdir(path.join(__dirname, '../spring/daas'),(err,files)=>{
                if(err){
                    reject({code: errCode.NO_FOLDER_CODE , message: errCode.NO_FOLDER_MESSAGE, error: e});
                }else{
                    resolve({message: "Folder project exist", folder: files});
                }
            });
        });
    }

    /**
     * check if a git project folder exist
     */
    getGitFolder(){
        return new Promise((resolve, reject)=>{
            nodeGit.Repository.open(path.join(__dirname, '../spring/daas'))
            .then(_=>{
                resolve({message: "Git foler exist"});
            })
            .catch(reason=>{
                reject({code: errCode.GIT_FOLDER_GET_CODE , message: errCode.GIT_FOLDER_GET_MESSAGE, error: reason});
            })
        })
    }

    /**
     * Update git folder against the main bootsrap project
     */
    updateProjectFolder(){
        return gitController.update();
    }
}