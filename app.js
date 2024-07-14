const fs = require('fs')
const path = require('path')
const { exit } = require('process')


function createFolders() {
    fs.readdirSync(__dirname).forEach(file => {
        const fileExtension = path.extname(file)
        const folderName = fileExtension.slice(1)
        if(!fileExtension) return;

        if(!fs.existsSync(path.join(__dirname,folderName))){
            fs.mkdirSync(path.join(__dirname, folderName))
            console.log("Directory created:", folderName)
        }

        let newpath = path.join(__dirname, folderName, file)
        let oldpath = path.join(__dirname, file)

        fs.rename(oldpath, newpath, (err) => {
            if (err) {
                console.error("Error moving file:", err)
                return
            }
            console.log("File moved:", file)
        })
    })
}
createFolders()


function moveFiles() {
    console.log("\nCurrent files in directory:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file)
    })
}
moveFiles()


