import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

public class ConsumirRest {
    // API: https://jsonplaceholder.typicode.com/users
    public static void main(String[] args) throws IOException {
        URL url;
        
        try {
            url = new URL("https://jsonplaceholder.typicode.com/users");
            
            HttpURLConnection conexion = (HttpURLConnection) url.openConnection();
            conexion.setRequestMethod("GET");
            
            conexion.connect();
            
            int codigoRespuesta = conexion.getResponseCode();
            if (codigoRespuesta == HttpURLConnection.HTTP_OK) {
                System.out.println("Conexión exitosa");
                // Manejamos la repuesta
                StringBuilder infoString = new StringBuilder();
                Scanner scanner = new Scanner(url.openStream());
                
                while (scanner.hasNext()) {
                    infoString.append(scanner.nextLine());
                }
                
                scanner.close();
                System.out.println(infoString.toString());
            }
        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
}
