global class JS_Remote_Action {
        
    @RemoteAction
    global static list<id> getaccountIds(string accname){
        system.debug('accname==>' + accname);
        string str = '%' + accname + '%';
        map<id,account> accmap = new map<id,account>([select id,name from account where name like:str ]);
        system.debug('accname map==>' + accmap.values());
        list<id> idlist =  new list<id>(accmap.keySet());
        return idlist;
    }
}