import '../styles/SubjectList.css';
import { subjectList } from '../parseCSV.js';
import Subject from './Subject.js';

function SubjectList() {
  let subjectBoxList = subjectList.map(subject =>
    <li className="Subject" key={subject[0]}>
      <p className="Subject-number">{subject[0]}</p>
      <p>{subject[3]}</p>
    </li>
  );

  return (
    <ul className="SubjectList">
      {subjectBoxList}
    </ul>
  );
}

export default SubjectList;
