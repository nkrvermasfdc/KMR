({
    //====================================================================================//
	myAction: function(component, event, helper) {        
        debugger;
        
        // Calling Method from Apex Controller
		var act = component.get("c.getAccName");
        
        // Getting the return value from called Apex Controller Method and setting view Attribute
        act.setCallback(this,function(resp){                       
            if(resp.getState()=='SUCCESS'){
                console.log(resp.getReturnValue());
                component.set('v.AccountName',resp.getReturnValue());
            }
        });
        
        //Executing and getting the Apex Controller Method with arguments
        $A.enqueueAction(act);	
	},
    
    //====================================================================================//
    argementPass: function(component, event, helper) {        
        debugger;
        
        // Calling Method from Apex Controller
		var act1 = component.get("c.getAccName2");
        
        // Passing arguments to above called Apex Controller Method 
        act1.setParams({
            acName:'SIS',
            indtyp:'Education',
        });
        
        // Getting the return value from called Apex Controller Method and setting view Attribute
        act1.setCallback(this,function(resp){
            if(resp.getState()=='SUCCESS'){
                console.log(resp.getReturnValue());
                component.set('v.AccountName',resp.getReturnValue());
            }            
        });  
        
    //Executing and getting the Apex Controller Method with arguments
    $A.enqueueAction(act1);	    
    },
    
    //====================================================================================//
    argementPassFromComp: function(component, event, helper) { 
        debugger;   
        
		// Calling Method from Apex Controller
        var act1 = component.get("c.getAccName3");
        
        // Passing arguments to above called Apex Controller Method 
        act1.setParams(
            			{acName: component.find('ipOne').get("v.value"),}
        );
        
        // Getting the return value from called Apex Controller Method and setting view Attribute
        act1.setCallback(this,function(resp){
            if(resp.getState()=='SUCCESS'){
                console.log(resp.getReturnValue());
                component.set('v.AccountName',resp.getReturnValue());
            }            
        });  
    
    //Executing and getting the Apex Controller Method with arguments
    $A.enqueueAction(act1);	    
    },
    
    //====================================================================================//
    retrieveAccRecords: function(component, event, helper) { 
        var inpvl = component.find('ipOne').get("v.value");
        helper.retrieveAccountHelper(component, event, helper, inpvl);	    
    },
    
    //====================================================================================//
    handleClick:  function(component, event, helper) {        
                
        var button_Title  = event.getSource().get("v.title");
        var button_Label  = event.getSource().get("v.label")
        var button_Name   = event.getSource().get("v.name");   
        var button_Varint = event.getSource().get("v.variant");
        var button_Value  = event.getSource().get("v.Value");
        
        var btn = event.getSource();        
        console.log('Button Title  ==> ' + btn.get("v.title"));
        console.log('Button Label  ==> ' + btn.get("v.label")); 
        console.log('Button Name   ==> ' + btn.get("v.name")); 
        console.log('Button Varint ==> ' + btn.get("v.variant"));
		console.log('Button Value  ==> ' + btn.get("v.value"));        
        console.log('Button LocalID==> ' + btn.getLocalId());
        
        console.log(btn.set("v.label",'updated label'));         
        //alert('buttonVarint ==>' + btn.get("v.variant") );
        
        debugger; 	
    },
    
    rowClick: function(component, event, helper){
        
        //var srId = component.find('uiName').get("v.value");
        //alert('uiName ==>' + srId );
                
        var optxt_RID = event.getSource().get("v.value");
        component.set('v.clicked_Row_Id',optxt_RID);
        //alert('Record ID==> ' + optxt_RID);               
        debugger; 
        
        
        //var link = event.getSource();
        //var linkid = event.target.value;
        //console.log('selected_RecordId ==>' + linkid );
        
        //var link = event.getSource();
        //debugger; 
        //var srId = component.find('s_RecordId').get("v.value");
       // alert('selected_RecordId ==>' + srId );
    },
    
    save: function(component, event, helper){
    	component.find("record_Edit").get("e.recordSave").fire();
    }    
})