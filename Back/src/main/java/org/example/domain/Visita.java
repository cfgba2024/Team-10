package org.example.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "visita")
public class Visita {
  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
  private Long id;
  @OneToOne
  @JoinColumn(name = "servicio_id")
  Servicio servicio;
  @Enumerated
  Estado estadoVisita;


  public Visita(Servicio servicio, Estado estadoVisita) {
    this.servicio = servicio;
    this.estadoVisita = estadoVisita;
  }

  public Visita() {

  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
