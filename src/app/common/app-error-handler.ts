import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(err: any) {
        alert('An unexpected error occured.');
        console.log(err);
    }
}
