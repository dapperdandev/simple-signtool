import * as child from 'child_process';

export function execute(command: string): void {
    child.exec(command, (err, stdout): void => {
        if (err) {
            console.error(err);
            throw err;
        }

        console.log(stdout);
    });
}
