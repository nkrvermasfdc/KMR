public class Retrive_Acc {
    @AuraEnabled
    public static string getAccName(){
        string str = [select name from account limit 1].Name;
        return str;
    }
    
    @AuraEnabled
    public static string getAccName2(string acName, string indtyp){
        system.debug('acName ==> ' + acName);
        string accStr = '%' + acName + '%';
        string str = [select name from account where name like:accStr and Industry=:indtyp limit 1].Name;
        return str;
    }
    
     @AuraEnabled
    public static string getAccName3(string acName){
        system.debug('acName ==> ' + acName);
        string accStr = '%' + acName + '%';
        string str = [select name from account where name like:accStr limit 1].Name;
        return str;
    }
    
    @AuraEnabled
    public static list<account> getAccList(string acName){
        system.debug('acName ==> ' + acName);
        string accStr = '%' + acName + '%';
        list<account> acList = [select name from account where name like:accStr];
        return acList;
    }
}