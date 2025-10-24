<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Show Student</title>
</head>
<body>
    <h1>Show Student</h1>
    <p>ID: {{ $student->stu_id }}</p>
    <p>Name: {{ $student->stu_name }}</p>
    <p>Email: {{ $student->stu_email }}</p>
    <a href="{{ route('students.index') }}">Back to List</a>
</body>
</html>
