<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Students List</title>
<style>
* {
    padding: 5px;
}
th, td, tr {
    border: 1px solid blue;
    font-family: cambria;
}
th {
    color: blue;
}
</style>
</head>
<body>
    <div class="container mt-4">
        <h1>Students List:)</h1>
        <a href="{{ route('students.create') }}" class="btn btn-primary mb-3">Create New Student</a>
        @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
        <!-- <table cellspacing="10px" cellpadding="10px"> -->
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($students as $student)
                <tr>
                    <td>{{ $student->stu_id }}</td>
                    <td>{{ $student->stu_name }}</td>
                    <td>{{ $student->stu_email }}</td>
                    <td>
                        <a href="{{ route('students.show', $student->id) }}" class="btn btn-info btn-sm">Show</a>
                        <a href="{{ route('students.edit', $student->id) }}" class="btn btn-warning btn-sm">Edit</a>
                        <form action="{{ route('students.destroy', $student->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <!-- Pagination Links -->
        <div class="d-flex justify-content-center">
            {{ $students->links() }}
        </div>
    </div>
</body>
</html>
