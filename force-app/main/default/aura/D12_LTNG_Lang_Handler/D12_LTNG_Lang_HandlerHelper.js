({
	retrieveAccountHelper : function(cmp, event, helper,ip) {
		//debugger;   
        
		// Calling Method from Apex Controller
        var act1 = cmp.get("c.getAccList");
        
        // Passing arguments to above called Apex Controller Method 
        act1.setParams(
            			{acName: ip}
        );
        
        // Getting the return value from called Apex Controller Method and setting view Attribute
        act1.setCallback(this,function(resp){
            if(resp.getState()=='SUCCESS'){
                console.log(resp.getReturnValue());
                cmp.set('v.AccountList',resp.getReturnValue());
            }            
        });  
    
    	//Executing and getting the Apex Controller Method with arguments
    	$A.enqueueAction(act1);
	}
})