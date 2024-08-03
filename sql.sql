CREATE TABLE Rol(
    id INT PRIMARY KEY,
    nombre NVARCHAR(100),
);

CREATE TABLE Dia(
    id INT PRIMARY KEY,
	fecha DATE,
    idRol INT,
	asist INT
	FOREIGN KEY (idRol) REFERENCES Rol(id)
);


INSERT INTO Rol (id, nombre) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'guest'),
(4, 'editor'),
(5, 'moderator'),
(6, 'developer'),
(7, 'designer'),
(8, 'tester'),
(9, 'manager'),
(10, 'director'),
(11, 'ceo'),
(12, 'cto'),
(13, 'cfo'),
(14, 'coo'),
(15, 'cdo'),
(16, 'ciso');



--SELECT * FROM Dia 
--delete  from Dia






SELECT r.nombre AS NombreRol, d.asist AS Asistencia
FROM Dia d
INNER JOIN Rol r ON d.idRol = r.id
WHERE d.fecha = '2024-02-04';



DECLARE @StartDate DATE = '2024-01-01';
DECLARE @EndDate DATE = '2024-04-30';
DECLARE @NumDays INT = 10; -- Generar datos para 10 días

BEGIN TRANSACTION;
DECLARE @DayID INT = 1
DECLARE @Counter INT = 1;
WHILE @Counter <= @NumDays
BEGIN
    -- Generar una fecha aleatoria entre @StartDate y @EndDate
    DECLARE @RandomFecha DATE = DATEADD(DAY, ROUND(RAND() * DATEDIFF(DAY, @StartDate, @EndDate), 0), @StartDate);
    
    -- Insertar la asistencia para cada rol en el día aleatorio
    DECLARE @RolID INT = 1;
    WHILE @RolID <= 16 -- Suponiendo que hay 16 roles (ajustar según la cantidad real de roles)
	
    BEGIN
        DECLARE @RandomAsist INT = ROUND(RAND()* 10, 0); -- Genera números aleatorios 0 o 1 para asistencia

        INSERT INTO Dia (id, fecha, idRol, asist)
        VALUES (@DayID, @RandomFecha, @RolID, @RandomAsist);
		SET @DayID = @DayID + 1;
        SET @RolID = @RolID + 1;
    END;

    SET @Counter = @Counter + 1;
END;

COMMIT TRANSACTION;