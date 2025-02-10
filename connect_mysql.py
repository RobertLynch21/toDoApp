import mysql.connector

# Establish connection
db = mysql.connector.connect(
    host="localhost",     # Change if MySQL is on a remote server
    user="your_username",
    password="your_password",
    database="your_database"
)

# Create a cursor object
cursor = db.cursor()

# Execute a test query
cursor.execute("SHOW DATABASES")

# Print the databases
for db in cursor:
    print(db)

# Close connection
cursor.close()
db.close()
