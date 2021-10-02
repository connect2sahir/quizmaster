export class User {
    id:number=0;
    username:string='';
    firstname:string='';
    lastname:string='';
    emailid:string='';
    password:string='';
    mobile:string='';

    constructor(json: any) {
        if (json != null) {
            this.id = json.Id;
            this.username = json.username;
            this.firstname = json.firstname;
            this.lastname = json.lastname;
            this.password = json.password;
            this.emailid = json.emaildID;
            this.mobile = json.mobile;
 

        }
    
    }
    
   
}
