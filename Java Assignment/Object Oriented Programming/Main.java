import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter student's name: ");
        String name = sc.nextLine();
        
        System.out.print("Enter roll number: ");
        int rollNumber = sc.nextInt();
        
        System.out.print("Enter marks: ");
        float marks = sc.nextFloat();
        
        Student student = new Student(name, rollNumber, marks);
        System.out.println("\n----- Student Info -----");
        student.displayInfo();

        sc.nextLine();
        System.out.print("\nEnter degree: ");
        String degree = sc.nextLine();
        
        System.out.print("Enter year of graduation: ");
        int yearOfGraduation = sc.nextInt();
        
        GraduateStudent graduateStudent = new GraduateStudent(name, rollNumber, marks, degree, yearOfGraduation);
        System.out.println("\n--- Graduate Student Information ---");
        graduateStudent.displayInfo();
    }
}
