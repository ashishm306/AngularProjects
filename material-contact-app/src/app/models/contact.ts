export default class Contact {
    public id: number;
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public City: string;
    public Age: number;
    public Phone: string;

    constructor() {
        this.id = 0;
        this.FirstName = '';
        this.LastName = '';
        this.Email = '';
        this.City = '';
        this.Age = 0;
        this.Phone = '';
    }
}