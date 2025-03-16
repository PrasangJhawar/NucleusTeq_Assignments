//Interfaces and abstract class both are used to provide abstraction. The thing is that abstract classes do not guarantee 100% abstraction whereas interfaces do that (this is why java can perform multiple inheritence via interfaces in my opinion).


//Example

interface Animal{
    void sound();
}

abstract class Dog implements Animal{
    abstract void breed();
}

class Labrador extends Dog{
    public void sound(){
        System.out.println("Bark");
    }

    public void breed(){
        System.out.println("Pitbull");
    }
}

public class Main{
    public static void main(String[] args){
        Labrador lab = new Labrador();
        lab.sound();
        lab.breed();
    }
}
