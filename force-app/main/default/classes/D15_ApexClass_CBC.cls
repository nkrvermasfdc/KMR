public class D15_ApexClass_CBC {
    @AuraEnabled
    public static list<account> getAccList(string str){
        string st = '%' + str + '%';
        list<account> acclist = [select id,name,industry from account where name like :st];
        return acclist;
    }

}