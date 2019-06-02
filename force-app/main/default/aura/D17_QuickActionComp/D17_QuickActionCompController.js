({
	SaveAccount: function(component, event, helper) {        
        //debugger;        
		var acName = component.find("acName").get("v.value");
        var acSite = component.find("acName").get("v.value");        
        var svAcc = component.get("c.saveAccountRec");
        svAcc.setParams({
            accName:acName,
            accSite:acSite
        });        
        svAcc.setCallback(this,function(resp){            
            if(resp.getState()){                
                // Display Toast message;
                var resultsToast = $A.get("e.force:showToast"); 				                
                resultsToast.setParams({   
                    "title":"Toast Banner: Account Creation",
                    "message":"Message: Account -- " + acName + " -- created Successfully"
                });
                resultsToast.fire();
                //alert('Account record created Successfully');
                //debugger;                
            }            
        });        
        $A.enqueueAction(svAcc);
	}
})