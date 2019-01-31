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
    constructor( title, hasFreeAccess, price )
    {
        this.title          = title;
        this.hasFreeAccess  = hasFreeAccess;
        this.guid           = generateGuid();   
        this.price          = price;
        this.customers      = [];
    }

    toString()
    {
        var str = this.title;
        str = this.hasFreeAccess ? '#' + str : '*' + str + ' : 18+';
        str = this.price ? '$' + str : '!' + str;
        return str;
    }

    addDate( date )
    {
        if( ! date instanceof Date )
            return false;
        this.addDate = date; 
        return true;
    }

    static fact( title, hasFreeAccess, price )
    {
        if( ! Event.validate( title, price ) ){
            console.log( 'Invalid event data' );
            return false;
        }
        if( hasFreeAccess == undefined )
            hasFreeAccess = true;

        if( price == undefined )
            price = 0;

        if( title instanceof Event )
            return new Event( title.title, title.hasFreeAccess, title.price )

        return new Event( title, hasFreeAccess, price )
    }

    static validate( title ) 
    {
        if( title instanceof Event )
            return true;

        if( !( typeof title == 'string' || title instanceof String ) )
            return false; 
        
        return true;
    }
}

