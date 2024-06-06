package be.lmagnette.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.time.LocalDateTime;

@Entity
public class Action extends PanacheEntity {

    @Column
    public String name;
    @Column
    public LocalDateTime creationDate;

    public Action() {
    }

    public Action(String name, LocalDateTime creationDate) {
        this.name = name;
        this.creationDate = creationDate;
    }
}

