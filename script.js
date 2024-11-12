


const questions = [
    // 2017
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2017,
        subject: "BCA-101 (Computer Fundamental & Problem solving Technique)",
        source: "source/2017 101.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2017,
        subject: "BCA-102 (C Language)",
        source: "source/2017 102.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2017,
        subject: "BCA-103 (Digital Electronics)",
        source: "source/2017 103.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2017,
        subject: "BCA-104 (Discrete Math)",
        source: "source/2017 104.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2017,
        subject: "BCA-105 (Communication English)",
        source: "source/2017 105.pdf"
    },

    // 2018
    {
        image: "source/103 2018.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2018,
        subject: "BCA-103 (Digital Electronics)",
        source: "source/2018 103-1.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2018,
        subject: "BCA-102 (C Langusage)",
        source: "source/2018 102.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2018,
        subject: "BCA-101 (Computer Fundamental & Problem solving Technique)",
        source: "source/2018-101-1.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2018,
        subject: "BCA-105 (Communication English)",
        source: "source/2018-105(COMM ENG).pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2018,
        subject: "BCA-104 (Discrete Math)",
        source: "source/2018 104.pdf"
    },

    // 2019
    {
        image: "source/101.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-101 (Computer Fundamental)",
        source: "source/2019 101.pdf"
    },
    {
        image: "source/104 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-104 (Mathematics)",
        source: "source/2019 104.pdf"
    },
    {
        image: "source/102 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-102 (C Language)",
        source: "source/2019 102.pdf"
    },
    {
        image: "source/105 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-105 (Communication English)",
        source: "source/2019 105.pdf"
    },
    {
        image: "source/104 arr 2019.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-104 (ARR) (Discrete Math)",
        source: "source/2019 104.pdf"
    },
    {
        image: "source/101.jpg",
        title: "End Semester Examination of Semester-I",
        year: 2019,
        subject: "BCA-103 (Digital Electronics)",
        source: "source/2019 103.pdf"
    },

    // 2023
    {
        image: "source/105 2019.jpg",
        title: "1st & End Semester Examination of Semester-I ALL",
        year: 2023,
        subject: "All Subject",
        source: "source/BCA 1st Sem Question paper of MCA.pdf"
    }
];


// Function to dynamically create question cards
const questionContainer = document.getElementById("questionContainer");

questions.forEach(q => {
    const questionCard = document.createElement("div");
    questionCard.classList.add("question");

    const badge = document.createElement("div");
    badge.classList.add("badge");
    badge.textContent = "BCA";

    const details = document.createElement("div");
    details.classList.add("det");
    details.innerHTML = `
        <h4>${q.title}</h4>
        <h5><b>Year:</b> ${q.year}</h5>
        <h5><b>Subject:</b> ${q.subject}</h5>
      
    `;

    questionCard.appendChild(badge);
    questionCard.appendChild(details);
    questionContainer.appendChild(questionCard);


    let question=document.querySelectorAll('.question')      
question.forEach((element, index) => {
    // console.log(element);
        
    
    question[index].addEventListener("mouseenter", () => {
        
        console.log(question[index]);
        
        
        gsap.to(question[index],{

            scale :1.09,
           
            cursor:"pointer",
            scrub:true,

        })
    });
  
    question[index].addEventListener("click", () => {
       
    //    console.log("clicked");
       
        window.open(`${q.source}`, "_blank");


    });

   
});
question.forEach((element, index) => {
    element.addEventListener("mouseleave", () => {
        
        gsap.to(question,{
            scale :1,

        })
    });

    
});

   

});






