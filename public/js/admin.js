
//admin
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const adminEmail = document.querySelector('#modal-dialog').value;
  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole ({ email: adminEmail}).then(result =>{
       console.log(result);
       alert(result);
       adminForm.reset();
       M.Modal.getInstance(modal).close();

       
    });
});

 

