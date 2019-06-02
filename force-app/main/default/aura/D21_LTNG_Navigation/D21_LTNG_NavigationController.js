({
	NavigationtoRecord : function(component, event, helper) {
		//0016F00003G4XLAQA3
		var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId": '0016F00003G4XLAQA3' //component.get("v.contact.Id")
        })
        sObjectEvent.fire();
	}
})