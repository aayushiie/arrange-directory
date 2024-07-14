const fs = require('fs')
const path = require('path')
const { exit } = require('process')


function createFolders() {
    fs.readdirSync(__dirname).forEach(file => {
        const fileExtension = path.extname(file)
        // console.log(fileExtension)

        // const fileName = path.parse(file)
        const strFile = fileExtension.toString()
        // console.log(strFile)

        const fileName = strFile.slice(1, strFile.length)
        // console.log(fileName)

        // let fileExists = fs.existsSync(path.join(__dirname, file))
    
        fs.mkdir(path.join(__dirname, fileName), (err) => {
            if(err) {
                exit
            } console.log('directory created')
        })
    })
}

createFolders()

function currentFiles() {
    console.log("\nCurrent files in directory:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file)
    })
}

currentFiles()
