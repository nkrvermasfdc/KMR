({
	execute_Action : function(component, event, helper) {
		var params = event.getParam('arguments');
        component.set('v.ChildUserName',params.strParam1);
        component.set('v.ChildAccountName',params.strParam2);
        //alert('params.strParam1 ==> '+params.strParam1);
    }
})