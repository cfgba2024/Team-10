package org.example.controllers;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsuarioController {
    @GetMapping
    public String getAllUsers() {
        return "Test users";  // Returns the list of users
    }
}
