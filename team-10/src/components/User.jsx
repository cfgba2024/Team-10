// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./User.module.css"; // Asegúrate de que la ruta sea correcta

const User = () => {
    const initialUsers = [
        {
            id: 1,
            name: "Natalia",
            age: 25,
            email: "natalia@gmail.com",
            current_services: "Psicólogo",
            future_services: ["Farmacia", "Nutricionista"],
            history_clinic: "Historia 1" // Campo nuevo
        },
        {
            id: 2,
            name: "Juan",
            age: 30,
            email: "juan@gmail.com",
            current_services: "Psicólogo",
            future_services: ["Farmacia", "Cardiólogo"],
            history_clinic: "Historia 2" // Campo nuevo
        }
    ];

    const initialPriorityUsers = []; // Inicializa la lista de usuarios prioritarios

    const [users, setUsers] = useState(initialUsers);
    const [priorityUsers, setPriorityUsers] = useState(initialPriorityUsers); // Estado para usuarios prioritarios
    const [animate, setAnimate] = useState(false); // Estado para manejar la animación

    useEffect(() => {
        const userIntervalId = setInterval(() => {
            const newUser  = {
                id: users.length + 1,
                name: `Usuario ${users.length + 1}`,
                age: 20 + (users.length % 10), // Edad aleatoria entre 20 y 29
                email: `usuario${users.length + 1}@gmail.com`,
                current_services: "Psicólogo",
                future_services: ["Farmacia", "Nutricionista", "Cardiólogo"],
                history_clinic: `Historia ${users.length + 1}` // Campo nuevo
            };

            setAnimate(true); // Activa la animación
            setUsers(prevUsers => [...prevUsers,newUser ]); // Agrega el nuevo usuario al principio de la lista

            setTimeout(() => {
                setAnimate(false); // Desactiva la animación después de 500ms
            }, 500);
        }, 20000); // 20 segundos para usuarios normales

        const priorityUserIntervalId = setInterval(() => {
            const newPriorityUser  = {
                id: priorityUsers.length + 1,
                name: `Prioritario ${priorityUsers.length + 1}`,
                age: 20 + (priorityUsers.length % 10), // Edad aleatoria entre 20 y 29
                email: `prioritario${priorityUsers.length + 1}@gmail.com`,
                current_services: "Psicólogo",
                future_services: ["Farmacia", "Nutricionista"],
                history_clinic: `Historia Prioritaria ${priorityUsers.length + 1}` // Campo nuevo
            };

            setAnimate(true); // Activa la animación
            setPriorityUsers(prevPriorityUsers => [...prevPriorityUsers,newPriorityUser]); // Agrega el nuevo usuario prioritario

            setTimeout(() => {
                setAnimate(false); // Desactiva la animación después de 500ms
            }, 500);
        }, 20000); // 20 segundos para usuarios prioritarios

        return () => {
            clearInterval(userIntervalId); // Limpia el intervalo de usuarios normales al desmontar el componente
            clearInterval(priorityUserIntervalId); // Limpia el intervalo de usuarios prioritarios al desmontar el componente
        };
    }, [users, priorityUsers]);

    // Función para eliminar el primer usuario de la lista de usuarios normales
    const handleNextPatient = () => {
        setUsers(prevUsers => {
            if (prevUsers.length > 0) {
                return prevUsers.slice(1); // Elimina el primer usuario
            }
            return prevUsers; // Si no hay usuarios, no hace nada
        });
    };

    // Función para eliminar el primer usuario de la lista de usuarios prioritarios
    const handleNextPriorityPatient = () => {
        setPriorityUsers(prevPriorityUsers => {
            if (prevPriorityUsers.length > 0) {
                return prevPriorityUsers.slice(1); // Elimina el primer usuario prioritario
            }
            return prevPriorityUsers; // Si no hay usuarios prioritarios, no hace nada
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.userGroup}>
                < h2>Usuarios Normales</h2>
                <button onClick={handleNextPatient}>Siguiente Paciente</button> {/* Botón para siguiente paciente */}
                <div className={styles.userList}>
                    {users.map(user => (
                        <div key={user.id} className={`${styles.user} ${animate ? styles.enter : ''}`}>
                            <h3>{user.name}</h3>
                            <p>Edad: {user.age}</p>
                            <p>Email: {user.email}</p>
                            <p>Servicios actuales: {user.current_services}</p>
                            <p>Historia Clínica: {user.history_clinic}</p> {/* Mostrar historia clínica */}
                            <div className={styles.futureService}>
                                <h4>Servicios futuros:</h4>
                                <ul>
                                    {user.future_services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>

            <div className={styles.userGroup}>
                <h2>Usuarios Prioritarios</h2>
                <button onClick={handleNextPriorityPatient}>Siguiente Paciente Prioritario</button> {/* Botón para siguiente paciente prioritario */}
                <div className={styles.userList}>
                    {priorityUsers.map(priorityUser  => (
                        <div key={priorityUser .id} className={`${styles.user} ${animate ? styles.enter : ''}`}>
                            <h3>{priorityUser .name}</h3>
                            <p>Edad: {priorityUser .age}</p>
                            <p>Email: {priorityUser .email}</p>
                            <p>Servicios actuales: {priorityUser .current_services}</p>
                            <p>Historia Clínica: {priorityUser .history_clinic}</p> {/* Mostrar historia clínica */}
                            <div className={styles.futureService}>
                                <h4>Servicios futuros:</h4>
                                <ul>
                                    {priorityUser .future_services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default User;