({
	pageLoad_Doinit : function(component, event, helper) {
        
        $A.createComponent(
            "lightning:button",
            {
                "label"  : "Neutral",
                "title"  : "Neutral action",
                "onclick": component.getReference("c.handleClick")
            },
            function(MyActionButton,status,error){
                debugger; 
                if(status === "SUCCESS"){
                    var cmp_body = component.get("v.body");
            		cmp_body.push(MyActionButton);
                    component.set("v.body",cmp_body);
                }
                
        	}        
        );
		
        /** -- Syntax --
         $A.createComponent(
            "ElementName/Type/ComponentName",
            argument/attribute,
            function(componentvariablename,status,error){}
            )
         **/ 
	},
    
    handleClick : function(component){
        alert('Button Clikcked ....');
    }
})