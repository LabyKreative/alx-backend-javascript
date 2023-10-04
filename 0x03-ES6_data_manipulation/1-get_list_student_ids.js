// getListStudentIds that returns an array of ids from a list of object.
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
