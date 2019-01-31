class EventMan{
    constructor(){
        this.events  = [];
    }

    addEvent( event )
    {
        if( Event.validate( event ) )
        {
            this.events.push(event);
            return true;
        }
        return false;
    }
    addCustomer( evGuid, customer )
    {
        if( !( typeof evGuid == 'string' || evGuid instanceof String ) )
            return false; 
        
        var ev = this.events.reduce( i => i.guid == evGuid );

        if( ev == undefined || ! Customer.validate( customer ) )
            return false;

        if( ! ev.hasFreeAccess && customer.age < 18 )
            return false;

        ev.customers.push( customer ); 

        return true;
    }

    removeCustomer( evGuid, custGuid )
    {
        if( !( typeof evGuid == 'string' || evGuid instanceof String ) )
            return false; 
    
        if( !( typeof custGuid == 'string' || custGuid instanceof String ) )
            return false; 

        var ev = this.events.reduce( i => i.guid == evGuid );
        ev.customers.splice( ev.customers.reduce( i => i.guid == custGuid ) );

        return true;
    }

    resetUI()
    {
        var innerHtml = '';

        this.events.forEach( element =>{
            innerHtml += '<li><div style="display:flex; flex-direction : row" class="eventDiv" id="' 
                      + element.guid + '"><p>' 
                      + element.toString() + '<p><button>Delete</button></div></li>'
        });

        var arr = document.getElementsByClassName( 'eventDiv' );
        document.getElementById( 'eventList' ).innerHTML = innerHtml;

        Array.from( arr ).forEach( i => {
            i.click( i => this.remove( i.id ) )
        } )
    }
    remove( guid )
    {
        if( !( typeof guid == 'string' || guid instanceof String ) )
            return false; 

        this.events.splice( this.events.reduce( i => i.guid == guid ), 1 );
    }
}

var evMan = new EventMan();

evMan.add( Event.fact( 'edsasa', true ) );
evMan.add( Event.fact( 'edfasa', false ) );
evMan.add( Event.fact( 'edavsa', true ) );
evMan.add( Event.fact( 'edaadsa', true ) );
evMan.add( Event.fact( 'edaafasa', false ) );
evMan.add( Event.fact( 'edasa', true ) );
evMan.add( Event.fact( 'edasa', false ) );



