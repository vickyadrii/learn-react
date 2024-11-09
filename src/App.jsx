import { useState } from "react";

const App = () => {
  const initialStudent = {
    name: "",
    age: "",
    class: "",
    job: '',
  };

  const [student, setStudent] = useState(initialStudent);

  const handleChangedStudent = (event, field) => {
    setStudent((previous) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  console.log(student)

  return (
    <>
      {/* Data Student */}
      <div>
        <h1>Data Student</h1>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Class: {student.class}</p>
        <p>Job: {student.job}</p>
      </div>

      {/* Inputs */}
      <div>
        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(event) => handleChangedStudent(event, 'name')} />
        </div>
        {/* Age */}
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" onChange={(event) => handleChangedStudent(event, 'age')} />
        </div>
        {/* Class */}
        <div>
          <label htmlFor="class">Class</label>
          <input type="text" name="class" id="class" onChange={(event) => handleChangedStudent(event, 'class')} />
        </div>

        <div>
          <label htmlFor="job">Job</label>
          <input type="text" name="job" id="job" onChange={(event) => handleChangedStudent(event, 'job')} />
        </div>
      </div>
    </>
  );
};

export default App;
