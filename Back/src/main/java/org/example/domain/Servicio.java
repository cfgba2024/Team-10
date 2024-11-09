package org.example.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Generated;
import lombok.Getter;
import org.hibernate.annotations.Columns;
import org.springframework.boot.autoconfigure.web.WebProperties;
import java.util.List;

@Getter
@Entity
@Table(name = "service")
public class Servicio {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "nombre_servicio")
  private String nombre;
  @OneToMany
  @JoinColumn(name = "profesional_id")
  private List<Profesional>profesionales;
  @OneToOne
  @JoinColumn(name = "cola_id")
  private Cola cola;

  public Servicio(String nombre, List<Profesional> profesionales, Cola cola) {
    this.nombre = nombre;
    this.profesionales = profesionales;
    this.cola = cola;
  }

  public Servicio() {

  }
}
