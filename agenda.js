class AgendaContact{

    static totalContacts = 0;

    constructor(name, lastName, address, email){
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.idContact = ++AgendaContact.totalContacts;
    }
    toString(){
        return `Contact_number: ${this.idContact}\n |Name: ${this.name}\n |Lastname: ${this.lastName}\n |Address: ${this.address}\n |Email: ${this.email} `;
    }
}

class WorkAgenda extends AgendaContact{
    static workContacts = 0;
    constructor(workArea, name, lastName, address, email){
        super(name, lastName, address, email);
        this.workArea = workArea;
        this.idworkContacts = ++WorkAgenda.workContacts;
    }
    CompleteContact(){
        return ` |Work Area: ${this.workArea},${super.toString()}`;
    }

}
let contact1 = new AgendaContact("Peter", "Harrison", "45 Marion st.","PeterH@yahoo.com");
let contact2 = new AgendaContact("Horace", "Grant","890 Horton Av.", "H_Grant@hotmail.com");

let workAgenda1 = new WorkAgenda("Administration", "Tito", "Ortiz", "54 Retamozo av.", "Tutu@gutol.com");
console.log(workAgenda1.CompleteContact());


console.log(contact1.toString());
console.log(contact2.toString());