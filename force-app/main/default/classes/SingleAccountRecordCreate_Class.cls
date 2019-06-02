public class SingleAccountRecordCreate_Class{
    
    public account accOne { get;set; }
	//account acc;
        
    public SingleAccountRecordCreate_Class(){
        accOne 	 = new account();
        //acc 	 = new account();
        //acc.name = 'Neeraj--1';
        //insert acc; // DML operation not allowed inside constructor;    
    }
    
    public void savingAccountRec(){
       // insert acc;
       insert accOne;
    }
}