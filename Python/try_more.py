import sys

exc_type, exc_value, exc_traceback = sys.exc_info()

print("\n --- Error Information ---")
print(f"Error Type: {exc_type.__name__}")
print(f"Error Message: {exc_value}")

tb_frame = exc_traceback.tb_frame
line_no = exc_traceback.tb_lineno

print("\n--- Location Information ---")
print(f"File: {tb_frame.f_code.co_filename}")
print(f"Line Number: {line_no}")
print(f"Function: {tb_frame.f_code.co_name}")

print("\n--- Full Traceback ---")
traceback.print_exc()
