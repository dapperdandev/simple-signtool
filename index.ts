import * as path from 'path';
import * as child from 'child_process';

const signtool = path.join(__dirname, 'vendor', 'signtool.exe');

function execute(command: string) {
    child.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(stdout);
    })
}

/** 
 * Sign a specified file with given signtool options 
 * @param target The target file that will be signed
 * @param options Sign options
*/
export function sign(target: string, options: string): void {
    execute(`${signtool} sign ${options} ${target}`);
}
