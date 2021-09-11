export interface ISubmitEvent {
    target: HTMLFormElement;
}

export enum FieldNames {
    name = 'name',
    email = 'email',
    password = 'password',
}

export interface IYupErrors {
    path: string;
    message: string;
}
