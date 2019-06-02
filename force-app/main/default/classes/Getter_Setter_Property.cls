public class Getter_Setter_Property {

   //Getter Setter Property; 
    public string color{ get;set; }
    
    public string getColorClone(){
        return color;
    }       
    
    //Class Constructor;
    public Getter_Setter_Property(){
    	system.debug('Iside -- In the constructor');    
    }    
    
    //Action Method
    public void someAction(){
        system.debug('Inside -- color in Action method --> ' + color);
        
    }
}