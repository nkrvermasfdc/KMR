({
	fireApplicationEvent: function(component, event, helper) {
		var selected_Option = event.getSource().get('v.value');
        
        var appEvent = $A.get("e.c:D16_LTNG_AppEvent");
        
        appEvent.setParams({
            "EventParam1": selected_Option
        });
        
        appEvent.fire();
        //alert("Selected Option ==> " + selected_Option);
        //debugger;
	}
})