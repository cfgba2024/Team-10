package org.example.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import org.example.domain.medionotificacion.CorreoElectronico;

@Getter
@Entity
@Table(name = "usuario")
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "nombre_usuario")
  String nombreUsuario;
  @Column(name = "password")
  String password;
  @OneToOne
  @JoinColumn(name = "email_id")
  CorreoElectronico email;
  @Enumerated
  Role role;

  public Usuario(String userName, String password, Role role) {
    this.nombreUsuario = userName;
    this.password = password;
    this.role = role;
  }

  public Usuario() {

  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
  public void setCorreoElectronico(CorreoElectronico email){
    this.email = email;
  }
}
