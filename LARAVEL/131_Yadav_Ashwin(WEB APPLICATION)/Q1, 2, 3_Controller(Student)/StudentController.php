<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Method to show all students without pagination
    public function listAll()
    {
        $students = Student::all();
        return view('students.list', compact('students'));
    }

    // Method to show paginated students
    public function index()
    {
        $students = Student::paginate(2); // Paginate with 10 items per page
        return view('students.index', compact('students'));
    }

    public function create()
    {
        return view('students.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'stu_id' => 'required|numeric|unique:students,stu_id',
            'stu_name' => 'required|string',
            'stu_email' => 'required|email|unique:students,stu_email',
        ]);

        Student::create($request->only('stu_id', 'stu_name', 'stu_email'));

        return redirect()->route('students.list')->with('success', 'Student created successfully.');
    }

    public function show(Student $student)
    {
        return view('students.show', compact('student'));
    }

    public function edit(Student $student)
    {
        return view('students.edit', compact('student'));
    }

    public function update(Request $request, Student $student)
    {
        $request->validate([
            'stu_id' => 'required|numeric|unique:students,stu_id,' . $student->id,
            'stu_name' => 'required|string',
            'stu_email' => 'required|email|unique:students,stu_email,' . $student->id,
        ]);

        $student->update($request->only('stu_id', 'stu_name', 'stu_email'));

        return redirect()->route('students.list')->with('success', 'Student updated successfully.');
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return redirect()->route('students.list')->with('success', 'Student deleted successfully.');
    }
}
