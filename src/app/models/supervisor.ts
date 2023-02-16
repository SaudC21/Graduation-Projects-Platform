export interface Supervisor {
    uid: string;
    first_name: string;
    last_name: string;
    email: string;
    password_digest: string;
    phone_number: string;
    major: string;
    interests: string[];
 }

 export class Supervisor implements Supervisor{
    constructor(){
        this.uid = '';
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password_digest = '';
        this.phone_number = '';
        this.major = '';
        this.interests = [];
    }
 }