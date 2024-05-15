package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import lab.entities.Complaint;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        String status =
                client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                                "api/complaints/2/status")
                        .request(MediaType.TEXT_PLAIN)
                        .get(String.class);

        System.out.println("Status: " + status);

        String allComplaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);
        System.out.println("All complaints: " + allComplaints);

        Complaint openComplaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints/3")
                .request(MediaType.APPLICATION_JSON)
                .get(Complaint.class);
        System.out.println(openComplaint);

        openComplaint.setStatus("closed");
        Response response = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints/5")
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.entity(openComplaint, MediaType.APPLICATION_JSON));

        String openComplaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/api/complaints&status=open")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);
        System.out.println("All open complaints: " + openComplaints);

        client.close();
    }

}
