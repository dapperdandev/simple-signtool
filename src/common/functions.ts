import * as child from 'child_process';

export function execute(command: string) {
    child.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(stdout);
    })
}
