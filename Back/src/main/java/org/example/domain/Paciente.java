package org.example.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import org.example.domain.medionotificacion.CorreoElectronico;

@Getter
@Entity
@Table(name = "paciente")
public class Paciente {
  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
  private Long id;
  @Column(name = "nombre")
  String nombre;
  @Column(name = "apellido")
  String apellido;
  @Column(name = "dni")
  String dni;
  @OneToOne
  @JoinColumn(name = "email_id")
  CorreoElectronico correoElectronico;
  @OneToOne
  @JoinColumn(name = "turno_id")
  Turno turno;


  public Paciente(String nombre, String apellido, String dni, CorreoElectronico correoElectronico, Turno turno) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.correoElectronico = correoElectronico;
    this.turno = turno;
  }

  public Paciente() {

  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
