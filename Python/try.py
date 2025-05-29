try:
    NUMERATOR = 10
    denominator = int(input("Enter a denominator: "))
    result = NUMERATOR / denominator
except:
    print("Error: Cannot divide by zero!")
else:
    print(f"Division successful! Result: {result}")
    print("The else block runs when no exceptions occur in the try block")
    print("Result: " + str(result))
finally:
    print("Closing resource...")
    print("The finally block always runs, whether there was an exception or not")
