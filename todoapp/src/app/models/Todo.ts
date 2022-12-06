export class Todo {
    public id: string;
    public todo: string;
    public isCompleted: boolean;
    constructor() {
        this.id = '';
        this.todo = '';
        this.isCompleted = false;
    }
}