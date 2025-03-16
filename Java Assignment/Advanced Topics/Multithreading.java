class Task1 extends Thread{
    public void run(){
        for(int i = 0 ; i < 5 ; i++){
            System.out.println("Task1: " + i);
            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
}

class Task2 extends Thread{
    public void run(){
        for(int i = 0 ; i < 5 ; i++){
            System.out.println("Task2: " + i);
            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
    }
}

public class Multithreading{
    public static void main(String[] args){
        Task1 task1 = new Task1();
        Task2 task2 = new Task2();

        task1.start();
        task2.start();
    }
}
