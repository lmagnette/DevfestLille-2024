package be.lmagnette.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.time.LocalDateTime;

@Entity
public class Source extends PanacheEntity {

    @Column
    public String name;
    @Column
    public LocalDateTime ingestionDate;

    public Source() {
    }

    public Source(String name, LocalDateTime ingestionDate) {
        this.name = name;
        this.ingestionDate = ingestionDate;
    }
}
