public class MainFile {
    public static void main( String[] arg) {
        //System.out.println(a +1);
        //Declare an int variable inside of the `anotherMethod` method and assign it a value.  With the current code is it possible to reference that variable from inside `main()`?
        //anotherMethod();
        playWithStrings();

    }
//        public static void anotherMethod() {
//           int a = 100;
//           int b = a/2;
//
//
//            if (a > 1000) {
//        //        int b = a/2;
//                //   System.out.println("Big Value");
//                System.out.println(a + "is a big Value");
//                System.out.println(b + "half a big value" + a);
//            } else {
//
//                //   System.out.println("Not a big Value");
//                System.out.println(a + "is not a big Value");
//                System.out.println(b + "half a big variable" + a);
//                //Oops, is there a problem?  How can it befixed?
//                //yes declare the variable outside the if else scope
//            }
//        }

//    public static void anotherMethod() {
//           Integer a = Integer.valueOf("1000");
//           Integer b = 60;
//
//
//            if (b.compareTo(a)> 0) {
//        //        int b = a/2;
//                //   System.out.println("Big Value");
//                System.out.println(a + "is a big Value");
//                System.out.println(b + "half a big value" + a);
//            } else {
//
//                //   System.out.println("Not a big Value");
//                System.out.println(a + "is not a big Value");
//                System.out.println(b + "half a big variable" + a);
//                //Oops, is there a problem?  How can it befixed?
//                //yes declare the variable outside the if else scope
//            }
//        }

    public static void playWithStrings() {
        String firstName = "Vandana";
        String lastName = new String ("Chopra");
        System.out.println("Hello "+ firstName +" "+lastName);
        String fullName = firstName.concat(" "+lastName);
        System.out.println("The total length of the String Vandana Chopra is "+fullName.length());
        System.out.println("The first occurrence of 'o' in the String Vandana Chopra is at position "+fullName.indexOf('o'));
        System.out.println("The character at position 11 is "+fullName.charAt(7));

        if(fullName.contains("son")) {
            System.out.println("The String Vandana Chopra contains 'son'.");
        }
        else {
            System.out.println("The String Vandana Chopra does not contain 'son'.");
        }

        System.out.println("The last 5 characters are "+fullName.substring(fullName.length() - 5));

        if(fullName.contains("\'") && fullName.contains("-")) {
            System.out.println("The String Vandana Chopra contains an apostrophe and a dash.");
        }
        else if(fullName.contains("\'")) {
            System.out.println("The String Vandana Chopra contains an apostrophe");
        }
        else if(fullName.contains("-")) {
            System.out.println("The String Vandana Chopra contains a dash");
        }
        else {
            System.out.println("The String Vandana Chopra does not contain an apostrophe or a dash.");
        }
    }


    }

