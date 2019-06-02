({
	pageLoad_Doinit : function(component, event, helper) {
        
        $A.createComponents(
            [
                ["ui:outputText",{"value":"outputText-1"}],
                ["ui:outputText",{"value":"outputText-2"}],
                ["ui:outputText",{"value":"outputText-3"}]
            ],
            function(compList,status,error){
                debugger;
                if(status === "SUCCESS"){
                    var cmpbody = component.get("v.body");                    
                    compList.forEach(function(item){
                    cmpbody.push(item);   
                    });
                    component.set("v.body",cmpbody);
                    /**
                    var cmpv    = compList[0];
                    var cmpv1   = compList[1];
                    var cmpv2   = compList[2];
                    cmpbody.push(cmpv);
                    cmpbody.push(cmpv1);
                    cmpbody.push(cmpv2);
                    **/                    
                    
                }
            }        
        );
        
        /**
        $A.createComponent(
            [
                [Tag/Element/Component,{attribute}],
                [Tag/Element/Component,{attribute}],
                [Tag/Element/Component,{attribute}]
            ],
            function(component,status,error){
                if(status === "SUCCESS"){
                    
                }
            }        
        );
		**/  
	},
    
    //Adding a Class to the fetched component from component;
    hide_div : function(component, event, helper) {
        var fdv = component.find("firstDiv");        
        $A.util.addClass(fdv,"slds-hide");
    },
    
    //Removing a Class to the fetched component from component;
    unhide_div : function(component, event, helper) {
        var fdv = component.find("firstDiv");        
        $A.util.removeClass(fdv,"slds-hide");
    },
    
    //Toggling  a Class to the fetched component from component;
    /**handleClick : function(component, event, helper) {
        var fdv = component.find("firstDiv");        
        $A.util.toggleClass(fdv,"slds-hide");
    }**/
    
})