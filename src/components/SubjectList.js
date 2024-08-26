import '../styles/SubjectList.css';
import { subjectList } from '../parseCSV.js';
import Subject from './Subject.js';

function SubjectList() {
  let subjectBoxList = subjectList.map(subject =>
    <li className="Subject" key={subject[0]}>
      {/* <img className="Subject-image" src={require("../assets/1.png")} alt="" /> */}
      <div className="Subject-body">
        <div className="Subject-head">
          <p className="Subject-number" style={{backgroundColor: `hsl(${2.7 * subject[0] + 90}, 70%, 50%)`}}>{subject[0]}</p>
          <p className="Subject-topic" style={{color: `hsl(${2.7 * subject[0] + 90}, 70%, 50%)`}}>{subject[2]}</p>
        </div>
        <p className="Subject-question">{subject[3]}</p>
        <p className="Subject-description">{subject[4]}</p>
      </div>
    </li>
  );

  return (
    <ul className="SubjectList">
      {subjectBoxList}
    </ul>
  );
}

export default SubjectList;
