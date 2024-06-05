package be.lmagnette.entities;

import be.lmagnette.models.Category;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.time.LocalDateTime;

@Entity
public class Source extends PanacheEntity {

    @Column
    public String name;
    @Column
    public LocalDateTime ingestionDate;
    @Enumerated(EnumType.STRING)
    public Category category;

    public Source() {
    }

    public Source(String name, LocalDateTime ingestionDate, Category category) {
        this.name = name;
        this.ingestionDate = ingestionDate;
        this.category = category;
    }
}
