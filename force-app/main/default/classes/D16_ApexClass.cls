public class D16_ApexClass {
	@AuraEnabled
    public static list<account> fetchAccounts(string accInd){
        string ind = '%' + accInd + '%';
        List<account> accList = [select id,name,industry from account where industry like :ind];
		return accList;        
    }
}