import java.util.Scanner;

public class MarksheetGenerator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Inpusssst student details
        System.out.print("Enter Student Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Roll Number: ");
        int rollNo = sc.nextInt();

        System.out.print("Enter number of subjects: ");
        int n = sc.nextInt();

        int[] marks = new int[n];
        int total = 0;

        // Input marks
        for (int i = 0; i < n; i++) {
            System.out.print("Enter marks for Subject " + (i + 1) + " (out of 100): ");
            marks[i] = sc.nextInt();
            total += marks[i];
        }

        // Calculate percentage
        double percentage = (double) total / n;

        // Calculate grade
        String grade;
        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 75) {
            grade = "A";
        } else if (percentage >= 60) {
            grade = "B";
        } else if (percentage >= 50) {
            grade = "C";
        } else if (percentage >= 40) {
            grade = "D";
        } else {
            grade = "F";
        }

        // Result
        String result = (percentage >= 40) ? "PASS" : "FAIL";

        // Display Marksheet
        System.out.println("\n================= MARKSHEET =================");
        System.out.println("Name       : " + name);
        System.out.println("Roll No.   : " + rollNo);
        System.out.println("---------------------------------------------");

        for (int i = 0; i < n; i++) {
            System.out.println("Subject " + (i + 1) + " Marks: " + marks[i]);
        }

        System.out.println("---------------------------------------------");
        System.out.println("Total Marks: " + total + " / " + (n * 100));
        System.out.println("Percentage : " + String.format("%.2f", percentage) + "%");
        System.out.println("Grade      : " + grade);
        System.out.println("Result     : " + result);
        System.out.println("=============================================");
        
        sc.close();
    }
}