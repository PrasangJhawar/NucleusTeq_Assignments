//Encapsulation in Java is a concept where the details of an object's data are hidden from the outside world. It is achieved by making the fields (variables) private and providing public methods (getters and setters) to access and modify those fields.

// The Person class has private fields name and age to protect them from direct access.
// Public getter and setter methods are provided to allow controlled access to these fields.
// This ensures that data is accessed and modified in a controlled way, maintaining data integrity.

class Structure{
    private String name;
    private int age;

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        if (age > 0){
            this.age = age;
        }
    }
}

public class Encapsulation{
    public static void main(String[] args){
        Structure person = new Structure();
        person.setName("John");
        person.setAge(25);

        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}
