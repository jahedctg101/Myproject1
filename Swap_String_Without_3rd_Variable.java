package codingTest;

public class Swap_String_Without_3rd_Variable {

	public static void main(String[] args) {
		// Swap string without 3rd variable
		String fName = "Tawaf";
		String lName = "Ahmed";
		
		fName = fName + lName;
		System.out.println(fName);
		lName = fName.substring(0,fName.length() - lName.length());//Tawaf
		System.out.println("lName = "+lName);
		fName = fName.substring(lName.length());
		System.out.println("fName = "+fName);
		System.out.println(fName + " "+lName);
		

	}

}
