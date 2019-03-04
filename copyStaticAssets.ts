import * as shell from 'shelljs';
import * as fs from 'fs';

fs.exists('./src/public', (exists: boolean) => {
    if (exists) {
        shell.cp('-R', 'src/public/js/lib', 'dist/public/js/');
        shell.cp('-R', 'src/public/fonts', 'dist/public/');
        shell.cp('-R', 'src/public/images', 'dist/public/');
    }
});
