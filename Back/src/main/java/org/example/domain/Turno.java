package org.example.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Entity
@Table(name = "turno")
public class Turno {
  @Column(name = "codigo")
  String codigo;
  @Column(name = "hora_llegada")
  LocalDateTime horallegada;
  @Column(name = "comentarios")
  String comentarios;
  @OneToMany
  @JoinColumn(name = "visita_id")
  List<Visita> visitas;
  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
  private Long id;

  public Turno(String codigo, LocalDateTime horallegada, String comentarios, List<Visita> visitas) {
    this.codigo = codigo;
    this.horallegada = horallegada;
    this.comentarios = comentarios;
    this.visitas = visitas;
  }

  public Turno() {

  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
