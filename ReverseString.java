package codingTest;

public class ReverseString {

	public static void main(String[] args) {

		String str = "JAHED";
		String rev = " ";
		int sl=str.length();
		
		for (int i = 0; i < sl; i++) {
			char c=str.charAt(i);
			rev = c+rev;
			
		}
		System.out.println(rev);

	}

}
