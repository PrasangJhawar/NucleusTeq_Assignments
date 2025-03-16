public class Parent{
    public void display(int num){
        System.out.println("Parent's number: " + num);
    }

    public void display(String message){
        System.out.println("Parent's message: " + message);
    }
}

public class Child extends Parent{
    @Override
    public void display(int num){
        System.out.println("Child's number: " + num);
    }

    public void display(double num){
        System.out.println("Child's double: " + num);
    }
}

public class Polymorphism{
    public static void main(String[] args){
        Parent p = new Parent();
        Child c = new Child();

        p.display(5);
        p.display("Hello");

        c.display(10);
        c.display("World");
        c.display(3.14);
    }
}
