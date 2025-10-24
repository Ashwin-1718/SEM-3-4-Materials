<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Student</title>
</head>
<body>
    <h1>Create Student</h1>
    <form action="{{ route('students.store') }}" method="POST">
        @csrf
        <label for="stu_id">Student ID:</label>
        <input type="text" id="stu_id" name="stu_id"><br><br>

        <label for="stu_name">Student Name:</label>
        <input type="text" id="stu_name" name="stu_name"><br><br>

        <label for="stu_email">Student Email:</label>
        <input type="email" id="stu_email" name="stu_email"><br><br>

        <button type="submit">Create</button>
    </form>
</body>
</html>
