export interface User {
    uid: string;
    first_name: string;
    last_name: string;
    email: string;
    password_digest: string;
    phone_number: string;
    major: string;
 }

 export class User implements User{
    constructor(){
        this.uid = '';
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password_digest = '';
        this.phone_number = '';
        this.major = '';
    }
 }