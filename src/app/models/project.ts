export interface Project {
    id: string;
    title: string;
    description: string;
    repo_link: string;
    supervisor_id: number;
    dept: string;
    semester: string;
}

export class Project implements Project {
    constructor() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.repo_link = '';
        this.supervisor_id = 0;
        this.dept = '';
        this.semester = '';
    }
}