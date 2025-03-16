import java.util.*;
public class Operators{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        //arithmetic operators
        int sum = num1 + num2;
        int difference = num1 - num2;
        int product = num1 * num2;
        int quotient = num1 / num2;
        int remainder = num1 % num2;
        

        //relational operators
        boolean isEqual = num1 == num2;
        boolean isNotEqual = num1 != num2;
        boolean isGreaterThan = num1 > num2;
        boolean isLessThan = num1 < num2;
        boolean isGreaterThanOrEqual = num1 >= num2;
        boolean isLessThanOrEqual = num1 <= num2;
        
        //logical operators
        boolean andCondition = (num1 > 0) && (num2 > 0);
        boolean orCondition = (num1 > 0) || (num2 > 0);
        boolean notCondition = !(num1 == num2);
        
        System.out.println("\nArithmetic Operations:");
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
        System.out.println("Remainder: " + remainder);
        
        System.out.println("\nRelational Operations:");
        System.out.println("Is equal: " + isEqual);
        System.out.println("Is not equal: " + isNotEqual);
        System.out.println("Is greater than: " + isGreaterThan);
        System.out.println("Is less than: " + isLessThan);
        System.out.println("Is greater than or equal: " + isGreaterThanOrEqual);
        System.out.println("Is less than or equal: " + isLessThanOrEqual);
        
        System.out.println("\nLogical Operations:");
        System.out.println("AND condition: " + andCondition);
        System.out.println("OR condition: " + orCondition);
        System.out.println("NOT condition: " + notCondition);
    }
}
