

public class AddlLab2 {

    public static void main(String[] args) {
        int firstInt = 6;
        int secondInt = 20;
        int thirdInt;
        float f = 4.4f;
        boolean isCold = false;
        double d = 1_000_000;

        thirdInt = 10;
        System.out.println(firstInt);
        System.out.println(secondInt);
        System.out.println(thirdInt);
        System.out.println(f);
        System.out.println(isCold);
        System.out.println(d);

//Lab Step #2
        System.out.println(firstInt + secondInt);
        System.out.println(firstInt + thirdInt);
        System.out.println(firstInt / secondInt);
        int remainder = firstInt % secondInt;
        System.out.println(remainder);

        int newInt = firstInt + remainder;
        System.out.println(newInt + 1);

        int x = 100;
        boolean b = true;
        if (x == 100) {
            System.out.println(b);
        }

        int y = 106;

        if (x > y) {
            // b = false;
            System.out.println(b);
        } else if (y > x) {
            // b = true;
            System.out.println(b);
        } else if (x >= y - 6) {
            // b = true;
            System.out.println(b);
        }


        int z = 92;

        if ((x < y) && (y < z)) {
            System.out.println(b);
        } else if (y < z && x >= y) {
            System.out.println(b);
        } else if (z > y + x || x - y < z) {
            System.out.println(b);
        }

        if ((x < y) != (x>y)) {
        System.out.println(b);}

//Lab Step #4
       int n = 64;
        System.out.println(n>>1 == n/2); // true
        System.out.println(n<<1 == n*2); // true

        n= 40;
        System.out.println(n>>1 == n/2);
        System.out.println(n<<1 == n*2);

        System.out.println(n>>2 == n/4);
        System.out.println(n<<2 == n*4);

        n= 39;
        System.out.println(n>>1);
        System.out.println(n<<1);
        System.out.println(n>>2);
        System.out.println(n<<2);

    }
}
