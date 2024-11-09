package org.example.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import org.example.domain.medionotificacion.CorreoElectronico;

@Getter
@Entity
@Table(name = "profesional")
public class Profesional {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "nombre")
  String nombre;
  @Column(name = "apellido")
  String apellido;
  @OneToOne
  @JoinColumn(name = "email_id")
  CorreoElectronico email;
  @OneToOne
  @JoinColumn(name = "usuario_id")
  Usuario usuario;
  @Column(name = "consultorioActual")
  Integer consultorioActual;
  @ManyToOne
  @JoinColumn(name = "servicio_id")
  Servicio servicio;

  public Profesional(String nombre, String surname, CorreoElectronico email, Usuario usuario, Integer consultorioActual, Servicio servicio) {
    this.nombre = nombre;
    this.apellido = surname;
    this.email = email;
    this.usuario = usuario;
    this.consultorioActual = consultorioActual;
    this.servicio = servicio;
  }

  public Profesional() {

  }
}
