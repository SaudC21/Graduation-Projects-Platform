export interface Project {
    id: string;
    title: string;
    description: string;
    keywords: string[];
    repo_link: string;
    supervisor_id: string;
    dept: string;
    semester: string;
}

export class Project implements Project {
    constructor() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.keywords = [];
        this.repo_link = '';
        this.supervisor_id = '';
        this.dept = '';
        this.semester = '';
    }
}