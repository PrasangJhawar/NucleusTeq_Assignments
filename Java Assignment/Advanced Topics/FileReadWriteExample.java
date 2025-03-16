import java.io.*;
public class FileReadWriteExample {
    public static void main(String[] args){
        try{
            FileWriter fw = new FileWriter("input.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write("Hello, this is the first line.");
            bw.newLine();
            bw.close();
            fw.close();
        } catch (IOException e) {
            System.out.println("Error writing to input.txt: " + e.getMessage());
        }

        try {
            FileReader fr = new FileReader("input.txt");
            BufferedReader br = new BufferedReader(fr);
            FileWriter fw = new FileWriter("output.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line);
                bw.newLine();
            }
            br.close();
            fr.close();
            bw.close();
            fw.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
