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

        if( ev.maxPeople == ev.customers.length )
        {
            ev.full = true;
            return;
        }
        
        if( ! ev.hasFreeAccess && customer.age < 18 )
            return false;
        
        if( Number.isInteger( this.price ) )
            customer.wallet -= this.price;

        if( customer.wallet <= 0 )
        {
            customer.wallet = 0;
            return false;
        }
        ev.customers.push( customer.guid ); 

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

    //Pass here i => i.hasFreeAccess to show events with free access, 
    //or any other predicate to filter by other criteria. 
    resetUI( callback )
    {
        var events = this.events;

        if( callback != undefined )
            events = events.filter( callback );

        var innerHtml = '';

        events.map( element =>{
            innerHtml += '<li><div style="display:flex; flex-direction : row" class="eventDiv" id="' 
                      + element.guid + '"><p>' 
                      + element.toString() + '<p><button>Delete</button></div></li>'
        });

        var arr = document.getElementsByClassName( 'eventDiv' );
        document.getElementById( 'eventList' ).innerHTML = innerHtml;

        Array.from( arr ).map( i => {
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

evMan.addEvent( Event.fact( 'edsasa', true, 12 ) );
evMan.addEvent( Event.fact( 'edfasa', false ) );
evMan.addEvent( Event.fact( 'edavsa', true, 433 ) );
evMan.addEvent( Event.fact( 'edaadsa', true ) );
evMan.addEvent( Event.fact( 'edaafasa', false, 656 ) );
evMan.addEvent( Event.fact( 'edasa', true ) );
evMan.addEvent( Event.fact( 'edasa', false ) );




