export interface Student {
    uid: string;
    first_name: string;
    last_name: string;
    email: string;
    password_digest: string;
    phone_number: string;
    major: string;
    group_id: string;
 }

 export class Student implements Student{
    constructor(){
        this.uid = '';
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password_digest = '';
        this.phone_number = '';
        this.major = '';
        this.group_id = '';
    }
 }