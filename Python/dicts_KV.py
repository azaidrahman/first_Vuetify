student = {
    "name": "Alex",
    "age":20,
    "major": "Computer Science"
}

for key in student:
    print(key)

print("")

for value in student.values():
    print(value)

print("")

for key,value in student.items():
    print(f"{key}: {value}")
