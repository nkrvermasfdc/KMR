public class Getter_Setter_Class {
	public string color = 'red';
    
    public string getDisplayString(){
        system.debug('Entry -- getDisplayString Method :-- ' + color);
        color = 'yellow';
        system.debug('Before Return -- getDisplayString Method :-- ' + color);
        return color;
    }
    
    public void setDisplayString( string colr){
        system.debug('Entry -- setDisplayString :-- ' + colr);
        color = colr;
    }
    
    public void setterActionMethod(){
        system.debug('Entry -- setterActionMethod :-- ' + color);
    }
        
}