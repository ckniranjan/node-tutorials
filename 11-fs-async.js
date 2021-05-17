const { readFile, writeFile }  = require('fs')

console.log('Start with the task..');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err.message);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err.message);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt',
            `Here is the result : ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Done with this task.')
            }
        )
    })
})
console.log('Starting next task..')