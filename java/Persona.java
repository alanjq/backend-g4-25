public class Persona {
    private int edad;
    private String nombre;
    private String apellido;
    private Boolean esEstudiante;
    private String grupo = "";

    // Constructor de la clase
    public Persona() {
        ValoresIniciales();
    }

    public Persona(String nombre) {
        ValoresIniciales();
        this.nombre = nombre;
    }

    public Persona(String nombre, String apellido, Boolean esEstudiante, Integer edad) {
        ValoresIniciales();
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.esEstudiante = esEstudiante;
        if (esEstudiante) {
            this.grupo = "Grupo A";
        } else {
            this.grupo = "";
        }
    }

    private void ValoresIniciales() {
        this.edad = 0;
        this.nombre = "";
        this.apellido = "";
        this.esEstudiante = true;
        this.grupo = "";
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return this.edad;
    }

    // Métodos
    public void saludar() {
        System.out.println("¡Hola desde la clase Persona!");
    }

    public String getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }

    public String getSaludo() {
        return "¡Hola, mi nombre es " + this.getNombreCompleto() + "! Estoy en el grupo: " + this.grupo;
    }
}
