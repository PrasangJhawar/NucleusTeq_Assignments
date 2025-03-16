import java.util.*;
public class Anagrams{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();

        if(str1.length() != str2.length()){
            System.out.println("Not anagrams");
        } else {
            HashMap<Character, Integer> map = new HashMap<>();

            for(char ch : str1.toCharArray()){
                map.put(ch, map.getOrDefault(ch, 0) + 1);
            }

            for(char ch : str2.toCharArray()){
                if(map.containsKey(ch)){
                    map.put(ch, map.get(ch) - 1);
                    if(map.get(ch) == 0) {
                        map.remove(ch);
                    }
                } else {
                    System.out.println("Not anagrams");
                    return;
                }
            }

            if(map.isEmpty()){
                System.out.println("Strings are anagrams");
            } else {
                System.out.println("Not anagrams");
            }
        }
    }
}
