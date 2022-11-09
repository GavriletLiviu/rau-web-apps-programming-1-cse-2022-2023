import sqlite3

from courses import Course

def connect():
    conn = sqlite3.connect("C:\\Users\\liviu\\Documents\\CURSURI\\YEAR 3\\YEAR 3 Sem 1\\Module1\\Web Applications Programming\\rau-web-apps-programming-1-cse-2022-2023\\unitime\\database\\unitime.db")
    return conn 

def get_all_courses(conn):
    query = "select * from courses"
    cursor = conn.cursor()
    data = list(cursor.execute(query))
    
    courses = []
    for course in data:
        new_course = Course(name=course[1], url=course[3], path_to_image=course[4])
        courses.append(new_course)

    return courses