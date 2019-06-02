({
    myAction : function(component, event, helper) {
		var inp = component.get("v.inpval");
        //var CV  = component.find('opCurrent').get(event.getParam("value"));
        //alert("Old Value ==> " + event.getParam("oldValue") + " Current Value ==> " + event.getParam("value"));
        //alert("CV : "+ CV);
        //var isEnterKey = event.keyCode === 13;
        
        //if (CV == '23'){
            component.find('opOld').set("v.value", event.getParam("oldValue"));
        	component.find('opCurrent').set("v.value", event.getParam("value"));
        //}                
    }
})