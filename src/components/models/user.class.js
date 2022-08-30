import { ROLES } from './roles.enum'

export class User {
    username = '';
    email = '';
    password = '';
    roles = ROLES.USER;
    
    constructor(username, email, password, roles ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles
    }
    
}