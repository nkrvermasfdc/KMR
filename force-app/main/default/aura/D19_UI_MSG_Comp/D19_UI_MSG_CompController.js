({
	throwError : function(component, event, helper) {
		debugger;
		alert("Un-Recoverable -- Error will throw now..");
		throw new Error("Un-Recoverable -- I can’t go on. This is the end.");    
	}
})