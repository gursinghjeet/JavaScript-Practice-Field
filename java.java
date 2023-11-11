class java {
    public static void main(String[] args) {
    //     System.out.println(isPalindrome(121));
    // }
    // public static boolean isPalindrome(int x) {
    //     int n = x;

    //     if(reverse(n) == x && n>=0) return true;
    //     return false;

    String[] s = ["flower","flow","flight"];
    }

    public static int reverse(int n){
        int x = 0;
        while(n!=0){
            int r = n % 10;
            x = x*10+r;
            n = n/10;
        }
        System.out.println(x);
        return x;
    }
}