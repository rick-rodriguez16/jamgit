#!/usr/bin/env node
console.log("Hello from jamgit-init!")
import { makeDirectory, makeMultiLevelDirectories } from "../lib/file-system/dir-create.js";

const rootDir = './.jamgit';
const branchesDir = `${rootDir}/branches`;
const hooksDir = `${rootDir}/hooks`;
const infoDir = `${rootDir}/info`;
const objectsInfoDir = `${rootDir}/objects/info`;
const objectsPackDir = `${rootDir}/objects/pack`;
const refsHeadsDir = `${rootDir}/refs/heads`;
const refsTagsDir = `${rootDir}/refs/tags`;


try {
    makeDirectory(rootDir);
    makeMultiLevelDirectories(branchesDir);
    makeMultiLevelDirectories(hooksDir);
    makeMultiLevelDirectories(infoDir);
    makeMultiLevelDirectories(objectsInfoDir);
    makeMultiLevelDirectories(objectsPackDir);
    makeMultiLevelDirectories(refsHeadsDir);
    makeMultiLevelDirectories(refsTagsDir);
} catch (error) {
    console.error("Error: ", error)
}




