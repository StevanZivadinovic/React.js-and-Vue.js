



// let labelPosition = (position, display) => {
//     let label = document.querySelector("label");
//     // label.style.opacity = opacit;
//     label.style.position = "absolute";
//     label.style.top = `${position}px`;
//     label.style.right = "0px";
//     label.style.fontSize = "14px";
//     label.style.display = `${display}`;
//     label.style.color = "red";

//     label.style.opacity = 1;
//   };

// export let validationInputTextarea = (e) => {
//     var pattern =
//       /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
//     let a = pattern.test(e.target.value);
//     console.log(a);

//     if (a) {
//       e.target.style.borderColor = "blue";
//       setStatus({ ...status, textarea: true });
//     } else {
//       e.target.setCustomValidity("Порука је празна");

//       e.target.style.borderColor = "red";
//       setStatus({ ...status, textarea: false });
//     }
//   };
//   export let validationInputPhone = (e) => {
//     var pattern = /^[\s0-9-]+$/;
//     let a = pattern.test(e.target.value);
//     console.log(a);

//     if (a) {
//       setStatus({ ...status, phone: true });
//       e.target.style.borderColor = "blue";
//     } else {
//       e.target.setCustomValidity("Молимо Вас не користите словне карактере.");

//       setStatus({ ...status, phone: true });
//       e.target.style.borderColor = "red";
//       labelPosition("170");
//     }
//   };

//   export let validationInputName = (e) => {
//     var pattern =
//       /^[\s-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ža-ž:/.!?]+$/;
//     let a = pattern.test(e.target.value);
//     console.log(a);

//     if (a) {
//       setStatus({ ...status, validationInput: true });
//       e.target.style.borderColor = "blue";
//       labelPosition("0", 'none');
//     } else {
//       e.target.setCustomValidity(
//         "Молимо Вас не користите бројеве или специјалне карактере."
//       );
//       setStatus({ ...status, validationInput: false });
//       e.target.style.borderColor = "red";

//       labelPosition("50", 'inline');
//     }
//   };

//   export let validationInputSubject = (e) => {
//     var pattern =
//       /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
//     let a = pattern.test(e.target.value);
//     console.log(a);

//     if (a) {
//       setStatus({ ...status, validationInputSubject: true });
//       e.target.style.borderColor = "blue";
//       labelPosition("0", 'none');
//     } else {
//       setStatus({ ...status, validationInputSubject: false });
//       e.target.style.borderColor = "red";
//       labelPosition("230", 'inline');
//     }
//   };

//   export let validationEmail = (e) => {
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     let a = pattern.test(e.target.value);
//     console.log(a);

//     if (a) {
//       e.target.style.borderColor = "blue";
//       setStatus({ ...status, validation: true });
//       let dugme = (document.querySelector(
//         'input[type="submit"]'
//       ).disabled = false);
      
//       labelPosition("110", 'none');

//     } else {
//       e.target.setCustomValidity("Молимо Вас користите формат xxxxx@xxxx.xxx");

//       setStatus({ ...status, validation: true });
//       e.target.style.borderColor = "red";
//       let dugme = (document.querySelector(
//         'input[type="submit"]'
//       ).disabled = true);
//       let dugme1 = document.querySelector('input[type="submit"]');
//       labelPosition("110", 'inline');
//     }
//     console.log(status);
//   };