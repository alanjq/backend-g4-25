import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        char operador;
        double numero1, numero2, resultado;
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese el operador que deseas(+, -, * , /)");

        // Almacenamos el valor solicitado
        operador = entrada.next().charAt(0);
        if (isOperadorValido(operador)) {

            numero1 = LeerNumero(entrada, "Ingresa el número 1:");

            numero2 = LeerNumero(entrada, "Ingresa el número 2:");

            entrada.close();

            switch (operador) {
                case '+':
                    resultado = numero1 + numero2;
                    break;

                case '-':
                    resultado = numero1 - numero2;
                    break;

                case '*':
                    resultado = numero1 * numero2;
                    break;

                case '/':
                    resultado = numero1 / numero2;
                    break;

                default:
                    System.out.println("Operator inválido");
                    resultado = 0;
            }

            System.out.print(numero1 + " " + operador + " " + numero2 + " = " + resultado);

        } else {
            System.out.println("Operador inválido");
        }
    }

    public static boolean isOperadorValido(char operador) {
        return operador == '+' || operador == '-' || operador == '*' || operador == '/';
    }

    private static double LeerNumero(Scanner entrada, String mensaje) {
        System.out.println(mensaje);
        return entrada.nextDouble();
    }
}
