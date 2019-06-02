({
	throw_Unrecoverable_Error : function(component, event, helper) {
		debugger;
		alert("Un-Recoverable -- Error will throw now..");
		throw new Error("Un-Recoverable -- I can’t go on. This is the end.");    
	},
    
    throw_recoverable_Error : function(component, event, helper) {
        var param = true;
        	try{
            	if (param){
                	throw new Error("You Dont have permission to Edit this record");
            	}
            }
     		catch (e){
                $A.createComponents(
                    [
                        ["ui:message"   , {"title":"Error Details", "severity":"error", "closable":"true"}],
                        ["ui:outputText", {"value":e.message}]
                    ],
                    function(complist,status,error){
                        if(status=="SUCCESS"){
                        	var message 	= complist[0];
                            var outputtext  = complist[1];
                            
                            //Set the body of ui:message to be the ui:outputtext;
                            message.set("v.body",outputtext);
                            
                            //Replace div with the dynamic component;
                            var div1 = component.find("div1");
                            div1.set("v.body",message);
                        }
                        else{
                            
                        }
                    }
                );
            }
	}
})