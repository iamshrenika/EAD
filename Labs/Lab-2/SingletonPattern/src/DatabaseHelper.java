public class DatabaseHelper {

    private DatabaseHelper(){}

    public static DatabaseHelper instance;

    public static DatabaseHelper getInstance(){
        if(instance==null){
            instance= new DatabaseHelper();
        }
        return instance;
    }

    public void showMessage(){
 
        System.out.println("Hello World");

    }
}
