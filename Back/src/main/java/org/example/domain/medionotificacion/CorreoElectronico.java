package org.example.domain.medionotificacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.Columns;

@Entity
@Table(name = "correo_electronico")
public class CorreoElectronico implements MedioComunicacion {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "email")
  String email;


  public CorreoElectronico(String email) {
    this.email = email;
  }

  public CorreoElectronico() {

  }

  @Override
  public void notificar(String mensaje) {
    //TODO IMPLEMENTAR NOTIFICACION POR CORREO ELECTRONICO
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
