import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

const basepath = "E:\\Downloads\\Programs 2.O\\Sigma Web Development Course\\Backend\\Sigma Backend\\Exercise"
let files = await fs.readdir(basepath)
// console.log(files)  

for (const elem of files) {
    const elmarr = elem.split('.')[elem.split('.').length-1]
    if(elmarr != "js" && elmarr!="json" && elem.split('.').length>1){

        if(fsn.existsSync(path.join(basepath , elmarr))){
            fs.rename(path.join(basepath , elem) , path.join(basepath, elmarr ,elem ))
        }else{
            fs.mkdir(elmarr)
        }
        console.log(elem)
    }
}
