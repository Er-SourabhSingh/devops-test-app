import sqlite3
import subprocess
import os

# S3649: SQL Injection - CRITICAL Vulnerability (SonarQube CE taint analysis)
def get_user(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor.execute(query)
    return cursor.fetchall()

# S3649: SQL Injection - CRITICAL Vulnerability
def get_product(product_id):
    conn = sqlite3.connect('shop.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE id = " + product_id)
    return cursor.fetchall()

# S2076: OS Command Injection - CRITICAL Vulnerability
def list_files(directory):
    os.system("ls " + directory)

# S2076: OS Command Injection - CRITICAL Vulnerability
def run_report(report_name):
    subprocess.call("generate_report.sh " + report_name, shell=True)
