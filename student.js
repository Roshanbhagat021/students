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
  
  
  // creating method for getting top3 highest marks
  Student_details.prototype.getTop3Subjects = function () {
      const subjects = [
          { subject: 'Science', marks: this.science },
          { subject: 'Math', marks: this.math },
          { subject: 'Social Science', marks: this.social_science },
          { subject: 'English', marks: this.english },
          { subject: 'Hindi', marks: this.hindi },
      ];
  
      // Sort subjects by marks in descending order
      subjects.sort((a, b) => b.marks - a.marks);
  
      // Return the top 3 subjects
      return subjects.slice(0,3);
  };
  
  
  Student_details.prototype.printReportCard = function () {
    console.log('+---------------+');
    console.log("|  Report Card  |");
    console.log('+---------------+');
    console.log(`| Name - ${this.name} |` );
    console.log(`| Roll Number - ${this.roll_no} |`);
    console.log('Class:', this.Class);
    console.log('Section:', this.section);
  
    // Print marks in each subject
    console.log('Marks in Subjects:');
    console.log('   Science:', this.science);
    console.log('   Math:', this.math);
    console.log('   Social Science:', this.social_science);
    console.log('   English:', this.english);
    console.log('   Hindi:', this.hindi);
  
    console.log('-------------');
   
  };
  
  
  const student = new Student_details('Raj', 12, '10th', 'A', 90, 85, 78, 92, 88);
  student.printReportCard();