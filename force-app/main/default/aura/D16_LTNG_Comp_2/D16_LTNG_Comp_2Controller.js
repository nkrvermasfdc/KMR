({
	handleApplicationEvent : function(component, event, helper) {
		var paramFromComp_1 = event.getParam("EventParam1");
        debugger;
        
        //Calling Apex Controller;
        var accGet = component.get("c.fetchAccounts");

        //Passing Arguments for Apex Controller;
        accGet.setParams({
            accInd: paramFromComp_1
        });
        
        //Collecting return values from Apex Controller;
        accGet.setCallback (this,function(resp){
            if(resp.getState() == 'SUCCESS'){
                debugger;  
                component.set("v.AccList",resp.getReturnValue());
            }
        });
        
        $A.enqueueAction(accGet);
	}
})