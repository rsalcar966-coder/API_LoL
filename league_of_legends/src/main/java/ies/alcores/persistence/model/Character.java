package ies.alcores.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "characters")
public class Character {

    @Id
    private String id;

    private Integer championId;
    private String name;
    private String title;

    @Field("role")
    private List<String> roles;
    private String thumbnailUrl;

    // Aquí mapeamos el objeto "info" que viene de MongoDB
    private Info info;

    // IMPORTANTE: Esta clase Info tiene que estar DENTRO de la clase Character
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Info {
        private Integer attack;
        private Integer defense;
        private Integer magic;
        private Integer difficulty;
    }
}