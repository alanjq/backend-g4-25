package Actividad-Guiada-4-JAVA.api-rest.src.main.java.libreria;

@Entity
public class Libro {
    private Long id;
    private String titulo;
    private String autor;
    private int anioPublicacion;

    // Getters and setters  
    public Long getId() {
        return id;
    }           
    
    public void setId(Long id) {
        this.id = id;
    }
    
}
