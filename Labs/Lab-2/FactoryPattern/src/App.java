public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Vehicle car = VehicleFactory.getVehicle("CAR");
        Vehicle bike = VehicleFactory.getVehicle("MOTORBIKE");
    }
}
