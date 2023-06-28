import React ,{useRef} from 'react'

import emailjs from '@emailjs/browser';


const Contact = () => {


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c49iv1f', 'template_ob1mjlr', form.current, 'sFEHcthi5sPkXNtBg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };






  return (
    <>
    <div id='contact' style={{textAlign:"center",margin:"20px",padding:"30px" ,border:"1px solid",borderRadius:"20px",borderColor:"cyan"}}>
    <form ref={form} onSubmit={sendEmail}>
      <label style={{color:"white"}}>Name : </label>
      <input type="text" name="user_name" />
      <div style={{margin:"10px"}}>
      <label style={{color:"white"}}>Email :  </label>
      <input type="email" name="user_email" />

      </div>
      <div>
      <label style={{color:"white"}}>Message :</label>
      <textarea name="message" />

        </div>
    
      <input type="submit" value="Send" />
    </form>

    </div>
  
    </>
  )
}

export default Contact