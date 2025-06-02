public class VehicleFactory {

    public static  Vehicle getVehicle(String type){
        switch (type) {
            case "CAR":
                return new Car();
            case "MOTORBIKE":
                return new Motorbike();
                default:

                return new Car();
        }
    }
    
}
