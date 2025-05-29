todos = []

todos.append("Learn Python")
todos.append("Practice coding")
todos.append("Take a break")



print("My To-Do List:")

for index,task in enumerate(todos,1):
    print(f"{index}.{task}")
