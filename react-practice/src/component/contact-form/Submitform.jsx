const submit_url ='https://www.greatfrontend.com/api/questions/contact-form';

export default async function Submitform(event){
  event.preventDefault()
  const form = event.target;

  try{
    if(form.action !== submit_url){
        alert('incorrect action value');
        return
    }
    if(form.method.toLowerCase() !== 'post'){
        alert('incorrect method value');
        return
    }
     const formData = new FormData(form);
     const response = await fetch(submit_url, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }),
     });
     const text = await response.text();
     alert(text);
     
  } catch(_){
     alert("error")
  }
}