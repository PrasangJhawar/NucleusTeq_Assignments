import java.nio.channels.Pipe.SourceChannel;
import java.util.*;
public class LinearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array:");
        int size = sc.nextInt();
        int arr[] = new int[size];

        System.out.println("Enter the elements of the array");
        for(int i = 0 ; i < size ; i++){
            arr[i] = sc.nextInt();
        }

        System.out.print("Enter the key you wanna search:");
        int key = sc.nextInt();

        int ans = LinearSearch(arr, key);

        if(ans == -1){
            System.out.println("Key not found");
        }else{
            System.out.println("Key found at "+ ans + " index");
        }
    }

    public static int LinearSearch(int arr[], int key){
        for(int i = 0 ; i < arr.length ; i++){
            if(arr[i] == key){
                return i;
            }
        }
        return -1;
    }
}
