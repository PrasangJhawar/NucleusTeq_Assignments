public class GraduateStudent extends Student{
    String degree;
    int yearOfGraduation;

    public GraduateStudent(String name, int rollNumber, float marks, String degree, int yearOfGraduation){
        super(name, rollNumber, marks);
        this.degree = degree;
        this.yearOfGraduation = yearOfGraduation;
    }

    @Override
    public void displayInfo(){
        super.displayInfo();
        System.out.println("Degree: " + degree);
        System.out.println("Year of Graduation: " + yearOfGraduation);
    }
}
