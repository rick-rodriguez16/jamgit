import fs from 'node:fs';

export function makeDirectory(pathName) {
    if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName);
        return {
            "msg": "Initialized empty Jamgit repository in ", 
            "dir": `${process.cwd()}/.jamgit`,
        }
    }
    else if (fs.existsSync(pathName)) {
        return {
            "msg": "Jamgit repository already exists at ", 
            "dir": pathName,
        }
    }
    else {
        throw new Error("Something happened while trying to initialize jamgit-init!")
    }
}

export function makeMultiLevelDirectories(pathName) {
    if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName, {recursive: true});
    }
    else if (fs.existsSync(pathName)) {
        throw new Error(`File ${pathName} already exists.`)
    }
    else {
        throw new Error("Something happened while trying to initialize jamgit-init!")
    }
}
