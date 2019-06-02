({
	handleKeyUp : function(component, event, helper) {
		var isEnterKey = false;
        
        if (event.keyCode === 13){
            isEnterKey = true;
        }
        else{
            isEnterKey = false;
        }
        
        if (isEnterKey) {
            var queryTerm = component.find('enter-search').get('v.value');
            console.log('Searched for "' + queryTerm + '"!');            
            //alert('Searched for "' + queryTerm + '"!');
            
            //Passing data to Event;
            var evtprm = component.getEvent("sendingParamEvent")
            evtprm.setParams({"param1_AccountName" : queryTerm});	
            evtprm.fire();
             
        }
    }
})