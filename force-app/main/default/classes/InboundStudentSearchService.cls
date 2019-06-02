global class InboundStudentSearchService 
{

    webservice static list<string> resp { get;set; } 
   
    webservice static list<string> StudentSearchKeyMethod(string str)
    {        
        string s = '%' + str + '%';
        resp = new list<string>();
        
        list<student__c> stList = [select id,name from student__c where name like :s];
        
        if(stList.size() >0 )
            for(student__c st: stList){
                if(st != null && !string.isBlank(st.Name)){                    
                    resp.add(st.id + '-' + st.name); 
                }
                    
            }
        return resp;
    }

    /* --
    webservice static list<student__c> StudentSearchKeyMethod(string str)
    {
        string s = '%' + str + '%';
        list<Student__c> stlist = [select Id, name from student__c where name like :s];
        return stlist ;
    }
    */
      
}