({
	myAction : function(component, event, helper) {
		
        var a = component.get('v.testone');
        console.log('a ==>' + a);
  		
        component.set("v.testone",10);
        var str = "Custom Attribute String";
        component.set("v.MycustomAttri",str);
        
	}
 ,
    Card_Action : function(component, event, helper) {
		
        var Default_str  = component.get('v.Card_str_1');
        var Card_Bodystr = component.get('v.Card_Body');
        
        var changed_str  = "Custom Attribute String";
        var Body_string  = "Card Body (custom component)";
        
        component.set('v.Card_Body',Body_string);
        
        console.log('Default string ==>' + Default_str);
        console.log('Changed string ==>' + changed_str);
        
        alert('Default string ==>' + Default_str);
        alert('Changed string ==>' + changed_str);
        
        /*component.set("v.CardAtr_1",changed_str);        **/
	}
})