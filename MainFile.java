//  Lab  Step#1
import java.util.Scanner;
public class MainFile {

 public static void main(String args[]){
     // scanner reads input from the command line through various methods
     Scanner scanner = new Scanner(System.in);

      // prompt and read a string
     System.out.print("Enter your name: ");
     String username = scanner.next();

     //prompt and read an int
     System.out.print("Enter your age: ");
     int age = scanner.nextInt();

     System.out.println(String.format("Hello %s, your age is %d", username, age ));


     if (age>=16){
         System.out.println("You are old enough to drive");
         if (age>=18) {
             System.out.println("You are old enough to vote");
             if (age >= 21){
                 System.out.println("You are old enough to drink");
                 if(age>= 35){
                     System.out.println("You are old enough to be President");
                     if(age>= 55){
                         System.out.println("You can join AARP");
                          if(age>=67){
                              System.out.println("You can starting drawing Social Security");
                          }
                     }
                 }
             }
         }
     }
     //
     if (age>=16){
         System.out.println("You are old enough to drive");}
     else if (age <16){
         System.out.println("You are not old enough to drive");
     }
     if (age>=18) {
             System.out.println("You are old enough to vote");}
     else if (age < 18){
             System.out.println("You are not old enough to vote");
     }
     if (age >= 21){
                 System.out.println("You are old enough to drink");}
     else if (age< 21){
         System.out.println("You are not old enough to drink");
     }
     if(age>= 35){
         System.out.println("You are old enough to be President");}
     else if (age< 35){
         System.out.println("You are not old enough to be President");
     }
     if(age>= 55){
         System.out.println("You can join AARP");}
     else if (age<55){
         System.out.println("You can not join AARP");
     }
     if(age>=67){
         System.out.println("You can starting drawing Social Security");}
     else  if (age<67){
         System.out.println("You can not starting drawing Social Security");
     }


 }
}
 //   Lab Step #2 (switch statements)

import java.util.Scanner;
import java.lang.String;
public class MainFile {

    public static void main(String args[]) {
        // scanner reads input from the command line through various methods
        Scanner scanner = new Scanner(System.in);

        // prompt and read a string
        System.out.print("Enter your name: ");
        String username = scanner.next();

        //prompt and read an int
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println(String.format("Hello %s, your age is %d", username, age));

        // prompt and read a string
        System.out.println("What is your employment status? Type E for employed, U for unemployed, or S for student");
        String emp = scanner.next();

        //prompt and read a string
        System.out.println("Do you own a vehicle: C for car, T for truck and S for SUV?");
        String veh = scanner.next();

        String msg="";

        switch(emp){
            case "e":
            case "E":
              msg = "You are employed";
              break;
            case "u":
            case "U":
              msg = "You are unemployed";
              break;
            case "s":
            case "S":
              msg = "You are a student";
              break;
            default:
              msg = "You are nowhere";

        }
        System.out.println(msg);

        switch (veh){
            case "c":
            case "C":
                msg= "You have a car!";
                break;
            case "s":
            case "S":
                msg= "You have an SUV";
                break;
            case "t":
            case "T":
                msg = "You have a truck";
                break;

        }
        System.out.println(msg);
    }
}

//### Addl Lab Step #3 (for loops)

public class MainFile {
    public static void main(String args[]) {
       int myArray[] = new int[30];

      for(int i=0; i<30; i++){
        //  System.out.println(i);
         myArray[i]= i;}
       for(int i : myArray) {
          System.out.println("Enhanced for " + i);
       }

       for (int i= 0; i< 30; i++){
           myArray[i]=i*2;
       }
       for(int i : myArray){
           System.out.println(i);
       }
       for(int i= 30; i>0; i--){
           System.out.println(i);
       }

       }
    }

//Addl Lab Step #4 (while loops)

public class MainFile {
    public static void main(String args[]) {

            int i = 0;
        while ( i< 30){
            System.out.println(i);
            i++;
        }
        int j=30;
        while(j>0){
            System.out.println(j);
            j--;
        }


    }
}

// DO-While LOOP

import java.util.Scanner;
public class MainFile {
    public static void main(String args[]) {

        Scanner scanner = new Scanner(System.in);
        char reply;
        do{
      // prompt and read a string
     System.out.print("Enter your name: ");
     String username = scanner.next();

     //prompt and read an int
     System.out.print("Enter your age: ");
     int age = scanner.nextInt();




            System.out.println(String.format("Hello %s, your age is %d", username, age ));
            if (age >= 16) {
                System.out.println("You are old enough to drive");
            } else if (age < 16) {
                System.out.println("You are not old enough to drive");
            }
            if (age >= 18) {
                System.out.println("You are old enough to vote");
            } else if (age < 18) {
                System.out.println("You are not old enough to vote");
            }
            if (age >= 21) {
                System.out.println("You are old enough to drink");
            } else if (age < 21) {
                System.out.println("You are not old enough to drink");
            }
            if (age >= 35) {
                System.out.println("You are old enough to be President");
            } else if (age < 35) {
                System.out.println("You are not old enough to be President");
            }
            if (age >= 55) {
                System.out.println("You can join AARP");
            } else if (age < 55) {
                System.out.println("You can not join AARP");
            }
            if (age >= 67) {
                System.out.println("You can starting drawing Social Security");
            } else if (age < 67) {
                System.out.println("You can not starting drawing Social Security");
            }
            System.out.println("Do you want to answer any more questions?");
            reply= scanner.next().toLowerCase().charAt(0);

        }
        while(reply == 'y');


    }
}

// Step #5

public class MainFile {

    public static void main(String args[]) {
        //method(30);
        signature(20);
    }

    public static void method(int x) {
        int myArray[] = new int[30];
        for (int i = 0; i < 30; i++) {
            myArray[i] = i;
            if (i % 2 == 0) {
                System.out.println(i);
            }
            if (i % 2 == 1) {
                continue;
            }

            if (i == x) {
                break;
            }

        }
    }

    public static int signature(int b) {
        int[] signatureArray = new int[30];
        int total = 0;

        for (int i = 0; i < 30; i++) {
            signatureArray[i] = i;
            if (i % 2 == 1) {
                System.out.println(i);
            }
            if (i % 2 == 0) {
                total += i;

            }
            if (i == b) {
                System.out.println(total);
            }

        }
        return total;
    }

}