package be.lmagnette.entities;

import be.lmagnette.models.Category;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Source extends PanacheEntity {

    @Column
    public String title;
    @Column
    public String url;
    @Column
    public LocalDateTime ingestionDate;
    @Enumerated(EnumType.STRING)
    public Category category;

    public Source() {
    }

    public Source(String title,String url, LocalDateTime ingestionDate, Category category) {
        this.title = title;
        this.url = url;
        this.ingestionDate = ingestionDate;
        this.category = category;
    }

    public static List<Source> findByCategory(Category category){
        return list("category", category);
    }
}
