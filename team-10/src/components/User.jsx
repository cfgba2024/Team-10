// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./User.module.css";

const User = () => {
    const initialUsers = [
        {
            id: 1,
            name: "Natalia",
            age: 25,
            email: "natalia@gmail.com",
            current_services: "Psicólogo",
            past_services: ["Psicología", "Terapia de Grupo"],
            future_services: ["Farmacia", "Nutricionista"],
            history_clinic: "Historia 1"
        },
        {
            id: 2,
            name: "Juan",
            age: 30,
            email: "juan@gmail.com",
            current_services: "Psicólogo",
            past_services: ["Psicología"],
            future_services: ["Farmacia", "Cardiólogo"],
            history_clinic: "Historia 2"
        }
    ];

    const initialPriorityUsers = [];
    const [users, setUsers] = useState(initialUsers);
    const [priorityUsers, setPriorityUsers] = useState(initialPriorityUsers);
    const [isProfessional, setIsProfessional] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "admin" && password === "1234") {
            setIsProfessional(true);
            setError("");
        } else {
            setError("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    };

    const handleNextPatient = () => {
        setUsers(prevUsers => {
            if (prevUsers.length > 0) {
                return prevUsers.slice(1);
            }
            return prevUsers;
        });
    };

    const handleNextPriorityPatient = () => {
        setPriorityUsers(prevPriorityUsers => {
            if (prevPriorityUsers.length > 0) {
                return prevPriorityUsers.slice(1);
            }
            return prevPriorityUsers;
        });
    };

    return (
        <div className={styles.container}>
            {!isProfessional ? (
                <div className={styles.loginContainer}>
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>
                                Usuario:
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Contraseña:
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className={styles.input}
                                />
                            </label>
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                        {error && <div className={styles.error}>{error}</div>}
                    </form>
                </div>
            ) : (
                <div className={styles.userContainer}>
                    <div className={styles.userGroup}>
                        <h2>Usuarios Normales</h2>
                        <div className={styles.userList}>
                            {users.map(user => (
                                <div key={user.id} className={styles.user}>
                                    <h3>{user.name}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Edad: {user.age}</p>
                                    <p>Servicios Actuales: {user.current_services}</p>
                                    <p>Servicios Pasados: {user.past_services.join(", ")}</p>
                                    <p>Servicios Futuros: {user.future_services.join(", ")}</p>
                                    <p>Historia Clínica: {user.history_clinic}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNextPatient}>Siguiente Usuario</button>
                    </div>
                    <div className={styles.priorityUserGroup}>
                        <h2>Usuarios Prioritarios</h2>
                        <div className={styles.priorityUserList}>
                            {priorityUsers.map(priorityUser  => (
                                <div key={priorityUser .id} className={styles.priorityUser }>
                                    <h3>{priorityUser .name}</h3>
                                    <p>Email: {priorityUser .email}</p>
                                    <p >Edad: {priorityUser .age}</p>
                                    <p>Servicios Actuales: {priorityUser .current_services}</p>
                                    <p>Servicios Pasados: {priorityUser .past_services.join(", ")}</p>
                                    <p>Servicios Futuros: {priorityUser .future_services.join(", ")}</p>
                                    <p>Historia Clínica: {priorityUser .history_clinic}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNextPriorityPatient}>Siguiente Prioritario</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;