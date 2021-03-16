const fs = require('fs');
// const yargs = require('yargs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter the file name:", name => {
    readFileName(name);
    readline.close();
})
// var fileName = yargs.argv.filename;



readFileName = (fileName) => {
    fs.readFile("db/file_name.json", (error, data) => {
        if(error){
            console.log("The file name database does not exist");
        }else{
            console.log("data:",JSON.parse(data));
            let fileList = JSON.parse(data)["files"];
            console.log(fileList);
            if(fileList.includes(fileName)){
                console.log("This file is already created.");
            }else{
                fs.writeFile(fileName, 'You are awesome', (error,data)=>{
                    if(error){
                        console.log("Can't read the file");
                    }else{
                        fileList.push(fileName);
                        let newFile = {
                            "files":fileList
                        }
                        let inputData = JSON.stringify(newFile);
                        console.log(inputData);
                        fs.writeFile("db/file_name.json", inputData, (error, data)=>{
                            if(error){
                                console.error(error.stack);
                            }else{
                                console.log("success!");
                            }
                        })
                    }
                })
            }
        }
    })
}