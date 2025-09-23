// import "./count.css"
// import CountUp from "react-countup"
// import student1 from "../../assets/student1.png"
// import student2 from "../../assets/student2.png"
// import student3 from "../../assets/student3.png"
// import student4 from "../../assets/student4.png"
// import { useEffect, useState } from "react"
// import ScrollTrigger from "react-scroll-trigger"

// const Count = () => {

//     const [counterOn, setCounterOn] = useState(false);

//     const [loopNum, setLoopNum] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false); 
//     // const toRotate = ["1500+","1500+","1500+"];
//     const [text, setText] = useState("");
//     const [delta, setDelta] = useState(300 - Math.random() * 100)
//     const period = 2000;
  
//     useEffect(() => {
//         let ticker = setInterval(() => {
//            tick();
//         },delta)
  
//         return () => {clearInterval(ticker)};
//     }, [text])
  
//     const tick = () => {
//         let i = loopNum % toRotate.length;
//         let fullText = toRotate[i];
//         let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length + 1);
   
//         setText(updatedText);
//         if(isDeleting){
//            setDelta(prevDelta => prevDelta/2)
//         }
        
//         if(!isDeleting && updatedText === fullText){
//             setIsDeleting(true);
//             setDelta(period);
//         }else if(isDeleting && updatedText === ""){
//             setIsDeleting(fasle);
//             setLoopNum(loopNum + 1);
//             setDelta(2000);
//         }
//     }

//     return (
//         <>
//         <section className="count-sec">
//             <ScrollTrigger  onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//             <div className="sec-counts">
//                 <img src={student1} alt="" />
//                 <h1>
//                 {counterOn &&   <CountUp style={{
//                fontSize: 23.5
//                 }} start={0} end={65972} duration={2} delay={0}/>}  
//                 </h1>
//                 <p>Students Enrolled</p>
//             </div>
//             </ScrollTrigger>
//             <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//             <div className="sec-count">
//                 <img src={student2} alt="" />
//                 <h1>
//                 {counterOn &&   <CountUp style={{
//                   fontSize: 23.5
//                 }} start={0} end={53710} duration={2} delay={0}/>}  
//                 </h1>
//                 <p>Students Enrolled</p>
//             </div>
//             </ScrollTrigger>
//             <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//             <div className="sec-countss">
//                 <img src={student3} alt="" />
//                 <h1>
//                 {counterOn &&   <CountUp  style={{
//                    fontSize: 23.5
//                 }} start={0} end={48972} duration={2} delay={0}/>}  
//                 </h1>
//                 <p>Students Enrolled</p>
//             </div>
//             </ScrollTrigger >
//             <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//             <div className="sec-countsss">
//                 <img src={student4} alt="" />
//                 <h1>
//                 {counterOn &&   <CountUp style={{
//                    fontSize: 23.5
//                 }} start={0} end={500} duration={2} delay={0}/>}  
//                 </h1>
//                 <p>Students Enrolled</p>
//             </div>
//             </ScrollTrigger>
//         </section>
//         </>
//     )
// }

// export default Count