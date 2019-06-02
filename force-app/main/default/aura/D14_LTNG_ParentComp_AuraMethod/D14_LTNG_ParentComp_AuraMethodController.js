({
	buttonClick : function(component, event, helper) {
		component.set("v.UserName","Neeraj");
        component.set("v.AccountName","Verma");
        
        //alert('Button Click ==> '+component.get('v.UserName'));
        
        var childComponent = component.find('chldcomp_AuraMethod');
        childComponent.child_AuraMethod(component.get('v.UserName'), component.get('v.AccountName'));        
	}
})