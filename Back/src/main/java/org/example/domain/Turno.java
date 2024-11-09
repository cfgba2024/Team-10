package org.example.domain;

import java.time.LocalDateTime;
import java.util.List;

public class Turno {
  String codigo;
  LocalDateTime horallegada;
  String comentarios;
  List<Visita>visitas;

}
