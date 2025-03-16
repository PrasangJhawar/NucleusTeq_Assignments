import java.util.*;
public class Pattern{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number of rows:");
        int num = sc.nextInt();
        
        System.out.print("What do you wanna print? 1)Triangle or 2)Square :");
        int choice = sc.nextInt();
        
        if(choice == 1){
            // printing the triangle pattern
            for(int i = 1; i <= num; i++){
                for(int j = 1; j <= i; j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        }else if(choice == 2){

            // printing the square pattern
            for(int i = 1; i <= num; i++){
                for(int j = 1; j <= num; j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        }else{
            System.out.println("Invalid");
        }
    }
}
