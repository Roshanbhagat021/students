function Student_details(name,roll_no, Class, section, science ,math ,social_science,english,hindi){
    this.name = name;
    this.roll_no = roll_no;
    this.Class = Class;
    this.section = section;
    this.science = science;
    this.math = math;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
  }
  
  
  // creating method for getting top3 subjects
  Student_details.prototype.getTop3Subjects = function () {
      const subjects = [
          { subject: 'Science', marks: this.science },
          { subject: 'Math', marks: this.math },
          { subject: 'Social Science', marks: this.social_science },
          { subject: 'English', marks: this.english },
          { subject: 'Hindi', marks: this.hindi },
      ];
  
      subjects.sort((a, b) => b.marks - a.marks);
      return subjects.slice(0,3);
  };
  
  
  Student_details.prototype.printReportCard = function () {
    console.log('+----------------------+');
    console.log("|     REPORT CARD      |");
    console.log('+----------------------+');
    console.log(`|  Name       - ${this.name} |` );
    console.log(`|  Roll No.   - ${this.Class}   |`);
    console.log(`|  Class      - ${this.roll_no}     |`);
    console.log(`|  Science    - ${this.science}     |`);
    console.log(`|  S.Sc       - ${this.social_science}     |`);
    console.log(`|  Maths      - ${this.math}     |`);
    console.log(`|  English    - ${this.english}     |`);
    console.log(`|  Hindi      - ${this.hindi}     |`);
    
    // calculating the percentage
    let percentage = ((this.science + this.social_science + this.math + this.english + this.hindi)/500)*100;
    console.log(`|  Percentage - ${percentage}   |`);
    console.log('+----------------------+');
  
  };
  
  
  
  let student1 = new Student_details('roshan', 12, '10th', 'A', 90, 85, 78, 92, 88);
  console.log(student1.getTop3Subjects());
  student1.printReportCard();