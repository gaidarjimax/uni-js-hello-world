class User{
    constructor( name, age, gender ){
        if( typeof name === 'string' )
            console.log();
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }
    validateConst( name, age, gender )
    {
        if( ( typeof name == 'string' || name instanceof String ) )
            return false;
        if( ! Number.isInteger( age ) )
            return false;
    }
}