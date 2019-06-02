public class Awaytoset_Getter_Setter {

   //Getter Setter Method; 
   public string color{
        get{
            system.debug('Exit -- color in Getter method --> ' + color);
            return color;
        }
        set{
            color = value;
            system.debug('Exit -- color in Setter method --> ' + color);
        }
    }
    
    //Class Constructor;
    public Awaytoset_Getter_Setter(){
    	system.debug('Iside -- In the constructor');    
    }    
    
    //Action Method
    public void someAction(){
        system.debug('Inside -- color in Action method --> ' + color);
        
    }
}