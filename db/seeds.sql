-- Insert rows into table 'TableName'
INSERT INTO burger (burger_name)
VALUES
  ("Cheese burger");
  
INSERT INTO burger (burger_name, devoured)
VALUES
  ("Bacon cheese burger", true),
  ("Mushroom burger", false);
  
SELECT * FROM burger;