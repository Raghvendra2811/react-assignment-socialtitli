import React, { useState } from 'react'
import Teams from './Teams'
import "./myteam.css"

const MyTeams = () => {

   
    let originalData = [ [{
        image: "https://ci-front.netlify.app/assets/img/team/team-1.png",
        name: "Mr. Sameer Kulkarni",
        post: "Chief Operating Officer(COO)",
        para1:
          "As Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-2.png",
        name: "Mr. Sandesh Chitnis",
        post: "Chief Executive Officer(CEO)",
        para1:
          "Sandesh Chitnis, manages complete Technology Development for the organization along with focusing on strategic tie-ups for Business growth.",
        para2:
          "He has been associated with the Finance & Broking industry for over 23 years out of which 18 years were at Morgan Stanley.",
        para3:
          "He holds a Bachelors Degree in Commerce with a Post Graduation in Export Management from Mumbai University.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-5.png",
        name: "Mr. Sharookh Colabawalla",
        post: "Chief Financial Officer(CFO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. Over 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "He was heading the Finance Function for Motors & Calibration divisions of Lawkim Ltd (Godrej group Company). Extensive experience in conceptualizing and implementing financial procedures, with working capital management, profit monitoring and building internal financial controls. Was instrumental in implementing ERP systems & MIS Systems in the Motors Division. Played a major part in Turnaround of Domestic call centre business.",
        para3:
          "Major Areas of Expertise: Financial Planning & Strategy, Managing Profitability, HR Compliance, Promoting Process improvement",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-3.png",
        name: "Mr. Raghav Krishnamoorthy",
        post: "Managing Director(MD)",
        para1:
          "Mahesh is a Chartered Accountant with over two decades of experience in the Banking, Financial Services, Insurance and IT/ITES sector in areas of Business development, Operations, Service delivery, Finance & Accounts, Technology, Risk and Compliance. He has been with leading brands like ICICI Bank, ICICI Lombard, IDBI Bank, Angel Broking, Ambit Capital and Mahindra & Mahindra before taking over the leadership of Coreintegra.",
        para2:
          "Prior to joining Coreintegra, Mahesh built Mahindra Integrated Business Solutions, a Mahindra Group Company as a Shared Services Centre for the Group along with being a competent KPO for non Mahindra companies. He has been an active member of NASSCOM BPM Council and holds a passion for developing Tier B & C locations in India in the IT/ITES space.",
        para3:
          "Mahesh is a specialist in setting up businesses and re-engineering operating units as a profit centre by designing unique value propositions for Clients using lean processes, low cost-high impact solutions and innovative technology.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-4.png",
        name: "Ms. Priya Nair",
        post: "Chief Operating Officer(COO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. OverAs Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement. 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      }
    ],
       [
        {
        image: "https://ci-front.netlify.app/assets/img/team/team-1.png",
        name: "Mr. Sameer Kulkarni",
        post: "Chief Operating Officer(COO)",
        para1:
          "As Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-2.png",
        name: "Mr. Sandesh Chitnis",
        post: "Chief Executive Officer(CEO)",
        para1:
          "Sandesh Chitnis, manages complete Technology Development for the organization along with focusing on strategic tie-ups for Business growth.",
        para2:
          "He has been associated with the Finance & Broking industry for over 23 years out of which 18 years were at Morgan Stanley.",
        para3:
          "He holds a Bachelors Degree in Commerce with a Post Graduation in Export Management from Mumbai University.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-5.png",
        name: "Mr. Sharookh Colabawalla",
        post: "Chief Financial Officer(CFO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. Over 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "He was heading the Finance Function for Motors & Calibration divisions of Lawkim Ltd (Godrej group Company). Extensive experience in conceptualizing and implementing financial procedures, with working capital management, profit monitoring and building internal financial controls. Was instrumental in implementing ERP systems & MIS Systems in the Motors Division. Played a major part in Turnaround of Domestic call centre business.",
        para3:
          "Major Areas of Expertise: Financial Planning & Strategy, Managing Profitability, HR Compliance, Promoting Process improvement",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-3.png",
        name: "Mr. Mahesh Krishnamoorthy",
        post: "Managing Director(MD)",
        para1:
          "Mahesh is a Chartered Accountant with over two decades of experience in the Banking, Financial Services, Insurance and IT/ITES sector in areas of Business development, Operations, Service delivery, Finance & Accounts, Technology, Risk and Compliance. He has been with leading brands like ICICI Bank, ICICI Lombard, IDBI Bank, Angel Broking, Ambit Capital and Mahindra & Mahindra before taking over the leadership of Coreintegra.",
        para2:
          "Prior to joining Coreintegra, Mahesh built Mahindra Integrated Business Solutions, a Mahindra Group Company as a Shared Services Centre for the Group along with being a competent KPO for non Mahindra companies. He has been an active member of NASSCOM BPM Council and holds a passion for developing Tier B & C locations in India in the IT/ITES space.",
        para3:
          "Mahesh is a specialist in setting up businesses and re-engineering operating units as a profit centre by designing unique value propositions for Clients using lean processes, low cost-high impact solutions and innovative technology.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-4.png",
        name: "Ms. Preeti Nair",
        post: "Chief Operating Officer(COO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. OverAs Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement. 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      },
    ],
     [
        {
        image: "https://ci-front.netlify.app/assets/img/team/team-1.png",
        name: "Mr. ankit Kulkarni",
        post: "Chief Operating Officer(COO)",
        para1:
          "As Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-2.png",
        name: "Mr. kartik Chitnis",
        post: "Chief Executive Officer(CEO)",
        para1:
          "Sandesh Chitnis, manages complete Technology Development for the organization along with focusing on strategic tie-ups for Business growth.",
        para2:
          "He has been associated with the Finance & Broking industry for over 23 years out of which 18 years were at Morgan Stanley.",
        para3:
          "He holds a Bachelors Degree in Commerce with a Post Graduation in Export Management from Mumbai University.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-5.png",
        name: "Mr. Sharookh Colabawalla",
        post: "Chief Financial Officer(CFO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. Over 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "He was heading the Finance Function for Motors & Calibration divisions of Lawkim Ltd (Godrej group Company). Extensive experience in conceptualizing and implementing financial procedures, with working capital management, profit monitoring and building internal financial controls. Was instrumental in implementing ERP systems & MIS Systems in the Motors Division. Played a major part in Turnaround of Domestic call centre business.",
        para3:
          "Major Areas of Expertise: Financial Planning & Strategy, Managing Profitability, HR Compliance, Promoting Process improvement",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-3.png",
        name: "Mr. Mahesh Krishnamoorthy",
        post: "Managing Director(MD)",
        para1:
          "Mahesh is a Chartered Accountant with over two decades of experience in the Banking, Financial Services, Insurance and IT/ITES sector in areas of Business development, Operations, Service delivery, Finance & Accounts, Technology, Risk and Compliance. He has been with leading brands like ICICI Bank, ICICI Lombard, IDBI Bank, Angel Broking, Ambit Capital and Mahindra & Mahindra before taking over the leadership of Coreintegra.",
        para2:
          "Prior to joining Coreintegra, Mahesh built Mahindra Integrated Business Solutions, a Mahindra Group Company as a Shared Services Centre for the Group along with being a competent KPO for non Mahindra companies. He has been an active member of NASSCOM BPM Council and holds a passion for developing Tier B & C locations in India in the IT/ITES space.",
        para3:
          "Mahesh is a specialist in setting up businesses and re-engineering operating units as a profit centre by designing unique value propositions for Clients using lean processes, low cost-high impact solutions and innovative technology.",
      },
      {
        image: "https://ci-front.netlify.app/assets/img/team/team-4.png",
        name: "Ms. Preeti Nair",
        post: "Chief Operating Officer(COO)",
        para1:
          "Sharookh Colabawalla , Worked with Godrej Group as AGM Finance-Motors Division. OverAs Joint CEO at Core Integra, Preeti Nair's responsibilities include Operations, driving Operational Excellence, Client Relation & Engagement, Policies and Procedures, Manpower Planning, Performance Management and Employee Engagement. 25 Years experience in all areas of Accounts, Finance & Commercial Operations, including Purchase, Systems in both Manufacturing & Service industries.",
        para2:
          "Preeti comes with a rich experience of more than 17 years in Human Resources and has worked primarily in the BPO and IT industries in India and the US. She has handled a wide gamut of responsibilities in the HR function including Recruitment, Employee Relations, Process & Policy documentation, Performance Management and US Labor and Immigration Law. Preeti last worked with an IT firm in New Jersey, US and her previous employers include leading global BPOs such as Convergys, and Stream Tracmail.",
        para3:
          "Preeti holds an MBA in HR from KJ SIMSR, Mumbai and PGD in PR & Mass Communication from XIC, Mumbai.",
      },] ];
      let[activeData,setActiveData] = useState(0)
      let [data,setData] =useState(originalData[0])

      const changeArrayData=(index)=>{
        setActiveData(index);
        setData(originalData[index])    
    }

  return (
    <div>
        <div id='ourTeamDiv'>
            <div>
                <h2>Meet Our <span className='blueTeamsDiv' >Team</span></h2>
            </div>
            <div>
                <div><h2 className={activeData===0?"bottomBorder":""} onClick={()=>{changeArrayData(0)}}>Board Of Directors</h2>
                <h2 className={activeData===1?"bottomBorder":""} onClick={()=>{changeArrayData(1)}}>Key Leaders</h2>
                <h2 className={activeData===2?"bottomBorder":""} onClick={()=>{changeArrayData(2)}}>Leadership</h2></div>
            </div>
        </div>
        <div id="teamsSlider">
            <Teams data={data}/>
        </div>
    </div>
  )
}

export default MyTeams