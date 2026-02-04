public class Main {
      public static void main(String[] args) {
            System.out.println("Hello, World!");

            Persona persona1 = new Persona("Nancy");

            Persona persona2 = new Persona("Eduardo", "Juarez", true, 22);

            persona2.saludar();
            
            System.out.println(persona2.getSaludo());
            
            System.out.println("-- Sin apellido---");
            System.out.println(persona1.getSaludo());
      }
}
