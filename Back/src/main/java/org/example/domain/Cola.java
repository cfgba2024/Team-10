package org.example.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "cola")
public class Cola {
  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
  private Long id;
  @OneToMany
  @JoinColumn(name = "paciente_id")
      private List<Paciente> pacientes;


  public Cola(){
    this.pacientes = new ArrayList<>();
  }


  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
