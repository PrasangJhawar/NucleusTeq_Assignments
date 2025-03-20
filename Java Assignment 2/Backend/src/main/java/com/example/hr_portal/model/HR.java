package com.example.hr_portal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.*;


@Entity
@Table(name="hr")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HR {
    @Id
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;
}

