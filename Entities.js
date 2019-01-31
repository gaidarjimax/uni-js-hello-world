class Customer{

    constructor( name, age, gender )
    {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
        this.guid   = generateGuid();
    }

    static fact( name, age, gender )
    {
        if( ! Customer.validateCustomer() )
            console.log( 'Invalid customer data' );
        else
            return new Customer( name, age, gender );
    }

    static validate( name, age, gender )
    {
        if( name instanceof Customer )
            return true;
        if( !( typeof name == 'string' || name instanceof String ) )
            return false;   
        if( name.length <= 0 || name.length > 50 )
            return false;
        if( ! Number.isInteger( age ) )
            return false;
        if( age <= 1 || age > 120 )
            return false;
        if( ! typeof gender === 'boolean' )
            return false;

        return true;
    }
}

class Event{
    constructor( title, hasFreeAccess )
    {
        this.title          = title;
        this.hasFreeAccess  = hasFreeAccess;
        this.guid           = generateGuid();   
        this.customers      = [];
    }

    toString(){
        var str = this.title;
        str += this.hasFreeAccess ? ' : 18+' : '';
        return str;
    }

    static fact( title, hasFreeAccess ){
        if( ! Event.validate( title, hasFreeAccess ) ){
            console.log( 'Invalid event data' );
            return;
        }
        if( hasFreeAccess == undefined )
            hasFreeAccess   = true;

        if( title instanceof Event )
            return new Event( title.title, title.hasFreeAccess )

        return new Event( title, hasFreeAccess )
    }

    static validate( title, hasFreeAccess ) {
        if( title instanceof Event )
            return true;
        if( !( typeof title == 'string' || title instanceof String ) )
            return false; 
        
        return true;
    }
}

