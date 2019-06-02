({
	parentComp_HandlerAction : function(component, event, helper) {
		//debugger;
        var prmrespon = event.getParam("param1_AccountName");
        
        var accdef = component.get("c.getAccList");
        accdef.setParams({
            str : prmrespon
        });
        
        accdef.setCallback(this, function(resp){
            if (resp.getState()){
                //debugger;
                component.set("v.accountListRecs",resp.getReturnValue());
                debugger;
                
                if(resp.getReturnValue().length>0){
                    component.set("v.isRecordsAvailable",true);
                }
                else{
                    component.set("v.isRecordsAvailable",false);
                }
                    
            }
                           });
        	$A.enqueueAction(accdef);
	}
})