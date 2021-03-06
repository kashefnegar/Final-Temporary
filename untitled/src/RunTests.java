import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class RunTests {
    private String projectPath = "";

    public void RunTests(String path){
        setPath(path);
        String command = "truffle test";

        try {
            Process process = Runtime.getRuntime().exec(command);

            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            reader.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void setPath(String newPath){
        projectPath = newPath;
    }
}
