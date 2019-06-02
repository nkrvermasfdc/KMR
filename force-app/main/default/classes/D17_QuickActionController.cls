public class D17_QuickActionController {
	
    @auraEnabled
    public static void saveAccountRec(string accName, string accSite){
        account ac = new account(); 
        ac.name = accName;
        ac.site = accSite;
        
        try{
            insert ac;
        }
        catch(Exception e){
            system.debug('exception ==> ' + e.getmessage());
        }
    }
    
}