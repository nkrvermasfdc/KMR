global class JS_Remote {

    public string str {get;set;}
    public list<string> oupt {get;set;} 
    
    public void act(){
        map<id,account> accmap = new map<id,account>([select id,name from account where name like '%str%']);
        list<id> idlist = new list<id>(accmap.keySet());
        oupt = idlist;
    }
    
    @RemoteAction
    global static list<id> getaccount(string accname){
        map<id,account> accmap = new map<id,account>([select id,name from account where name like '%accname%']);
        list<id> idlist = new list<id>(accmap.keySet());
        return idlist;
    }
}